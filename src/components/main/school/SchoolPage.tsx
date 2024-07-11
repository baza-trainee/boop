'use client';
import React from 'react';
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

  let backgroundImage;

  if (isMobile) {
    backgroundImage = "url('/icons/school/wave_xs.svg')";
  } else if (isTablet) {
    backgroundImage = "url('/icons/school/wave_md.svg')";
  } else if (isLargeTablet) {
    backgroundImage = "url('/icons/school/wave_ml.svg')";
  } else {
    backgroundImage = "url('/icons/school/wave.svg')";
  }
  return (
    <ModalProvider>
      <section
        className="bg-no-repeat pb-[70px] pt-[72.5px] xs:bg-[right_bottom] md:pb-[100px] md:pt-[100px] ml:bg-[right_bottom_10px] xl:pb-[120px] 3xl:bg-[right_top_35px] 3xl:pt-[120px]"
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
    </ModalProvider>
  );
};

export default SchoolPage;
