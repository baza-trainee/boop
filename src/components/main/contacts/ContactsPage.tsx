'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from '../shared/SectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const initialAddress = "01135, м. Київ, вул. В.Чорновола, 28/1";
const encodedAddress = encodeURIComponent(initialAddress);
const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=17`;

const ContactsPage = () => {
  const t = useTranslations('Contacts');
  const [address, setAddress] = useState(initialAddress);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function isMobileDevice() {
      return /Mobi|Android|iPhone|iPad|Tablet|PlayBook|Silk/i.test(navigator.userAgent);
    }
    setIsMobile(isMobileDevice());
  }, []);

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      event.preventDefault();
    }
  };

  return (
    <>
      <section
        className="md:bg-[url('/images/wave-secondary.svg')] bg-bgWhite bg-[right_top_0px] bg-no-repeat pb-5 md:pb-[255px] pt-[20px] md:pt-[100px]"
      >
        <div className="container m-auto max-w-[1536px] items-center">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[45%] ml:w-[35%] md:flex flex-col space-y-4 justify-center relative mb-4">
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
                    alt="Email"
                    width={24}
                    height={20}
                  />
                </span>
                <p className="ml-6"><a href="mailto:bulkina.ola@gmail.com" className="hover:underline">bulkina.ola@gmail.com</a></p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/phone.svg"
                    alt="Phone"
                    width={26}
                    height={26}
                  />
                </span>
                <p className="ml-6"><a href="tel:+380 67 596 1600" title="Our phone number" className="max-ml:hover:underline js-phone-link ml:cursor-auto" onClick={handlePhoneClick}>+380 67 596 1600</a></p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/instagram.svg"
                    alt="Instagram"
                    width={26}
                    height={26}
                  />
                </span>
                <p className="ml-6"><a href="https://instagram.com/boop.ukraine" target="_blank" className="hover:underline">boop.ukraine</a></p>
              </div>
              <div className="flex items-center">
                <span className="material-icons">
                  <Image
                    src="/icons/contacts/fb.svg"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                </span>
                <p className="ml-6"><a href="https://facebook.com/Boop.ukraine/" target="_blank" className="hover:underline">facebook.com/Boop.ukraine</a></p>
              </div>
              <Image
                src="/images/blue-clown.svg"
                alt="Clown"
                width={251}
                height={185}
                className="absolute right-0 ml:-bottom-[120px] max-ml:hidden"
              />
            </div>
            <div className="md:w-[55%] ml:w-[65%] mt-4 md:mt-0">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={mapUrl}
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
