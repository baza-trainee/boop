'use client';

import React, { useState } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Map = dynamic(() => import('./Map'), { ssr: false });

const initialAddress = "вулиця В'ячеслава Чорновола, 28/1, Київ, Україна, 01111";

const ContactsPage = () => {
  const t = useTranslations('Contacts');
  const [address, setAddress] = useState(initialAddress);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <>
      <section
        className="bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-[310px] pt-[100px]"
        style={{ backgroundImage: "url('/images/wave-secondary.svg')" }}
      >
        <div className="container m-auto max-w-[1536px] items-center">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[calc(100%-746px)] flex flex-col space-y-4 justify-center relative">
              <SectionTitle title={t('title')} />
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/map.svg"
                    alt="Address"
                    width={22}
                    height={28}
                  />
                </span>
                <p className="ml-6">{address}</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/email.svg"
                    alt="Map"
                    width={24}
                    height={20}
                  />
                </span>
                <p className="ml-6"><a href="mailto:bulkina.ola@gmail.com">bulkina.ola@gmail.com</a></p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/phone.svg"
                    alt="Map"
                    width={26}
                    height={26}
                  />
                </span>
                <p className="ml-6">+380 67 596 1600</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/instagram.svg"
                    alt="Map"
                    width={26}
                    height={26}
                  />
                </span>
                <p className="ml-6"><a href="https://instagram.com/boop.ukraine" target="_blank">boop.ukraine</a></p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/fb.svg"
                    alt="Map"
                    width={28}
                    height={28}
                  />
                </span>
                <p className="ml-6"><a href="https://facebook.com/Boop.ukraine/" target="_blank">facebook.com/Boop.ukraine</a></p>
              </div>
              <Image
                src="/images/blue-clown.svg"
                alt="Clown"
                width={251}
                height={185}
                className="absolute right-0 -bottom-[90px]"
              />
            </div>
            <div className="md:w-[746px] mt-4 md:mt-0">
              {isMapLoaded ? (
                <Map initialAddress={address} onAddressChange={setAddress} />
              ) : (
                <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0' }}>
                  <p>Loading map...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;
