import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { TestimonialFormData } from '@/types/testimonials';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { updatedTestimonial }: { updatedTestimonial: TestimonialFormData } =
      await request.json();
    const editedTestimonial = await prisma.testimonial.update({
      where: {
        id: params.id,
      },
      data: {
        nameUa: updatedTestimonial.nameUa,
        nameEn: updatedTestimonial.nameEn,
        nameIt: updatedTestimonial.nameIt,
        reviewUa: updatedTestimonial.reviewUa,
        reviewEn: updatedTestimonial.reviewEn,
        reviewIt: updatedTestimonial.reviewIt,
        imageUrl: updatedTestimonial.imageUrl,
        imageId: updatedTestimonial.imageId,
      },
    });
    return NextResponse.json(editedTestimonial, { status: 200 });
  } catch (error) {
    console.log('[UPDATE TESTIMONIAL]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await prisma.testimonial.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE TESTIMONIAL]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
