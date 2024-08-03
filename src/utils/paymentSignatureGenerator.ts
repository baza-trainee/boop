import createHmac from 'create-hmac';
const { PAYMENT_SECRET_KEY, PAYMENT_MERCHANT_ID } = process.env;

export const paymentSignatureGenerator = (
  obj: { [key: string]: string | number },
  merchantAccount = PAYMENT_MERCHANT_ID || '',
  secretKey = PAYMENT_SECRET_KEY || ''
) => {
  const body = {
    merchantAccount,
    merchantDomainName: obj.merchantDomainName,
    orderReference: obj.orderReference,
    orderDate: obj.orderDate,
    amount: obj.amount,
    currency: obj.currency,
    productName: obj.productName,
    productCount: obj.productCount,
    productPrice: obj.productPrice,
  };
  const valuesString = Object.values(body).flat().join(';');

  return createHmac('md5', secretKey).update(valuesString).digest('hex');
};
