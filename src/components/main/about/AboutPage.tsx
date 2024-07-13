'use client';

import React from 'react';
import TeamStructure from './components/teamStructure/TeamStructure';
import MainRules from './components/mainRules/MainRules';
import Team from '../main-page/team/Team';

const AboutPage = () => {
  return (
    <div className=" min-h-[100vh] w-full bg-bgWhite pt-[100px]">
      <MainRules />
      <TeamStructure />
      <Team />
    </div>
  );
};

export default AboutPage;
