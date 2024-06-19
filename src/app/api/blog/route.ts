import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

import { prismaConnect } from '@/utils/prismaConnect';
import { cloudinary } from '@/lib/cloudinary';
import { BlogPostData, BlogUpdateData } from '@/types/blog';
import { Blog } from '.prisma/client';

import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();

    const blogPosts = await prisma.blog.findMany();
    if (!blogPosts || blogPosts.length === 0) {
      return NextResponse.json(
        { message: ' Blog posts is not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ blogPosts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog posts:', error);

    let errorMessage = 'Unable to fetch blog posts';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const {
      photo,
      titleUA,
      titleEN,
      titleIT,
      textUA,
      textEN,
      textIT,
    }: BlogPostData = await request.json();

    if (
      !photo ||
      !titleUA ||
      !titleEN ||
      !titleIT ||
      !textUA ||
      !textEN ||
      !textIT
    ) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const uploadResponse = await cloudinary.uploader.upload(photo, {
      folder: 'blog_photos',
    });
    if (!uploadResponse.secure_url) {
      return NextResponse.json(
        { message: 'Failed to upload image to Cloudinary' },
        { status: 500 }
      );
    }

    await prismaConnect();

    const blogPost = await prisma.blog.create({
      data: {
        photo: uploadResponse.secure_url,
        titleUA,
        titleEN,
        titleIT,
        textUA,
        textEN,
        textIT,
      },
    });

    return NextResponse.json({ blogPost }, { status: 200 });
  } catch (error) {
    console.error('Error creating blog post:', error);

    let errorMessage = 'Unable to create blog post';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const {
      id,
      photo,
      titleUA,
      titleEN,
      titleIT,
      textUA,
      textEN,
      textIT,
    }: BlogUpdateData = await request.json();

    await prismaConnect();

    const updateData: Partial<Blog> = {};

    if (photo) {
      const uploadResponse = await cloudinary.uploader.upload(photo, {
        folder: 'blog_photos',
      });
      updateData.photo = uploadResponse.secure_url;
    }

    if (titleUA) updateData.titleUA = titleUA;
    if (titleEN) updateData.titleEN = titleEN;
    if (titleIT) updateData.titleIT = titleIT;
    if (textUA) updateData.textUA = textUA;
    if (textEN) updateData.textEN = textEN;
    if (textIT) updateData.textIT = textIT;

    const blogPost = await prisma.blog.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({ blogPost }, { status: 200 });
  } catch (error) {
    console.error('Error updating blog post:', error);

    let errorMessage = 'Unable to update blog post';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    await prismaConnect();

    const blogPost = await prisma.blog.findUnique({ where: { id } });

    if (!blogPost) {
      return NextResponse.json(
        { message: 'Blog post not found' },
        { status: 404 }
      );
    }

    await prisma.blog.delete({ where: { id } });

    return NextResponse.json(
      { message: 'Blog post deleted successfully', blogPost },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting blog post:', error);

    let errorMessage = 'Unable to delete blog post';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
