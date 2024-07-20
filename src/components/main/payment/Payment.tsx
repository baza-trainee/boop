import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import PaymentForm from './payment-form/PaymentForm';

const Payment = () => {
  return (
    <section className="mb-[120px] bg-beige py-[55px] max-xl:py-[80px]">
      <div className="container">
        <div className="flex justify-between gap-6 max-ml:flex-col max-ml:gap-12">
          <div className="text-right max-xl:text-center">
            <SectionTitle
              className="mb-8 max-lg:[&>svg]:hidden max-ml:[&>svg]:block"
              title={'Допомогати просто'}
            />
            <div className="relative max-w-[540px] max-xl:max-w-[488px] max-lg:max-w-[466px] max-ml:flex max-ml:max-w-[590px]">
              <p className="text-gradient text-left text-xl font-semibold leading-[1.32]">
                Ваша підтримка може змінити життя маленьких пацієнтів на краще.
                Кожен донат, незалежно від розміру, дозволяє нам продовжувати
                приносити посмішки у лікарняні палати.
              </p>
              <div className="relative inline-block h-[172px] w-[232px] flex-shrink-0 max-xl:top-6 max-lg:top-2 max-ml:absolute max-ml:-bottom-[65px] max-ml:-right-[100px] xl:right-8">
                <Image
                  src="/icons/purple-buddy-payment.svg"
                  fill
                  sizes="100%"
                  alt="purple man"
                />
              </div>
            </div>
          </div>
          <PaymentForm />
        </div>
      </div>
    </section>
  );
};

export default Payment;
