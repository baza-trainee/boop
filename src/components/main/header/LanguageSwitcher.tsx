'use client';
import Image from 'next/image';
import { locales } from '@/i18n';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const path = usePathname();
  const locale: string = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [containerPosition, setContainerPosition] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const filteredLocales = locales.filter((item) => item !== currentLocale);

  const handleCheckLocale = (item: string) => {
    setIsOpen(!isOpen);
    setCurrentLocale(item);
    router.replace(path, { locale: item });
  };

  const handleOutsideClick = (event: Event): void => {
    if (
      !submenuRef.current?.contains(event.target as HTMLElement) &&
      !(
        event.target === menuRef.current ||
        menuRef.current?.contains(event.target as HTMLElement)
      )
    ) {
      setIsOpen(false);
      setContainerPosition('');
    }
  };

  const handleImageClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    setContainerPosition(isOpen ? '' : 'absolute -top-[35px] left-0');
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <div
      className={`relative flex h-[24px] cursor-pointer items-center text-[20px] font-semibold leading-[20px] text-mainViolet ${containerPosition}`}
    >
      <div
        ref={menuRef}
        onClick={handleImageClick}
        className="mt-[5px] flex w-[80px] items-center px-[5px] pl-[14px]"
      >
        <span className="mr-[10px] w-[24px] font-bold">
          {currentLocale.toUpperCase()}
        </span>
        <span className={`${!isOpen && 'rotate-[180deg]'}`}>
          <Image
            className="mr-[10px] w-[24px] font-bold"
            src="/images/keyboard_arrow_down.svg"
            alt="arrow down"
            width={90}
            height={50}
          />
        </span>
      </div>
      {isOpen && (
        <div
          ref={submenuRef}
          className="absolute left-[11px] top-[30px] flex w-[100px] flex-col rounded-none"
        >
          {filteredLocales.map((item: string) => (
            <span
              key={item}
              className="ml-1 flex h-[30px] cursor-pointer items-center"
              onClick={() => handleCheckLocale(item)}
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
