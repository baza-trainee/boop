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
    }
  };

  const handleImageClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  return (
    <div
      className={`relative flex h-[24px] cursor-pointer items-center text-[20px] font-semibold leading-[20px] text-mainViolet xs:mr-[20px] md:mr-0`}
    >
      <div
        ref={menuRef}
        onClick={handleImageClick}
        className="mt-[5px] flex w-[60px] items-center gap-[8px] px-[5px] pl-[14px] md:pl-0"
      >
        <div className="mr-[10px] w-[28px] font-bold md:mr-0">
          {currentLocale.toUpperCase()}
        </div>
        <div className={`${!isOpen && 'rotate-[180deg]'}`}>
          <Image
            className="font-bold"
            src="/images/header/keyboard_arrow_down.svg"
            alt="arrow down"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isOpen && (
        <div
          ref={submenuRef}
          className="absolute -left-[3px] top-[30px] flex w-[81px] flex-col justify-around rounded-none"
        >
          {filteredLocales.map((item: string) => (
            <div key={item} className="flex w-[81px] gap-[8px]">
              <div
                className="ml-1 flex h-[30px] w-[28px] cursor-pointer items-center"
                onClick={() => handleCheckLocale(item)}
              >
                {item.toUpperCase()}
              </div>
              <div
                key={item}
                className="ml-1 flex h-[30px] w-[28px] items-center"
              >
                <Image
                  src={`/icons/header/${item}-flag.svg`}
                  alt={`${item} flag`}
                  width={27}
                  height={20}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
