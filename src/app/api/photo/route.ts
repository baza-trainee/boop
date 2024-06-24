import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { PhotoFormData } from '@/types/photo';
import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.photo.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET PHOTOS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: PhotoFormData = await request.json();
    const response = await prisma.photo.create({
      data: {
        location: data.location,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[ADD PHOTO]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
