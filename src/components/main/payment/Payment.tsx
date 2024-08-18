import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import PaymentForm from './payment-form/PaymentForm';
import { useTranslations } from 'next-intl';

const Payment = () => {
  const t = useTranslations('Donate');

  return (
    <section
      id="donat"
      className="mb-[120px] bg-beige py-5 md:py-[44px] ml:py-[60px] lg:py-[80px] 4xl:py-[60px]"
    >
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:gap-8 ml:gap-12 lg:flex-row lg:gap-6">
          <div className="lg:max-w-[466px] xl:max-w-[488px] 3xl:max-w-[526px]">
            <SectionTitle
              className="mb-4 [&>svg]:hidden md:[&>svg]:block"
              title={t('title')}
            />
            <div className="relative">
              <p className="text-gradient text-left text-[18px] font-semibold leading-[1.32] md:max-w-[416px] ml:max-w-[590px] lg:max-w-none lg:text-[20px]">
                {t('text')}
              </p>
            </div>
          </div>
          <PaymentForm />
        </div>
      </div>
    </section>
  );
};

export default Payment;
