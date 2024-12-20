import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import {
  PartnersFriendsFormData,
  SECTION_PARTNERS_FRIENDS,
} from '@/types/partners-friends';


export async function GET() {
  try {
    const response = await prisma.partnersFriends.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET PartnersFriends]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { logoUrl, logoId, link, section }: PartnersFriendsFormData =
      await request.json();

    if (!logoUrl || !link || !section || !logoId) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (
      section !== SECTION_PARTNERS_FRIENDS.friends &&
      section !== SECTION_PARTNERS_FRIENDS.partners
    ) {
      return NextResponse.json(
        { message: 'Section must be either "friends" or "partners"' },
        { status: 400 }
      );
    }
    const response = await prisma.partnersFriends.create({
      data: {
        logoUrl,
        logoId,
        link,
        section,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log('[POST PartnersFriends]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
