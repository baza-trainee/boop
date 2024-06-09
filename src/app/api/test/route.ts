import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.test.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TEST]', error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data = await request.json();
    const response = await prisma.test.create({
      data: {
        title: data.title,
        text: data.text,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 });
  }
}
