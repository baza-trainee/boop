import React from 'react';
import Introduction from './components/Introduction';
import WhoCanJoin from './components/WhoCanJoin';
import Training from './components/Training';

const SchoolPage = () => {
  return (
    <>
      <section
        className="bg-bgWhite bg-[right_top_35px] bg-no-repeat pb-[120px] pt-[100px]"
        style={{ backgroundImage: "url('/icons/school/wave.svg')" }}
      >
        <div className="container">
          <Introduction />
          <WhoCanJoin />
        </div>
      </section>
      <Training />
    </>
  );
};

export default SchoolPage;
