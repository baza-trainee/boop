import React from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { useGetAllDocumentsQuery } from '@/store/api/documentsApi';

type HelpLinksProps = {
  className?: string;
};

const HelpLinks: React.FC<HelpLinksProps> = ({ className }) => {
  const t = useTranslations('Footer');
  const { data: helpLinks } = useGetAllDocumentsQuery();

  const downloadPdf = (url: string) => {
    url && window.open(url, '_blank');
  };

  return (
    <ul className={clsx('flex flex-col gap-4', className)}>
      {helpLinks && (
        <>
          {helpLinks.map(({ documentUrl, title }) => (
            <li className="cursor-pointer underline" key={title}>
              <span onClick={() => downloadPdf(documentUrl)}>{t(title)}</span>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default HelpLinks;
