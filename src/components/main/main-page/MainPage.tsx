'use client';

import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle';
import Vision from '../vision/Vision';

const MainPage = () => {
  return (
    <div className="colou relative flex min-h-[100vh] w-full flex-col items-center justify-center bg-bgWhite">
      <Image
        src="/images/hero-bg-image.svg"
        alt=""
        width={750}
        height={600}
        className="-z-1 absolute -top-[100px] right-0"
      />
      <SectionTitle title="Example Title" />
      <Vision />
    </div>
  );
};

export default MainPage;
