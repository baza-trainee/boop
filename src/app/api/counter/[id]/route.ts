import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';

export async function PUT(
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
    const { number }: { number: number } = await request.json();

    await prismaConnect();

    const updateNumber = await prisma.counterItem.update({
      where: {
        id: Number(params.id),
      },
      data: {
        number: number,
      },
    });

    return NextResponse.json(updateNumber, { status: 200 });
  } catch (error) {
    console.log('[UPDATE FIELD NUMBER]', error);
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
    const response = await prisma.counterItem.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE COUNTER ITEM]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
