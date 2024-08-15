import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { CounterFormData } from '@/types/counterItem';
import initialData from './example-db.json';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.counterItem.findMany();

    if (response.length === 0) {
      return NextResponse.json(initialData, { status: 200 });
    }
    response.sort((a, b) => a.order - b.order);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET COUNTER]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: CounterFormData = await request.json();

    const response = await prisma.counterItem.create({
      data: {
        number: data.number,
        text: data.text,
        variant: data.variant,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('ADD COUNTER', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
