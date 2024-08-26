import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await prisma.user.findMany();

    if (!response || response.length === 0) {
      return NextResponse.json({ message: 'Users not found' }, { status: 400 });
    }

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    console.log('[GET Users]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
