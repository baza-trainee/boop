import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { TeamFormData } from '@/types/team';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '0', 10);
    const limit = parseInt(searchParams.get('limit') || '0', 10);

    let teamMembers;
    let totalRecords = 0;
    let response;

    if (page > 0 && limit > 0) {
      const offset = (page - 1) * limit;

      teamMembers = await prisma.team.findMany({
        skip: offset,
        take: limit,
      });

      totalRecords = await prisma.team.count();

      response = {
        data: teamMembers,
        meta: {
          page,
          limit,
          totalRecords,
          totalPages: Math.ceil(totalRecords / limit),
        },
      };
    } else {
      teamMembers = await prisma.team.findMany();
      response = {
        data: teamMembers,
      };
    }

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TEAM MEMBERS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
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
