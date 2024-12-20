import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ContactInfoProps {
  showIcons?: boolean;
  address?: string;
  email?: string;
  phone?: string;
  instagramUrl?: string;
  instagramText?: string;
  facebookUrl?: string;
  facebookText?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  showIcons = true,
  address,
  email,
  phone,
  instagramUrl,
  instagramText,
  facebookUrl,
  facebookText,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () =>
    typeof navigator !== "undefined" &&
    /Mobi|Android|iPhone|iPad|Tablet|PlayBook|Silk/i.test(navigator.userAgent);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const handlePhoneClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobile) {
      event.preventDefault();
    }
  };

  return (
    <>
      {address && (
        <div className="mb-2 flex items-center pt-2">
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
          <p className={showIcons ? 'ml-6' : ''}>{address}</p>
        </div>
      )}

      {email && (
        <div className="mb-2 flex items-center">
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
          <p className={showIcons ? 'ml-6' : ''}>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
        </div>
      )}

      {phone && (
        <div className="mb-2 flex items-center font-redhat">
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
          <p className={showIcons ? 'ml-6' : ''}>
            <a
              href={`tel:${phone}`}
              title="Our phone number"
              className="js-phone-link max-ml:hover:underline ml:cursor-auto"
              onClick={handlePhoneClick}
            >
              {phone}
            </a>
          </p>
        </div>
      )}

      {instagramUrl && (
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
          <p className={showIcons ? 'ml-6' : ''}>
            <a href={instagramUrl} target="_blank" className="hover:underline">
              {instagramText || 'Instagram'}
            </a>
          </p>
        </div>
      )}

      {facebookUrl && (
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
          <p className={showIcons ? 'ml-6' : ''}>
            <a href={facebookUrl} target="_blank" className="hover:underline">
              {facebookText || 'Facebook'}
            </a>
          </p>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
