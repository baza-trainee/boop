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
    setContainerPosition(isOpen ? '' : 'absolute -top-9 left-5');
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <div
      className={`reletive flex cursor-pointer items-center bg-beige ${containerPosition}`}
    >
      <div
        ref={menuRef}
        onClick={handleImageClick}
        className="-mb-1 mt-[5px] flex h-[35px] w-[60px] items-center justify-between px-[5px] text-violet"
      >
        <span className="font-sans' text-[18px] font-semibold">
          {currentLocale.toUpperCase()}
        </span>
        <span className={`${!isOpen && 'rotate-[180deg]'}`}>
          <Image
            className="w-6"
            src="/images/keyboard_arrow_down.svg"
            alt="arrow down"
            width={86}
            height={50}
          />
        </span>
      </div>
      {isOpen && (
        <div
          ref={submenuRef}
          className="absolute top-[100%] flex w-[60px] flex-col rounded-none bg-beige"
        >
          {filteredLocales.map((item: string) => (
            <span
              key={item}
              className="ml-1 flex h-[30px] cursor-pointer items-center font-sans text-[18px] font-semibold text-violet"
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
