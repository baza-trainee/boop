import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { DocumentFormData } from '@/types/documents';
import '../swagger-comments';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const data: { newDocument: DocumentFormData } = await request.json();
    const updatedDocument = await prisma.document.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title: data.newDocument.title,
        documentUrl: data.newDocument.documentUrl,
        documentId: data.newDocument.documentId,
      },
    });
    return NextResponse.json(updatedDocument, { status: 200 });
  } catch (error) {
    console.log('[UPDATE DOCUMENT]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
