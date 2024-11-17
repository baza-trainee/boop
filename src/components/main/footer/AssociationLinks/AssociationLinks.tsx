import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { associationLinks } from '../links';
import Link from 'next/link';
import clsx from 'clsx';

type AssociationLinksProps = {
  className?: string;
};

const AssociationLinks: React.FC<AssociationLinksProps> = ({ className }) => {
  const t = useTranslations('Footer.association');

  return (
    <section className={clsx('', className)} aria-labelledby="association-links-title">
      <h4 id="association-links-title" className="mb-4 flex items-center gap-3 text-[18px] font-medium leading-[132%]">
        {t('title')}
        <Image
          src="/icons/arrow.svg"
          width={12}
          height={12}
          alt="icon"
          aria-hidden="true"
        />
      </h4>
      <ul role="list" aria-labelledby="association-links-list">
        {associationLinks.map(({ url, name }) => (
          <li key={url}>
            <Link
              target="_blank"
              href={url}
              className="text-decoration-skip-ink font-semibold leading-[132%] underline"
              aria-label={t(name)}
            >
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AssociationLinks;
