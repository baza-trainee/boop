import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { ContactFormData } from '@/types/contacts';

interface ContactsData {
  updatedContacts: ContactFormData;
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();

    const { updatedContacts }: ContactsData = await request.json();

    const response = await prisma.contacts.update({
      where: {
        id: params.id,
      },
      data: {
        phone: updatedContacts.phone,
        email: updatedContacts.email,
        facebook: updatedContacts.facebook,
        instagram: updatedContacts.instagram,
        addressUa: updatedContacts.addressUa,
        addressEn: updatedContacts.addressEn,
        addressIt: updatedContacts.addressIt,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[UPDATE CONTACTS]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
