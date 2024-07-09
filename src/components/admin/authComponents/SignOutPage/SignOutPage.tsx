'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SignOutPage() {
  const handleButton = () => {
    signOut({ callbackUrl: '/admin' });
  };
  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto  px-[278px] py-[275px]">
      <div className=" box-border flex flex-col items-center justify-center gap-5 bg-[#fdfdff] p-14 [box-shadow:0px_8px_16px_-8px_rgba(0,0,0,0.3)]">
        <h2 className=" mb-0 mt-0 max-w-[346px] text-left font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[30px] tracking-[0px] text-[#0a0a0a]">
          Ви впевнені, що хочете вийти із акаунту адміністратора?
        </h2>
        <div className="flex gap-5">
          <button
            className="rounded-[32px] bg-[#e93405] px-[24px] py-[18px]"
            onClick={handleButton}
          >
            <span className="mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-bold normal-case not-italic leading-[20px] text-[#ffffff]">
              Вийти
            </span>
          </button>
          <Link
            href={'/admin'}
            className="flex items-center justify-center gap-4 rounded-[32px] border-2 border-[#e6d57a] px-[20px] py-[12px]"
          >
            <p className="mb-0 mt-0 text-center font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[20px] tracking-[0px] text-[#2f245e]">
              Скасувати
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SignOutPage;
