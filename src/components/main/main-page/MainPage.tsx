'use client';

import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';

const MainPage = () => {
  return (
    <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-bgWhite">
      <Image
        src="/images/hero-bg-image.svg"
        alt=""
        width={750}
        height={600}
        className="-z-1 absolute -top-[100px] right-0"
      />
      <SectionTitle title="Example Title" />
    </div>
  );
};

export default MainPage;
