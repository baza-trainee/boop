'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Logo from './Logo/Logo';
import FooterLinks from './FooterLinks/FooterLinks';
import SocialLinks from './SocialLinks/SocialLinks';
import HelpLinks from './HelpLinks/HelpLinks';
import ContactInfo from '../shared/ContactInfo';
import AssociationLinks from './AssociationLinks/AssociationLinks';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="relative">
      <div className="relative z-0 h-full w-full bg-bgWhite">
        <Image
          src="/images/clown.svg"
          alt="clown"
          width={154}
          height={136}
          className="absolute right-60"
          style={{ width: 'auto', height: 'auto' }}
        />
        <div
          className="h-full w-full bg-cover"
          style={{ backgroundImage: "url('/images/wave.svg')" }}
        >
          <div
            className="h-[571px] w-[881px]"
            style={{ backgroundImage: "url('/images/arrow.svg')" }}
          />
        </div>
      </div>
      <div className="absolute left-2 top-40 z-10 flex w-full flex-row text-textViolet ">
        <div className="flex  h-full w-full flex-col  gap-5 pl-28">
          <div className="h-full w-full font-redhat">
            <Logo />
            <h1>{t('title')}</h1>
          </div>
          <div className="color-violet h-full w-full gap-3 font-raleway">
            <div className="w-full pb-3">
              <ContactInfo
                showIcons={false}
                showInstagram={false}
                showFacebook={false}
              />
            </div>
          </div>
          <HelpLinks />
        </div>
        <div className="h-[160px] w-full">
          <AssociationLinks />
        </div>
        <div className="flex w-full flex-col gap-5 pt-28">
          <FooterLinks />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
