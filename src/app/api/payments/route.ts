import axios from 'axios';
import { NextResponse } from 'next/server';
import { paymentSignatureGenerator } from '@/utils/paymentSignatureGenerator';

const { PAYMENT_MERCHANT_ID } = process.env;

const merchantAccount = PAYMENT_MERCHANT_ID || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const merchantSignature = paymentSignatureGenerator(data);
    console.log(data);
    console.log(merchantSignature);
    const url = `https://api.wayforpay.com/api`;
    const body = {
      ...data,
      merchantAccount,
      merchantSignature,
    };

    const response = (await axios.post(url, body)).data;
    console.log(response);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(`Can't get payment url` + error, { status: 500 });
  }
}
