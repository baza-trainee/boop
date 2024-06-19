import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const data = await request.json();
    const updatedPhoto = await prisma.photo.update({
      where: {
        id: Number(params.id),
      },
      data: {
        location: data.newPhoto.location,
        imageUrl: data.newPhoto.imageUrl,
        imageId: data.newPhoto.imageId,
      },
    });
    return NextResponse.json(updatedPhoto, { status: 200 });
  } catch (error) {
    console.log('[UPDATE PHOTO]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const response = await prisma.photo.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('DELETE  PHOTO', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
