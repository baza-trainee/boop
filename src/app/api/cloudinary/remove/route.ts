import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { imageId } = await req.json();
  console.log(imageId);
  try {
    await cloudinary.uploader.destroy(imageId);
    return NextResponse.json({ message: 'success', imageId }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}
