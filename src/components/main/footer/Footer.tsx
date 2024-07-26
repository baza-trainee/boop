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
    <footer className="bg-bgWhite bg-cover" style={{ backgroundImage: "url('/images/wave.svg')" }}>
      <div className="bg-no-repeat pt-5 md:pt-[150px] pb-10 bg-left-bottom" style={{ backgroundImage: "url('/images/arrow.svg')" }}>
        <div className="flex flex-col md:flex-row text-textViolet container relative">
          <Image
            src="/images/clown.svg"
            alt="clown"
            width={154}
            height={136}
            className="absolute -top-24 right-5 md:right-[10%] md:-top-[110px]"
            style={{ width: 'auto', height: 'auto' }}
          />
          <div className="flex flex-col gap-5 mr-auto">
            <div className="h-full w-full font-redhat">
              <div className="max-w-[93px] mb-4">
                <HeroLogo locale={locale} onClick={scrollToTop} className="cursor-pointer" />
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
          <div className="flex flex-col gap-5 pt-10 md:pt-28 md:ml-auto">
            <FooterLinks />
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
