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
        className="bg-bgWhite bg-[right_top_35px] bg-no-repeat pb-[130px] pt-[100px]"
        style={{ backgroundImage: "url('/icons/school/wave.svg')" }}
      >
        <div className="container">
          <Introduction />
          <WhoCanJoin />
        </div>
      </section>
      <Training />
      <Feedback />
      <Photos />
      <ClownSchoolForm />
    </ModalProvider>
  );
};

export default SchoolPage;
