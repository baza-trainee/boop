import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { PhotoFormData } from '@/types/photo';
import '../swagger-comments';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const { newPhoto }: { newPhoto: PhotoFormData } = await request.json();
    const updatedPhoto = await prisma.photo.update({
      where: {
        id: params.id,
      },
      data: {
        location: newPhoto.location,
        imageUrl: newPhoto.imageUrl,
        imageId: newPhoto.imageId,
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
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE PHOTO]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
