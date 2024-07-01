import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';

export async function GET(
  request: Request,
  { params }: { params: { location: string } }
) {
  try {
    await prismaConnect();
    const response = await prisma.photo.findMany({
      where: {
        location: params.location,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET PHOTOS BY LOCATION]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
