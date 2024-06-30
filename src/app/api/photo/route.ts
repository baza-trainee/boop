import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { PhotoFormData } from '@/types/photo';
import './swagger-comments';

export async function GET(request: Request) {
  try {
    await prismaConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '11', 10);

    const offset = (page - 1) * limit;

    const photos = await prisma.photo.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalRecords = await prisma.photo.count();

    const response = {
      data: photos,
      meta: {
        page,
        limit,
        totalRecords,
        totalPages: Math.ceil(totalRecords / limit),
      },
    };

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
