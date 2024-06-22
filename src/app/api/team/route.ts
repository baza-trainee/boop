import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { TeamFormData } from '@/types/team';
// import './swagger-comments';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.team.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TEAM MEMBERS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data: TeamFormData = await request.json();
    const response = await prisma.team.create({
      data: {
        nameUa: data.nameUa,
        nameEn: data.nameEn,
        nameIt: data.nameIt,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('ADD TEAM MEMBER', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
