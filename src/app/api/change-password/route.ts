import bcrypt from 'bcrypt';
import { getSession } from 'next-auth/react';
import './swagger-comments';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  // const mockRequest = {
  //   headers: req.headers,
  //   cookies: req.headers.get('cookie') ?? '',
  // };

  // const session = await getSession({ req: mockRequest as any });
  // if (!session || !session.user || !session.user.email) {
  //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  // }

  const { currentPassword, newPassword, email } = body;

  if (!currentPassword || !newPassword) {
    return NextResponse.json(
      { message: 'Current and new password are required' },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email },
    // where: { email: session.user.email },
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
      { status: 400 }
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
