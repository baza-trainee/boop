'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ContactInfoProps {
  address?: string;
  email?: string;
  phone?: string;
  instagramUrl?: string;
  instagramText?: string;
  facebookUrl?: string;
  facebookText?: string;
  showIcons?: boolean; // Prop to control icon visibility
  showAddress?: boolean; // Optional flags to control visibility
  showEmail?: boolean;
  showPhone?: boolean;
  showInstagram?: boolean;
  showFacebook?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  address = "01135, м. Київ, вул. В.Чорновола, 28/1",
  email = "bulkina.ola@gmail.com",
  phone = "+380 67 596 1600",
  instagramUrl = "https://instagram.com/boop.ukraine",
  instagramText = "boop.ukraine",
  facebookUrl = "https://facebook.com/Boop.ukraine/",
  facebookText = "facebook.com/Boop.ukraine",
  showIcons = true,
  showAddress = true,
  showEmail = true,
  showPhone = true,
  showInstagram = true,
  showFacebook = true,
}) => {
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
      {showAddress && (
        <div className="flex items-center mb-2">
          {showIcons && (
            <span className="material-icons">
              <Image
                src="/icons/contacts/map.svg"
                alt="Address"
                width={22}
                height={28}
              />
            </span>
          )}
          <p className={showIcons ? "ml-6" : ""}>{address}</p>
        </div>
      )}
      {showEmail && (
        <div className="flex items-center mb-2">
          {showIcons && (
            <span className="material-icons">
              <Image
                src="/icons/contacts/email.svg"
                alt="Email"
                width={24}
                height={20}
              />
            </span>
          )}
          <p className={showIcons ? "ml-6" : ""}><a href={`mailto:${email}`} className="hover:underline">{email}</a></p>
        </div>
      )}
      {showPhone && (
        <div className="flex items-center mb-2">
          {showIcons && (
            <span className="material-icons">
              <Image
                src="/icons/contacts/phone.svg"
                alt="Phone"
                width={26}
                height={26}
              />
            </span>
          )}
          <p className={showIcons ? "ml-6" : ""}><a href={`tel:${phone}`} title="Our phone number" className="max-ml:hover:underline js-phone-link ml:cursor-auto" onClick={handlePhoneClick}>{phone}</a></p>
        </div>
      )}
      {showInstagram && instagramUrl && (
        <div className="flex items-center">
          {showIcons && (
            <span className="material-icons">
              <Image
                src="/icons/contacts/instagram.svg"
                alt="Instagram"
                width={26}
                height={26}
              />
            </span>
          )}
          <p className={showIcons ? "ml-6" : ""}><a href={instagramUrl} target="_blank" className="hover:underline">{instagramText || instagramUrl}</a></p>
        </div>
      )}
      {showFacebook && facebookUrl && (
        <div className="flex items-center">
          {showIcons && (
            <span className="material-icons">
              <Image
                src="/icons/contacts/fb.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </span>
          )}
          <p className={showIcons ? "ml-6" : ""}><a href={facebookUrl} target="_blank" className="hover:underline">{facebookText || facebookUrl}</a></p>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
