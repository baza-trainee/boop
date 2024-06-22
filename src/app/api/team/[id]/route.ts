import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { TeamFormData } from '@/types/team';
// import '../swagger-comments';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const data: { newMember: TeamFormData } = await request.json();
    const updatedPhoto = await prisma.team.update({
      where: {
        id: params.id,
      },
      data: {
        nameUa: data.newMember.nameUa,
        nameEn: data.newMember.nameEn,
        nameIt: data.newMember.nameIt,
        imageUrl: data.newMember.imageUrl,
        imageId: data.newMember.imageId,
      },
    });
    return NextResponse.json(updatedPhoto, { status: 200 });
  } catch (error) {
    console.log('[UPDATE TEAM MEMBER]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const response = await prisma.team.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE TEAM MEMBER]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
