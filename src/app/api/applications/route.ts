import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { ApplicationFormData } from '@/types/applications';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.applications.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET APPLICATIONS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: ApplicationFormData = await request.json();
    const response = await prisma.applications.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        social: data.social,
        isProcessed: false,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[ADD APPLICATION]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
