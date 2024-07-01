'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  const t = useTranslations('Header');

  return (
    <div className="container fixed left-0 right-0 top-0 z-50 flex h-[100px] w-full items-center justify-between bg-beige text-violet">
      <div className="w-1/5">
        <a href="/" title="Бюро усмішок і підтримки">
          <Image
            src="/images/logo.svg"
            alt="Бюро усмішок і підтримки"
            width={86}
            height={50}
          />
        </a>
      </div>
      <nav className="relative z-10 flex w-3/5 justify-end overflow-y-auto whitespace-nowrap pr-11 font-groppled text-xl font-bold leading-5">
        <ul className="flex items-center">
          <li className="pl-4 pr-5">
            <a href="/" title={t('home')}>
              {t('home')}
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/about" title={t('about')}>
              {t('about')}
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/school" title={t('school')}>
              {t('school')}
            </a>
          </li>
          <li className="pl-4 pr-5">
            <a href="/contacts" title={t('contacts')}>
              {t('contacts')}
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative z-10 -ml-5 flex w-1/5 items-center justify-end pl-8 font-raleway">
        <LanguageSwitcher />
        <button className="relative z-10 -mr-11 ml-1 whitespace-nowrap rounded-full bg-red px-4 py-3 text-xl font-bold leading-5 text-white">
          {t('button')}
        </button>
      </div>
    </div>
  );
};

export default Header;
