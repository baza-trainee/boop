import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import {
  PartnersFriendsFormData,
  SECTION_PARTNERS_FRIENDS,
} from '@/types/partners-friends';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();

    const id = params.id;
    if (!id) {
      return NextResponse.json(
        { message: 'Params id is required' },
        { status: 400 }
      );
    }

    if (!request) {
      return NextResponse.json(
        { message: 'Request body is required' },
        { status: 400 }
      );
    }

    const record = await prisma.partnersFriends.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      return NextResponse.json(
        { message: 'Record not found' },
        { status: 404 }
      );
    }

    const data: Partial<PartnersFriendsFormData> = await request.json();

    const updateData: Partial<PartnersFriendsFormData> = {};
    if (data.logoUrl) {
      updateData.logoUrl = data.logoUrl;
    }
    if (data.logoId) {
      updateData.logoId = data.logoId;
    }
    if (data.link) {
      updateData.link = data.link;
    }
    if (data.section) {
      if (
        data.section !== SECTION_PARTNERS_FRIENDS.friends &&
        data.section !== SECTION_PARTNERS_FRIENDS.partners
      ) {
        return NextResponse.json(
          { message: 'Section must be either "friends" or "partners"' },
          { status: 400 }
        );
      }
      updateData.section = data.section;
    }

    const response = await prisma.partnersFriends.update({
      where: {
        id,
      },
      data: updateData,
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[PATCH PartnerOrFriend]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const id = params.id;
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const record = await prisma.partnersFriends.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      return NextResponse.json(
        { message: 'Record not found' },
        { status: 404 }
      );
    }

    const response = await prisma.partnersFriends.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[DELETE PartnerOrFriend]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
