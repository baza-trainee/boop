'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from './sidebarLinks';

const Sidebar = () => {
  const pathname = usePathname();

  const isLinkActive = (link: string) => {
    return pathname.split('/').includes(link);
  };

  return (
    <aside className="flex w-[306px] flex-col items-center bg-beige p-[24px] text-violet">
      <Link href="/" className="mb-[32px]">
        <Image src="/images/logo.png" alt="logo" width={100} height={50} />
      </Link>
      <ul className="flex w-full flex-col items-center gap-[10px]">
        {sidebarLinks.map((link, index) => (
          <Link key={index} href={link.href} className="w-full">
            <li
              className={`border-box flex w-full items-center gap-[24px] rounded-3xl py-2 pl-[32px] pr-[16px]
                ${isLinkActive(link.link) && 'border-2 border-violet pl-[30px]'}`}
            >
              <svg className="h-[30px] w-[30px]">
                <use href={`/icons/sprite.svg#${link.icon}`}></use>
              </svg>
              <span className="whitespace-nowrap text-[16px] font-bold">
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      {/* TODO: logout button */}
    </aside>
  );
};

export default Sidebar;
