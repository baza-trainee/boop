'use client';

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactInfo from '../shared/ContactInfo';
import { useTranslations } from 'next-intl';
import { MAP_URL } from '../../../constants';
import AnimatedClown from './components/AnimatedClown';

const ContactsPage = () => {
  const t = useTranslations('Contacts');

  return (
    <>
      <section className="md:bg-[url('/images/wave-secondary.svg')] bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-5 md:pb-[255px] pt-[120px] md:pt-[200px]">
        <div className="container mx-auto max-w-screen-3xl items-center">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[45%] ml:w-[35%] md:flex flex-col space-y-4 justify-center relative mb-4">
              <SectionTitle title={t('title')} />
              <ContactInfo showIcons={true} />
              <AnimatedClown className="absolute right-5 ml:-bottom-[130px] max-ml:hidden" />
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
