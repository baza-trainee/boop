import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { NewsFormData } from '@/types/news';

import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();

    const news = await prisma.news.findMany();
    const response = {
      data: news,
      meta: {},
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('GET NEWS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
// method POST

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: NewsFormData = await request.json();

    const response = await prisma.news.create({
      data: {
        sourceLink: data.sourceLink,
        titleUA: data.titleUA,
        textUA: data.textUA,
        titleEN: data.titleEN,
        textEN: data.textEN,
        titleIT: data.titleIT,
        textIT: data.textIT,
        imageLink: data.imageLink,
        imageId: data.imageId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('ADD NEWS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
