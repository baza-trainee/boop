import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import { BlogFormData } from '@/types/blog';

export async function GET(request: Request) {
  try {
    await prismaConnect();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '0', 10);

    let posts;
    let totalRecords = 0;
    let response;

    if (page > 0 && limit > 0) {
      const offset = (page - 1) * limit;
      posts = await prisma.blog.findMany({
        skip: offset,
        take: limit,
      });

      totalRecords = await prisma.blog.count();
      response = {
        data: posts,
        meta: {
          page,
          limit,
          totalRecords,
          totalPages: Math.ceil(totalRecords / limit),
        },
      };
    } else {
      posts = await prisma.blog.findMany();
      if (!posts) {
        return new NextResponse('Posts is not found', { status: 400 });
      }
      response = {
        data: posts,
        meta: {},
      };
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
        location: '',
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log('[POST BLOG]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
