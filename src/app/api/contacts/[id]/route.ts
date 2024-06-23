import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const data = await request.json();
    const { key, value } = data;
    const response = await prisma.contacts.update({
      where: {
        id: params.id,
      },
      data: {
        [key]: value,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[UPDATE CONTACTS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
