'use client';
import React, { useEffect, useState } from 'react';
import Introduction from './components/Introduction';
import WhoCanJoin from './components/WhoCanJoin';
import Training from './components/Training';
import Feedback from './components/feedback/Feedback';
import Photos from './components/Photos';
import ClownSchoolForm from './components/ClownSchoolForm';
import { ModalProvider } from '../../providers/ModalProvider';
import { useMediaQuery } from 'react-responsive';

const SchoolPage: React.FC = () => {
  const isMobile = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 767.98px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023.98px)',
  });
  const isLargeTablet = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1279.98px)',
  });
  const isLGDesktop = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1365.98px)',
  });
  const isXLDesktop = useMediaQuery({
    query: '(min-width: 1366px) and (max-width: 1535.98px)',
  });
  const isLargeDesktop = useMediaQuery({
    query: '(min-width: 1536px)',
  });
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    if (isMobile) {
      setBackgroundImage("url('/icons/school/wave_xs.svg')");
    } else if (isTablet) {
      setBackgroundImage("url('/icons/school/wave_md.svg')");
    } else if (isLargeTablet) {
      setBackgroundImage("url('/icons/school/wave_ml.svg')");
    } else if (isLGDesktop) {
      setBackgroundImage("url('/icons/school/wave_lg.svg')");
    } else if (isXLDesktop) {
      setBackgroundImage("url('/icons/school/wave_xl.svg')");
    } else if (isLargeDesktop) {
      setBackgroundImage("url('/icons/school/wave_4xl.svg')");
    } else {
      setBackgroundImage("url('/icons/school/wave.svg')");
    }
  }, [
    isMobile,
    isTablet,
    isLargeTablet,
    isLGDesktop,
    isXLDesktop,
    isLargeDesktop,
  ]);
  return (
    <ModalProvider>
      <div className="bg-bgWhite">
        <section
          className="bg-[right_bottom_200px] bg-no-repeat pb-[70px] pt-[72.5px] xs:bg-[right_bottom_69px] md:bg-[right_4px_bottom_-32px] md:pb-[100px] md:pt-[100px] ml:bg-[right_bottom_10px] lg:bg-[right_-7px_bottom_50px] xl:bg-[right_bottom_-5px] xl:pb-[120px] 3xl:bg-[right_top_168px] 3xl:pt-[120px] 4xl:bg-[right_bottom_-13px]"
          style={{ backgroundImage }}
        >
          <div className="container mx-auto max-w-screen-3xl">
            <Introduction />
            <WhoCanJoin />
          </div>
        </section>
        <Training />
        <Feedback />
        <ClownSchoolForm />
        <Photos />
      </div>
    </ModalProvider>
  );
};

export default SchoolPage;
