import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.photo.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TEST]', error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data = await request.json();
    const response = await prisma.photo.create({
      data: {
        location: data.location,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('POST PHOTO', error);
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 });
  }
}
