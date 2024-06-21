import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import { BlogFormData } from '@/types/blog';

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
    const data: { newBlog: BlogFormData } = await request.json();
    const updateBlog = await prisma.blog.update({
      where: {
        id: Number(params.id),
      },
      data: {
        location: data.newBlog.location,
        imageUrl: data.newBlog.imageUrl,
        imageId: data.newBlog.imageId,
        titleUA: data.newBlog.titleUA,
        textUA: data.newBlog.textUA,
        titleEN: data.newBlog.titleEN,
        textEN: data.newBlog.textEN,
        titleIT: data.newBlog.titleIT,
        textIT: data.newBlog.textIT,
      },
    });
    return NextResponse.json(updateBlog, { status: 200 });
  } catch (error) {
    console.log('[UPDATE BLOG]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const response = await prisma.blog.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE POST', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
