'use client';

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactInfo from '../shared/ContactInfo';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MAP_URL } from '../../../constants/config';

const ContactsPage = () => {
  const t = useTranslations('Contacts');

  return (
    <>
      <section
        className="md:bg-[url('/images/wave-secondary.svg')] bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-5 md:pb-[255px] pt-[20px] md:pt-[100px]"
      >
        <div className="container m-auto max-w-[1536px] items-center">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[45%] ml:w-[35%] md:flex flex-col space-y-4 justify-center relative mb-4">
              <SectionTitle title={t('title')} />
              <ContactInfo showIcons={true} />
              <Image
                src="/images/blue-clown.svg"
                alt="Clown"
                width={251}
                height={185}
                className="absolute right-0 ml:-bottom-[120px] max-ml:hidden"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="md:w-[55%] ml:w-[65%] mt-4 md:mt-0">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={MAP_URL}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
