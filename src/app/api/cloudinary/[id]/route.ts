import { cloudinary } from '@/lib/cloudinary';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await cloudinary.uploader.destroy(params.id);
    return NextResponse.json(
      { message: 'teacher deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 });
  }
}
