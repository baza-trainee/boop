import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { TeamFormData } from '@/types/team';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const { updatedMember }: { updatedMember: TeamFormData } =
      await request.json();
    const updatedTeamMember = await prisma.team.update({
      where: {
        id: params.id,
      },
      data: {
        nameUa: updatedMember.nameUa,
        nameEn: updatedMember.nameEn,
        nameIt: updatedMember.nameIt,
        imageUrl: updatedMember.imageUrl,
        imageId: updatedMember.imageId,
      },
    });
    return NextResponse.json(updatedTeamMember, { status: 200 });
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
