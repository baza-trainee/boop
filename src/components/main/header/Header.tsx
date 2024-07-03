'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="bg-bgHeader container fixed left-0 right-0 top-0 z-50 flex h-[100px] w-full items-center justify-between px-[120px] py-[26px] text-violet">
      <div>
        <a href="/" title="Бюро усмішок і підтримки">
          <Image
            src="/images/logo.svg"
            alt="Бюро усмішок і підтримки"
            width={86}
            height={50}
          />
        </a>
      </div>
      <nav className="relative z-10 flex h-[24px] w-[462px] justify-between gap-[48px] whitespace-nowrap px-[4px] py-0 font-groppled text-[20px] font-bold leading-[31.6px] text-mainViolet">
        <ul className="flex items-center">
          <li className="pr-6">
            <a href="/" title={t('home')}>
              {t('home')}
            </a>
          </li>
          <li className="pl-5 pr-6">
            <a href="/about" title={t('about')}>
              {t('about')}
            </a>
          </li>
          <li className="pl-5 pr-6">
            <a href="/school" title={t('school')}>
              {t('school')}
            </a>
          </li>
          <li className="pl-6">
            <a href="/contacts" title={t('contacts')}>
              {t('contacts')}
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative z-10 flex items-center justify-end pl-8 font-raleway">
        <LanguageSwitcher />
        <button className="relative z-10 whitespace-nowrap rounded-full bg-red px-4 py-3 text-xl font-bold leading-5 text-white">
          {t('button')}
        </button>
      </div>
    </div>
  );
};

export default Header;
