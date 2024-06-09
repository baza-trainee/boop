import prisma from '@/lib/prisma';

export async function prismaConnect() {
  try {
    await prisma.$connect();
  } catch (error) {
    return Error('Database connection failed');
  }
}
