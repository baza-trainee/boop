import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { DocumentFormData } from '@/types/documents';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
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
