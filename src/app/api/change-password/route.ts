import bcrypt from 'bcrypt';
import './swagger-comments';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const { currentPassword, newPassword, email } = body;

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { message: 'Current and new password are required' },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !user.password) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const isCorrectPassword = await bcrypt.compare(
    currentPassword,
    user.password
  );

  if (!isCorrectPassword) {
    return NextResponse.json(
      { message: 'Current password is incorrect' },
      { status: 401 }
    );
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { email: user.email },
    data: { password: hashedNewPassword },
  });

  return NextResponse.json(
    { message: 'Password updated successfully' },
    { status: 200 }
  );
}
