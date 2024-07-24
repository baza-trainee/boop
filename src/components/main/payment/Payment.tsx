import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import Image from 'next/image';
import PaymentForm from './payment-form/PaymentForm';
import { useTranslations } from 'next-intl';

const Payment = () => {
  const t = useTranslations('Donate');

  return (
    <section className="mb-[120px] bg-beige py-[55px] max-xl:py-[80px] max-ml:py-[60px] max-sm:py-5">
      <div className="container">
        <div className="flex justify-between gap-6 max-ml:flex-col max-ml:gap-12 max-md:gap-8">
          <div className="text-right max-xl:text-center">
            <SectionTitle
              className="mb-8 max-md:mb-4 max-lg:[&>svg]:hidden max-ml:[&>svg]:block max-sm:[&>svg]:hidden"
              title={t('title')}
            />
            <div className="relative max-w-[540px] max-xl:max-w-[488px] max-lg:max-w-[466px] max-ml:flex max-ml:max-w-none">
              <p className="text-gradient text-left text-xl font-semibold leading-[1.32] max-ml:max-w-[590px] max-md:max-w-[416px] max-custom:max-w-none">
                {t('text')}
              </p>
              <div className="relative inline-block h-[172px] w-[232px] flex-shrink-0 max-xl:top-6 max-lg:top-2 max-ml:absolute max-ml:-right-[40px] max-ml:top-0 max-ml:h-[124px] max-ml:w-[167px] max-ml:translate-y-16 max-ml:-scale-x-1 max-md:right-3 max-custom:hidden xl:right-8">
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
