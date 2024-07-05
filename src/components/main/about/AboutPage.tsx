import React from 'react';
import TeamStructure from './components/teamStructure/TeamStructure';
import MainRules from './components/mainRules/MainRules';

const AboutPage = () => {
  return (
    <div className=" min-h-[100vh] w-full bg-bgWhite pt-[100px]">
      <MainRules />
      <TeamStructure />
    </div>
  );
};

export default AboutPage;
