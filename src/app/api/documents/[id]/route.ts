import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { prismaConnect } from '@/utils/prismaConnect';
import { DocumentFormData } from '@/types/documents';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prismaConnect();
    const { newDocument }: { newDocument: DocumentFormData } =
      await request.json();
    const updatedDocument = await prisma.document.update({
      where: {
        id: params.id,
      },
      data: {
        documentUrl: newDocument.documentUrl,
        documentId: newDocument.documentId,
      },
    });
    return NextResponse.json(updatedDocument, { status: 200 });
  } catch (error) {
    console.log('[UPDATE DOCUMENT]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
