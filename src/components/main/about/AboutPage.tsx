'use client';

import React from 'react';
import TeamStructure from './components/teamStructure/TeamStructure';
import MainRules from './components/mainRules/MainRules';
import Team from '../main-page/team/Team';
import Blog from './components/blog/Blog';
import Hospital_Clowning from './components/hospital_clowning/Hospital_Clowning';
import Payment from '../payment/Payment';

const AboutPage = () => {
  return (
    <div className="min-h-[100vh] w-full bg-bgWhite pt-[100px]">
      <MainRules />
      <TeamStructure />
      <Team />
      <Hospital_Clowning />
      <Payment />
      <Blog />
    </div>
  );
};

export default AboutPage;
