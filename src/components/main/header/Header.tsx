'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/navigation';

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="container fixed left-0 right-0 top-0 z-50 flex h-[100px] w-full items-center justify-between bg-bgHeader bg-opacity-80 px-[120px] py-[26px] text-violet backdrop-blur-sm backdrop-filter">
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
      <nav className="relative z-10 ml-[8px] flex h-[24px] w-[462px] justify-between whitespace-nowrap px-[4px] py-0 font-groppled text-[20px] font-bold leading-[31.6px] text-mainViolet">
        <ul className="flex items-center">
          <li className="pr-[48px]">
            {/* <a href="/" title={t('home')}>
              {t('home')}
            </a> */}
            <Link href="/">{t('home')}</Link>
          </li>
          <li className="pr-[48px]">
            {/* <a href="/about" title={t('about')}>
              {t('about')}
            </a> */}
            <Link href="/about">{t('about')}</Link>
          </li>
          <li className="pr-[48px]">
            {/* <a href="/school" title={t('school')}>
              {t('school')}
            </a> */}
            <Link href="/school">{t('school')}</Link>
          </li>
          <li className="">
            {/* <a href="/contacts" title={t('contacts')}>
              {t('contacts')}
            </a> */}
            <Link href="/contacts">{t('contacts')}</Link>
          </li>
        </ul>
      </nav>
      <div className="font-ralewayb relative z-10 flex w-[330px] items-center">
        <div className="relative w-[100px]">
          <LanguageSwitcher />
        </div>
        <button className="ml-[30px] h-[56px] w-[238px] whitespace-nowrap rounded-[32px] bg-red px-[24px] py-[18px] text-[20px] font-bold leading-[20px] text-white">
          {t('button')}
        </button>
      </div>
    </div>
  );
};

export default Header;
