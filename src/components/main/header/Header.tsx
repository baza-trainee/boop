'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const isAdminPage =
    pathname.split('/').includes('admin') ||
    pathname.split('/').includes('login');

  if (isAdminPage) return null;

  return (
    <div className="container flex h-[100px] w-full items-center justify-between bg-beige text-violet">
      <div className="w-1/5">
        <Image src="/images/logo.svg" alt="logo" width={86} height={50} />
      </div>
      <nav className="flex w-3/5 justify-end overflow-y-auto whitespace-nowrap pr-11 font-groppled text-xl font-bold leading-5">
        <ul className="flex items-center">
          <li className="pl-4 pr-5">
            <a href="#">Головна</a>
          </li>
          <li className="pl-4 pr-5">
            <a href="#">Про нас</a>
          </li>
          <li className="pl-4 pr-5">
            <a href="#">Школа Клоунів</a>
          </li>
          <li className="pl-4 pr-5">
            <a href="#">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className="-ml-5 flex w-1/5 items-center justify-end pl-8 font-raleway ">
        <button className="flex items-center pr-2 font-semibold">
          UA
          <Image
            className="w-6"
            src="/images/keyboard_arrow_down.svg"
            alt="logo"
            width={86}
            height={50}
          />
        </button>
        <button className="-mr-11 ml-1 whitespace-nowrap rounded-full bg-red px-4 py-3 text-xl font-bold leading-5 text-white">
          Підтримати проєкт
        </button>
      </div>
    </div>
  );
};

export default Header;
