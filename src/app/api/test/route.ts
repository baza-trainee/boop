import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const message = 'Test route works!!!🎈🎈🎈';
    return NextResponse.json(message, { status: 200 });
  } catch (error) {
    console.log('[GET TEST]', error);
    return NextResponse.json(
      { message: 'Cannot fetch' },
      { status: 500 }
    );
  }
}
