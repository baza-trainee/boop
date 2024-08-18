import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import PaymentForm from './payment-form/PaymentForm';
import { useTranslations } from 'next-intl';
import AnimatedPurpleMan from './AnimatedPurpleMan';

const Payment = () => {
  const t = useTranslations('Donate');

  return (
    <section
      id="donat"
      className="mb-[120px] bg-beige py-[55px] max-xl:py-[80px] max-ml:py-[60px] max-sm:py-5"
    >
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
              <div className="relative inline-block h-[124x] w-[173px] flex-shrink-0 cursor-pointer max-xl:top-6 max-lg:top-2 max-ml:absolute max-ml:-right-[40px] max-ml:top-0 max-ml:translate-y-16 max-ml:-scale-x-1 max-md:right-3 max-custom:hidden lg:h-[172px] lg:w-[239px] xl:right-8 4xl:h-[204px] 4xl:w-[284px]">
                <AnimatedPurpleMan />
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
