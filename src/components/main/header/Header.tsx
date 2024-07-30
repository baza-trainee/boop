'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { Link } from '@/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import useWindowSize from '@/hooks/useWindowSize';
import HeaderLogo from './HeaderLogo';

const Header = () => {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  const [menuOpen, setMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const locale = useLocale();

  useEffect(() => {
    if (windowSize.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [windowSize.width, menuOpen]);

  useBodyScrollLock(menuOpen && windowSize.width <= 768);

  if (isAdminPage) return null;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[100px] w-full items-center justify-between bg-golden px-[20px] py-[26px] text-violet backdrop-filter custom:px-[40px] ml:px-[64px] xl:px-[80px] 4xl:px-[120px]">
      <div className="flex w-full items-center justify-between">
        <Link href="/" title={t('logoTitle')}>
          <HeaderLogo locale={locale} />
        </Link>
        <div className="flex h-[60px] items-center gap-[24px] xs:w-[144px] md:hidden">
          <div className="relative w-[60px] gap-[18px]">
            <LanguageSwitcher />
          </div>
          <button
            onClick={toggleMenu}
            className="text-mainViolet focus:outline-none"
          >
            <Image
              src={'/icons/header/icon-park-outline_hamburger-button.svg'}
              alt="burger-button"
              width={60}
              height={60}
            />
          </button>
        </div>
        <nav className="relative z-10 hidden w-[768px] justify-between whitespace-nowrap px-[4px] py-0 font-groppled font-bold text-mainViolet md:flex md:w-[359px] md:gap-[24px] md:text-[18px] md:leading-[27.36px] lg:w-[462px] lg:gap-[48px] 4xl:text-[20px] 4xl:leading-[31.6px]">
          <ul className="flex items-center">
            <li className="hover:underline md:pr-[25px] lg:pr-[48px]">
              <Link href="/" title={t('home')}>
                {t('home')}
              </Link>
            </li>
            <li className="hover:underline md:pr-[25px] lg:pr-[48px]">
              <Link href="/about" title={t('about')}>
                {t('about')}
              </Link>
            </li>
            <li className="hover:underline md:pr-[25px] lg:pr-[48px]">
              <Link href="/school" title={t('school')}>
                {t('school')}
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/contacts" title={t('contacts')}>
                {t('contacts')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="font-ralewayb relative z-10 hidden items-center gap-[32px] md:flex ml:w-[278px] lg:w-[330px]">
          <div className="relative">
            <LanguageSwitcher />
          </div>
          <button className="whitespace-nowrap rounded-[32px] bg-[rgba(233,52,5,1)] px-[24px] py-[18px] font-raleway font-bold text-white md:h-[52px] md:w-[190px] md:text-[16px] md:leading-[16px] lg:h-[56px] lg:w-[238px] lg:text-[20px] lg:leading-[20px]">
            {t('button')}
          </button>
        </div>
      </div>
      {menuOpen && window.innerWidth <= 768 && (
        <div
          className="fixed inset-0 z-40 h-[100vh] bg-[rgba(202,196,226,0.5)]"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-0 z-50 w-full rounded-b-[16px] border-b-[16px] border-b-yellow bg-bgBurgerMenu px-[48px] py-[10px] pb-[32px] pt-[10px] font-groppled font-bold text-textViolet`}
      >
        <div className="-mb-[15px] -mr-[25px] flex justify-end pt-[10px]">
          <button
            onClick={toggleMenu}
            className="text-mainViolet focus:outline-none"
          >
            <Image
              src="/icons/header/close.svg"
              alt="close burger-button"
              width={54}
              height={54}
            />
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-[13px]">
          <li>
            <Link href="/" title={t('logoTitle')}>
              <HeaderLogo locale={locale} />
            </Link>
          </li>
          <li className="py-[10px]">
            <Image
              src="/images/header/frame.svg"
              alt="wavy line"
              width={86}
              height={50}
            />
          </li>
          <li className="hover:underline">
            <Link href="/" title={t('home')} onClick={toggleMenu}>
              {t('home')}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/about" title={t('about')} onClick={toggleMenu}>
              {t('about')}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/school" title={t('school')} onClick={toggleMenu}>
              {t('school')}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="/contacts" title={t('contacts')} onClick={toggleMenu}>
              {t('contacts')}
            </Link>
          </li>
          <li className="py-[10px]">
            <Image
              src="/images/header/frame.svg"
              alt="wavy line"
              width={86}
              height={50}
            />
          </li>
          <li>
            <button
              className="h-[56px] w-[238px] whitespace-nowrap rounded-[32px] bg-red px-[24px] py-[18px] font-raleway text-[20px] font-bold leading-[20px] text-white ml:h-[52px] ml:w-[200px] ml:text-[16px] ml:leading-[16px]"
              onClick={toggleMenu}
            >
              {t('button')}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
