import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { useGetAllDocumentsQuery } from '@/store/api/documentsApi';
import Link from 'next/link';

type HelpLinksProps = {
  className?: string;
};

const HelpLinks: React.FC<HelpLinksProps> = ({ className }) => {
  const t = useTranslations('Footer.documents');
  const { data: helpLinks } = useGetAllDocumentsQuery();

  return (
    <ul className={clsx('flex flex-col gap-4', className)}>
      {helpLinks && (
        <>
          {helpLinks.map(({ title }) => (
            <li className="underline" key={title}>
              <Link href={`/documents/${title}`}>{t(title)}</Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default HelpLinks;
