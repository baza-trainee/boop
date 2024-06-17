import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { prismaConnect } from '@/utils/prismaConnect';
import './swagger-comments';
import axios from '@/utils/axios';
import { replaceExtensionWithWebp } from '@/helpers/convertToWebp';

export async function GET() {
  try {
    await prismaConnect();
    const response = await prisma.photo.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('[GET TEST]', error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect();
    const data = await request.formData();
    const dataObj = Object.fromEntries(data);
    const formData = new FormData();
    formData.append('file', dataObj.file);
    const res = await axios.post('/cloudinary', formData);
    const response = await prisma.photo.create({
      data: {
        location: dataObj.location as string,
        imageUrl: replaceExtensionWithWebp(res.data.fileUrl),
        imageId: res.data.fileId,
      },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log('POST PHOTO', error);
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 });
  }
}
