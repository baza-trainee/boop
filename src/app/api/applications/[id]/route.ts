import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const isProcessed = await request.json();
    const updatedApplication = await prisma.applications.update({
      where: {
        id: params.id,
      },
      data: {
        isProcessed: !isProcessed,
      },
    });
    return NextResponse.json(updatedApplication, { status: 200 });
  } catch (error) {
    console.log('[UPDATE APPLICATION]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await prisma.applications.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE APPLICATION]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
