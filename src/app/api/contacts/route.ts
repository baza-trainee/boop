import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { ContactFormData } from '@/types/contacts';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.contacts.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET CONTACTS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: ContactFormData = await request.json();
    const response = await prisma.contacts.create({
      data: {
        phone: data.phone,
        email: data.email,
        instagram: data.instagram,
        facebook: data.facebook,
        addressUa: data.addressUa,
        addressEn: data.addressEn,
        addressIt: data.addressIt,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[ADD CONTACTS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
