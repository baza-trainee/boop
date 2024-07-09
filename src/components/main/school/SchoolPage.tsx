import React from 'react';
import Introduction from './components/Introduction';
import WhoCanJoin from './components/WhoCanJoin';
import Training from './components/Training';
import Feedback from './components/feedback/Feedback';
import Photos from './components/Photos';
import ClownSchoolForm from './components/ClownSchoolForm';
import { ModalProvider } from '../../providers/ModalProvider';

const SchoolPage: React.FC = () => {
  return (
    <ModalProvider>
      <section
        className="bg-[right_top_35px] bg-no-repeat pb-[70px] pt-[72.5px] md:pb-[100px] md:pt-[100px] xl:pb-[120px] 3xl:pt-[120px]"
        style={{ backgroundImage: "url('/icons/school/wave.svg')" }}
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
