import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { NewsFormData } from '@/types/news';

import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.news.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('GET NEWS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: NewsFormData = await request.json();
    const response = await prisma.news.create({
      data: {
        location: data.location,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
        sourceLink: data.sourceLink,
        titleUA: data.titleUA,
        textUA: data.textUA,
        titleEN: data.titleEN,
        textEN: data.textEN,
        titleIT: data.titleIT,
        textIT: data.textIT,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('ADD NEWS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
