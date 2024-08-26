import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await prisma.user.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE USER]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
