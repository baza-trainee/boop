import React from 'react';
import { useTranslations } from 'next-intl';
import { helpLinks } from '../links';
import Link from 'next/link';
import clsx from 'clsx';

type HelpLinksProps = {
  className?: string;
};

const HelpLinks: React.FC<HelpLinksProps> = ({ className }) => {
  const t = useTranslations('Footer');

  return (
    <ul className={clsx('flex flex-col gap-4', className)}>
      {helpLinks.map(({ url, name }) => (
        <li className="underline" key={name}>
          <Link href={url}>{t(name)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HelpLinks;
