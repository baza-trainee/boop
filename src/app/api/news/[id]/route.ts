import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { NewsFormData } from '@/types/news';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    if (!params.id) {
      return new NextResponse('Invalid request: Missing id parameter', {
        status: 400,
      });
    }
    const data: { newNews: NewsFormData } = await request.json();
    if (!data.newNews) {
      return new NextResponse('Invalid request: Missing data for update', {
        status: 400,
      });
    }
    const updatedNews = await prisma.news.update({
      where: {
        id: Number(params.id),
      },
      data: {
        location: data.newNews.location,
        imageUrl: data.newNews.imageUrl,
        imageId: data.newNews.imageId,
        sourceLink: data.newNews.sourceLink,
        titleUA: data.newNews.titleUA,
        textUA: data.newNews.textUA,
        titleEN: data.newNews.titleEN,
        textEN: data.newNews.textEN,
        titleIT: data.newNews.titleIT,
        textIT: data.newNews.textIT,
      },
    });
    return NextResponse.json(updatedNews, { status: 200 });
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
    await prismaConnect();
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
