import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { NewsFormData } from '@/types/news';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse('Invalid request: Missing id parameter', {
        status: 400,
      });
    }
    const { newPress }: { newPress: NewsFormData } = await request.json();

    if (!newPress) {
      return new NextResponse('Invalid request: Missing data for update', {
        status: 400,
      });
    }
    const updatedPress = await prisma.news.update({
      where: {
        id: Number(params.id),
      },
      data: {
        imageLink: newPress.imageLink,
        imageId: newPress.imageId,
        sourceLink: newPress.sourceLink,
        titleUA: newPress.titleUA,
        textUA: newPress.textUA,
        titleEN: newPress.titleEN,
        textEN: newPress.textEN,
        titleIT: newPress.titleIT,
        textIT: newPress.textIT,
      },
    });

    return NextResponse.json(updatedPress, { status: 200 });
  } catch (error) {
    console.log('[UPDATE NEWS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse('Invalid request: Missing id parameter', {
        status: 400,
      });
    }
    const response = await prisma.news.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE NEWS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
