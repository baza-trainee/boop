import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import data from '../assets/data.json';

const WhoCanJoin = () => {
  return (
    <div>
      <SectionTitle title="Хто може стати лікарняним клоуном?" />
      <div className="flex gap-[141px]">
        <ul
          role="list"
          className="leading-norma mt-12 max-w-[487px] pl-8 font-raleway text-xl font-normal"
        >
          {data.paragraphs.map((paragraph, pIndex) => (
            <li
              key={pIndex}
              className="relative mb-8  before:absolute before:left-[-24px] before:top-1/2
          before:h-4  before:w-4 before:-translate-y-1/2 before:rounded-full last:mb-0 before:odd:bg-violet before:even:bg-red"
            >
              {paragraph.text.map((segment, sIndex) => (
                <span
                  key={sIndex}
                  className={`${segment.highlight ? 'text-yellow' : 'text-textViolet'} `}
                >
                  {segment.content}
                </span>
              ))}
            </li>
          ))}
        </ul>
        <div
          className="relative h-[516px] w-[387px] bg-[url('/icons/school/man-smiling-with-fake-red-nose.png')] 
      before:absolute before:bottom-0 before:block before:h-[242px] before:w-[525px] before:bg-[#50439F] before:content-['']"
        ></div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
