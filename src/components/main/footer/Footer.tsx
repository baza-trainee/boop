'use client';
// import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Logo from '../shared/Logo/Logo';
import FooterLinks from '../shared/FooterLinks/FooterLinks';
import SocialLinks from '../shared/SocialLinks/SocialLinks';
import HelpLinks from '../shared/HelpLinks/HelpLinks';
import AssociationLinks from '../shared/AssociationLinks/AssociationLinks';
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="relative">
      <div className="relative z-0 h-[585px] w-full bg-bgWhite">
        <Image
          src="/images/clown.svg"
          alt="clown"
          width={154}
          height={136}
          className="absolute right-60"
        />
        <div
          className="bg-cover h-full w-full"
          style={{ backgroundImage: "url('/images/wave.svg')" }}
        >
          <div
            className="h-[571px] w-[881px]"
            style={{ backgroundImage: "url('/images/arrow.svg')" }}
          />
        </div>
      </div>
      <div className="text-textViolet flex flex-row absolute z-10 left-2 top-40 w-full ">
        <div className='h-full  flex flex-col gap-5  pl-28 w-full'>
          <div className="h-full font-redhat w-full">
            <Logo/>
            <h1>{t("title")}</h1>
          </div>
          <div className="h-full w-full font-raleway color-violet gap-3">
            <div className='pb-3 w-full'>
              <h1>{t("street")}</h1>
              <h1>{t("country")}</h1>
            </div>
            <div>
              <h1>bulkina.ola@gmail.com</h1>
              <h1>+380 67 596 1600</h1>
            </div>
          </div>
            <HelpLinks/>
        </div>
        <div className='w-full h-[160px]'>
          <AssociationLinks/>
        </div>
        <div className='flex flex-col pt-28 w-full gap-5'>
          <FooterLinks/>
           <SocialLinks/>
        </div>
      </div>
    </div>
  );
// =======
// 'use client';
// import { usePathname } from 'next/navigation';

// const Footer = () => {
//   const pathname = usePathname();
//   const isAdminPage =
//     pathname.split('/').includes('admin') ||
//     pathname.split('/').includes('login');

//   if (isAdminPage) return null;

//   return <div>Footer</div>;
// >>>>>>> main
};

export default Footer;
