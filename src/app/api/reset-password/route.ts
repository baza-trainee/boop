import bcrypt from 'bcrypt';
import './swagger-comments';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { email, newPassword } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  //   await prisma.user.update({
  //     where: { email: user.email },
  //     data: { password: hashedNewPassword },
  //   });

  //   return NextResponse.json(
  //     { message: 'Password updated successfully' },
  //     { status: 200 }
  //   );
  return NextResponse.json({ newPassw: newPassword }, { status: 200 });
}
