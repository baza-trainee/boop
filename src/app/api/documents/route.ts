import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { DocumentFormData } from '@/types/documents';
import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.document.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET DOCUMENTS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: DocumentFormData = await request.json();
    const response = await prisma.document.create({
      data: {
        title: data.title,
        documentUrl: data.documentUrl,
        documentId: data.documentId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[ADD DOCUMENT]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
