import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { imageId } = await req.json();
  try {
    await cloudinary.uploader.destroy(imageId);
    return NextResponse.json({ message: 'Success', imageId }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}
