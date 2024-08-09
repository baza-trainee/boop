'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import HeroLogo from '../main-page/hero/components/heroLogo/HeroLogo';
import SocialLinks from './SocialLinks/SocialLinks';
import HelpLinks from './HelpLinks/HelpLinks';
import ContactInfo from '../shared/ContactInfo';
import AssociationLinks from './AssociationLinks/AssociationLinks';
import { useLocale, useTranslations } from 'next-intl';

import AnimatedFooterMan from './AnimatedFooterMan/AnimatedFooterMan';
import FooterNavigationLinks from './footer-navigation-links/FooterNavigationLinks';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  // const isMobile = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  // <AnimatedFooterMan
  //   className={
  //     'absolute -top-24 right-5 h-[112px] w-[115px] scale-x-[-1] transform md:-top-[110px] md:right-[10%] md:h-[168px] md:w-[164px]'
  //   }
  // />;

  return (
    <footer
      className="relative bg-bgWhite bg-cover pt-[39px] md:pt-[55px] ml:pt-[105px] lg:pt-[150px]"
      style={{ backgroundImage: "url('/images/wave.svg')" }}
    >
      <div className="mx-auto max-w-[1920px] px-[10px] md:px-[64px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]">
        <div className="mb-6">
          <div className="mb-2 max-w-[93px]">
            <HeroLogo
              locale={locale}
              onClick={scrollToTop}
              className="cursor-pointer"
            />
          </div>
          <h4 className="font-bold leading-[132%] text-textViolet">
            {t('title')}
          </h4>
        </div>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-8 text-textViolet">
          <div className="flex flex-col gap-8">
            <div>
              <ContactInfo
                showIcons={false}
                showInstagram={false}
                showFacebook={false}
              />
            </div>
            <HelpLinks className="hidden ml:flex" />
          </div>
          <AssociationLinks />
          <div>
            <FooterNavigationLinks className="mb-8" />
            <SocialLinks />
          </div>
          <HelpLinks className="flex ml:hidden" />
        </div>
        <div className="py-6 text-center text-textViolet">
          2024 © Розробка Baza Trainee Ukraine. Усі права захищені.
        </div>
      </div>
      <span className="absolute inline-block 3xl:-left-[50px] 3xl:bottom-0 3xl:h-[510px] 3xl:w-[880px]">
        {/* -left-[406px] bottom-[89px] h-[382px] w-[662px]*/}
        <Image
          src="/images/arrow.svg"
          width={880}
          height={510}
          alt="decorative arrow"
        />
      </span>
    </footer>
  );
};

export default Footer;
