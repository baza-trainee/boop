import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { TeamFormData } from '@/types/team';

export async function GET(request: Request) {
  try {
    await prismaConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    const offset = (page - 1) * limit;

    const photos = await prisma.team.findMany({
      skip: offset,
      take: limit,
    });

    const totalRecords = await prisma.team.count();

    const response = {
      data: photos,
      meta: {
        page,
        limit,
        totalRecords,
        totalPages: Math.ceil(totalRecords / limit),
      },
    };

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
