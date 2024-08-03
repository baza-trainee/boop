'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import HeroLogo from '../main-page/hero/components/heroLogo/HeroLogo';
import FooterLinks from './FooterLinks/FooterLinks';
import SocialLinks from './SocialLinks/SocialLinks';
import HelpLinks from './HelpLinks/HelpLinks';
import ContactInfo from '../shared/ContactInfo';
import AssociationLinks from './AssociationLinks/AssociationLinks';
import { useLocale, useTranslations } from 'next-intl';

import AnimatedFooterMan from './AnimatedFooterMan/AnimatedFooterMan';

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
      className="bg-bgWhite bg-cover"
      style={{ backgroundImage: "url('/images/wave.svg')" }}
    >
      <div
        className="bg-left-bottom bg-no-repeat pb-10 pt-5 md:pt-[150px]"
        style={{ backgroundImage: "url('/images/arrow.svg')" }}
      >
        <div className="container relative flex flex-col text-textViolet md:flex-row">
          {/* <Image
            src="/images/clown.svg"
            alt="clown"
            width={154}
            height={136}
            className="absolute -top-24 right-5 md:-top-[110px] md:right-[10%]"
            style={{ width: 'auto', height: 'auto' }}
          /> */}
          <AnimatedFooterMan
            className={
              'absolute -top-24 right-5 h-[112px] w-[115px] scale-x-[-1] transform md:-top-[110px] md:right-[10%] md:h-[168px] md:w-[164px]'
            }
          />
          <div className="mr-auto flex flex-col gap-5">
            <div className="h-full w-full font-redhat">
              <div className="mb-4 max-w-[93px]">
                <HeroLogo
                  locale={locale}
                  onClick={scrollToTop}
                  className="cursor-pointer"
                />
              </div>
              <h1 className="font-bold">{t('title')}</h1>
            </div>
            <div className="color-violet h-full w-full gap-3 font-raleway">
              <ContactInfo
                showIcons={false}
                showInstagram={false}
                showFacebook={false}
              />
              <HelpLinks />
            </div>
          </div>
          <AssociationLinks />
          <div className="flex flex-col gap-5 pt-10 md:ml-auto md:pt-28">
            <FooterLinks />
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
