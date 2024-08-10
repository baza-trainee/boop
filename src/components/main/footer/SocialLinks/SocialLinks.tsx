import React from 'react';
import Image from 'next/image';
import { socialLinks } from '../links';
import Link from 'next/link';
import clsx from 'clsx';

type SocialLinksProps = {
  className?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={clsx('flex flex-row gap-10', className)}>
      {socialLinks.map(({ url, name, icon }) => (
        <Link target="_blank" href={url} key={url}>
          <Image src={icon} alt={name} width={44} height={44} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
