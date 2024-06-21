import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import Image from 'next/image';
import PaymentForm from './payment-form/PaymentForm';

const Payment = () => {
  return (
    <section className="bg-beige py-[75px]">
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="max-w-[526px] text-center">
            <SectionTitle className="mb-4" title={'Допомогати просто'} />
            <p className="text-gradient text-left text-xl font-semibold leading-[1.32]">
              Ваша підтримка може змінити життя маленьких пацієнтів на краще.
              Кожен донат, незалежно від розміру, дозволяє нам продовжувати
              приносити посмішки у лікарняні палати.
            </p>
            <div className="relative top-6 inline-block h-[172px] w-[232px]">
              <Image
                src="/icons/payment/payment-purple-man.svg"
                fill
                sizes="100%"
                alt="purple man"
              />
            </div>
          </div>
          <PaymentForm />
        </div>
      </div>
    </section>
  );
};

export default Payment;
