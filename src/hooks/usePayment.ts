import { useState } from 'react';
import axios from 'axios';
import { MAX_DONATION_AMOUNT } from '@/constants';

interface handlePaymentProps {
  paymentAmount: string;
  currency: string;
  type: string;
  lang: string;
}

const url = process.env.NEXT_PUBLIC_API_URL || '';

const usePaymentHandler = (urlBase = url) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async ({
    paymentAmount,
    currency,
    type,
    lang,
  }: handlePaymentProps) => {
    console.log(type);
    const paymentData = {
      transactionType: 'CREATE_INVOICE',
      merchantDomainName: window.location.hostname,
      apiVersion: 1,
      orderReference: Date.now().toString(),
      orderDate: Date.now(),
      amount: Number(paymentAmount),
      language: lang.toUpperCase(),
      currency: currency,
      productName: ['Boop support'],
      productCount: [1],
      productPrice: [Number(paymentAmount)],
      serviceUrl: `${urlBase}/payments/complete`,
    };
    if (Number(paymentAmount) && Number(paymentAmount) < MAX_DONATION_AMOUNT) {
      try {
        const response = await axios.post(`${urlBase}/payments`, paymentData);

        const checkoutUrl = response.data?.invoiceUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        }
      } catch (error) {
        setErrorMessage('Error occurred while processing payment');
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter a valid payment amount');
    }
  };

  return {
    errorMessage,
    handlePayment,
  };
};

export default usePaymentHandler;
