import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { associationLinks } from '../links';
import Link from 'next/link';
import clsx from 'clsx';

type AssociationLinksProps = {
  className?: string;
};

const AssociationLinks: React.FC<AssociationLinksProps> = ({ className }) => {
  const t = useTranslations('Footer.association');

  return (
    <div className={clsx('', className)}>
      <h4 className="mb-4 flex items-center gap-3 text-[18px] font-medium leading-[132%]">
        {t('title')}
        <Image src="/icons/arrow.svg" width={12} height={12} alt="arrow" />
      </h4>
      <ul className="flex flex-col gap-3">
        {associationLinks.map(({ url, name }) => (
          <li
            className="text-decoration-skip-ink font-semibold leading-[132%] underline"
            key={url}
          >
            <Link target="_blank" href={url}>
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssociationLinks;
