'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from './sidebarLinks';
import { applicationsApi } from '@/store/api/applicationsApi';
import Loader from '@/components/shared/loader/Loader';

const Sidebar = () => {
  const pathname = usePathname();

  const { data, isFetching, isLoading } =
    applicationsApi.useGetAllApplicationsQuery();

  const isUnprocessedApplications = () => {
    const filteredApplications = data?.filter(
      (application) => application.isProcessed === false
    );
    return !!filteredApplications?.length;
  };

  const isLinkActive = (link: string) => {
    return pathname.split('/').includes(link);
  };

  if (isLoading || isFetching) return <Loader />;

  return (
    <aside className="flex w-[306px] flex-col items-center bg-beige p-[24px] text-violet">
      <Link href="/" className="mb-[32px]">
        <Image src="/images/logo.svg" alt="logo" width={100} height={58} />
      </Link>
      <ul className="flex w-full flex-col items-center">
        {sidebarLinks.map((link, index) => (
          <Link key={index} href={link.href} className="w-full">
            <li
              className={`border-box flex w-full items-center gap-[24px] rounded-3xl border-2 border-transparent py-2 pl-[32px] pr-[16px] hover:border-violet
                ${isLinkActive(link.link) && 'border-violet'} ${index === sidebarLinks.length - 3 ? 'mb-[60px]' : 'mb-[10px]'}`}
            >
              <svg className={`h-[32px] w-[32px]`}>
                <use
                  href={`/icons/admin/sidebar/sprite.svg#${link.icon}`}
                ></use>
              </svg>
              <span className="relative whitespace-nowrap text-[16px] font-bold">
                {link.name}
                {isUnprocessedApplications() &&
                  link.link === 'applications' && (
                    <div className="absolute -left-[30px] top-0 z-50 h-[5px] w-[5px] rounded-full bg-red"></div>
                  )}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <Link
        href={'/admin/signOut'}
        className={`flex w-full items-center justify-center gap-4 rounded-3xl border-2  border-[#e6d57a]  px-[20px] py-[12px]  ${isLinkActive('signOut') ? 'bg-[#e6d57a]' : 'bg-[#fbf3e0]'}`}
      >
        <Image
          src={`/icons/admin/sidebar/logout.svg`}
          alt="logout"
          width={25}
          height={25}
        />
        <span className="font-[800]">Вийти</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
