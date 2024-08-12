'use client';

import { usePathname } from 'next/navigation';
import HeroLogo from '../main-page/hero/components/heroLogo/HeroLogo';
import SocialLinks from './SocialLinks/SocialLinks';
import HelpLinks from './HelpLinks/HelpLinks';
import ContactInfo from '../shared/ContactInfo';
import AssociationLinks from './AssociationLinks/AssociationLinks';
import { useLocale, useTranslations } from 'next-intl';

import AnimatedFooterMan from './AnimatedFooterMan/AnimatedFooterMan';
import FooterNavigationLinks from './footer-navigation-links/FooterNavigationLinks';
import DecoratedSvg from './DecoratedSvg/DecoratedSvg';

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();

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

  return (
    <footer
      className="footer-bg relative bg-bgWhite pt-[39px] md:pt-[55px] ml:pt-[105px] lg:pt-[150px]"
      style={{ backgroundImage: "url('/images/wave.svg')" }}
    >
      <DecoratedSvg />
      <AnimatedFooterMan
        className={
          'top-41 absolute right-16 h-[112px] w-[115px] md:right-[40px] md:top-[23px] md:h-[168px] md:w-[164px] ml:-top-[12px] ml:right-[64px] lg:right-[165px] lg:top-[2px] 3xl:right-[285px] 4xl:right-[460px]'
        }
      />
      ;
      <div className="relative z-[1] mx-auto max-w-[1920px] px-[10px] md:px-[64px] lg:px-[64px] xl:px-[80px] 2xl:px-[120px]">
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
        <div className="py-6 text-center text-textViolet">{t('rights')}</div>
      </div>
    </footer>
  );
};

export default Footer;
