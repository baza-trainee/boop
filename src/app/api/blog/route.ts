import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import { BlogFormData } from '@/types/blog';

import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.blog.findMany();
    if (!response) {
      return new NextResponse('Posts is not found', { status: 400 });
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET BLOG]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: BlogFormData = await request.json();
    const response = await prisma.blog.create({
      data: {
        ...data,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log('[POST BLOG]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
