'use client';

import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import ContactInfo from '../shared/ContactInfo';
import { useTranslations, useLocale } from 'next-intl';
import { contactsApi } from '@/store/api/contactsApi';
import { IContact } from '@/types/contacts';
import { CONTACT_INFO } from '@/constants';
import AnimatedContactsMan from './components/AnimatedContactsMan';

const ContactsPage: React.FC = () => {
  const t = useTranslations('Contacts');
  const locale = useLocale();
  const { data: contacts, isLoading, isError } = contactsApi.useGetAllContactsQuery();

  if (isError) return <p>Error loading contacts</p>;
  if (isLoading || !contacts || contacts.length === 0) return <p>Loading...</p>;

  const contactData: IContact = contacts[0];

  const addressMap: { [key: string]: string } = {
    en: contactData.addressEn,
    it: contactData.addressIt,
    default: contactData.addressUa,
  };
  const address = addressMap[locale] || addressMap['default'];

  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=17`;

  return (
    <section className="bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-5 pt-[120px] md:bg-[url('/images/wave-secondary.svg')] md:pb-[255px] md:pt-[200px]">
      <div className="container mx-auto max-w-screen-3xl items-center">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="relative mb-4 flex-col justify-center space-y-4 md:flex md:w-[45%] ml:w-[35%]">
            <SectionTitle title={t('title')} />
            <ContactInfo
              showIcons={true}
              address={address}
              email={contactData.email}
              phone={contactData.phone}
              instagramUrl={contactData.instagram}
              instagramText={CONTACT_INFO.instagramText || 'Instagram'}
              facebookUrl={contactData.facebook}
              facebookText={CONTACT_INFO.facebookText || 'Facebook'}
            />
            <AnimatedContactsMan className="absolute right-10 h-[204px] w-[277px] cursor-pointer max-ml:hidden ml:-bottom-[200px] lg:-bottom-[150px] 4xl:-bottom-10" />
          </div>
          <div className="mt-4 md:mt-0 md:w-[55%] ml:w-[65%]">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                src={mapUrl}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
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
  );
};

export default ContactsPage;
