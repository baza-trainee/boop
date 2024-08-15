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
    const { updatedPost }: { updatedPost: BlogFormData } = await request.json();
    const updateBlog = await prisma.blog.update({
      where: {
        id: Number(params.id),
      },
      data: {
        imageUrl: updatedPost.imageUrl,
        imageId: updatedPost.imageId,
        titleUA: updatedPost.titleUA,
        textUA: updatedPost.textUA,
        titleEN: updatedPost.titleEN,
        textEN: updatedPost.textEN,
        titleIT: updatedPost.titleIT,
        textIT: updatedPost.textIT,
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
