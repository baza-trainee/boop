import React from 'react';
import { useTranslations } from 'next-intl';
import { helpLinks } from '../links';
// import Link from 'next/link';
import clsx from 'clsx';

type HelpLinksProps = {
  className?: string;
};

const HelpLinks: React.FC<HelpLinksProps> = ({ className }) => {
  const t = useTranslations('Footer');

  const downloadPdf = (url: string) => {
    url && window.open(url, '_blank');
  };

  return (
    <ul className={clsx('flex flex-col gap-4', className)}>
      {helpLinks.map(({ url, name }) => (
        <li className="cursor-pointer underline" key={name}>
          {/* <Link target="_blank" href={url}>
            {t(name)}
          </Link> */}
          <span onClick={() => downloadPdf(url)}>{t(name)}</span>
        </li>
      ))}
    </ul>
  );
};

export default HelpLinks;
