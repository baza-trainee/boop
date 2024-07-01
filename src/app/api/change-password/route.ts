import bcrypt from 'bcrypt';
import './swagger-comments';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface ChangePasswordRequest {
  newPassword: string;
  email: string;
  oldPassword: string;
}
export async function POST(req: Request) {
  try {
    const body: ChangePasswordRequest = await req.json();

    const { newPassword, email, oldPassword } = body;

    if (!oldPassword || !newPassword || !email) {
      return NextResponse.json(
        { message: 'Email and passwords are required' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          message:
            'The current password is incorrect. Please, double check the current password.',
        },
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
  } catch (error) {
    console.error('[POST Change-password]', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
