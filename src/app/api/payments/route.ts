import axios from 'axios';
import { NextResponse } from 'next/server';
import { paymentSignatureGenerator } from '@/utils/paymentSignatureGenerator';

const merchantAccount = process.env.PAYMENT_MERCHANT_ID || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const merchantSignature = paymentSignatureGenerator(data);
    const url = `https://api.wayforpay.com/api`;
    const body = {
      ...data,
      merchantAccount,
      merchantSignature,
    };
    const response = (await axios.post(url, body)).data;
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(`Can't get payment url` + error, { status: 500 });
  }
}
