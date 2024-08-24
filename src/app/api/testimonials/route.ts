import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { TestimonialFormData } from '@/types/testimonials';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '0', 10);

    let testimonials;
    let totalRecords = 0;
    let response;

    if (page > 0 && limit > 0) {
      const offset = (page - 1) * limit;

      testimonials = await prisma.testimonial.findMany({
        skip: offset,
        take: limit,
      });

      totalRecords = await prisma.testimonial.count();

      response = {
        data: testimonials,
        meta: {
          page,
          limit,
          totalRecords,
          totalPages: Math.ceil(totalRecords / limit),
        },
      };
    } else {
      testimonials = await prisma.testimonial.findMany();
      response = {
        data: testimonials,
      };
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TESTIMONIALS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data: TestimonialFormData = await request.json();
    const response = await prisma.testimonial.create({
      data: {
        nameUa: data.nameUa,
        nameEn: data.nameEn,
        nameIt: data.nameIt,
        reviewUa: data.reviewUa,
        reviewEn: data.reviewEn,
        reviewIt: data.reviewIt,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('ADD TESTIMONIALS', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
