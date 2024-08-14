import React from 'react';
import { useTranslations } from 'next-intl';
import { navigationLinks } from '../links';
import { Link } from '@/navigation';
import clsx from 'clsx';

type FooterNavigationLinksProps = {
  className?: string;
};

const FooterNavigationLinks: React.FC<FooterNavigationLinksProps> = ({
  className,
}) => {
  const t = useTranslations('Footer.navigation');

  return (
    <ul className={clsx('flex flex-col gap-6', className)}>
      {navigationLinks.map(({ url, name }) => (
        <li className="hover:underline" key={url}>
          <Link href={url}>{t(name)}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigationLinks;
