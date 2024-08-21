import SectionTitle from '../shared/SectionTitle';
import AnimatedPurpleMan from './AnimatedPurpleMan';
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
              <div className="absolute right-0 top-[25px] hidden h-[124x] w-[173px] flex-shrink-0 cursor-pointer max-lg:-scale-x-1 md:inline-block ml:right-[15px] lg:right-[50%] lg:top-[130px] lg:h-[172px] lg:w-[239px] lg:translate-x-[50%] xl:right-0 xl:translate-x-0 4xl:h-[204px] 4xl:w-[284px]">
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
