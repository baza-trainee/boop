import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

interface CounterItemProps {
  number: number;
  text: string;
  variant?: string;
}

const CounterItem = ({ number, text, variant = '1' }: CounterItemProps) => {
  return (
    <>
      <li className="font-groppleds relative -mt-[20px] h-[183px] first:text-violet last:text-violet odd:self-start even:self-end sm:mt-0">
        <div className="relative">
          {variant === '1' && (
            <>
              <div className="relative h-[157px] w-[162px] md:h-[180px] md:w-[187px] ml:h-[157px] ml:w-[162px] lg:h-[180px] lg:w-[187px]">
                <Image
                  src="/icons/counter/yellow-circle.svg"
                  fill
                  sizes="100%"
                  alt="yellow circle"
                />
              </div>
              <div className="absolute bottom-[2px] left-[2px] h-[156px] w-[163px] md:h-[182px] md:w-[191px] ml:h-[156px] ml:w-[163px] lg:h-[182px] lg:w-[191px]">
                <Image
                  src="/icons/counter/purple-border.svg"
                  fill
                  sizes="100%"
                  alt="purple border"
                />
              </div>
              <div className="absolute -top-[15px] right-[18px] h-[51px] w-[46px] md:-top-[23px] md:right-[42px] md:h-[62px] md:w-[56px] ml:-top-[15px] ml:right-[18px] ml:h-[51px] ml:w-[46px] lg:-top-[23px] lg:right-[42px] lg:h-[62px] lg:w-[56px]">
                <Image
                  src="/icons/counter/purple-bow.svg"
                  fill
                  sizes="100%"
                  alt="purple bow"
                />
              </div>
            </>
          )}
          {variant === '2' && (
            <>
              <div className="relative h-[161px] w-[162px] md:h-[179px] md:w-[180px] ml:h-[161px] ml:w-[162px] lg:h-[179px] lg:w-[180px]">
                <Image
                  src="/icons/counter/red-circle.svg"
                  fill
                  sizes="100%"
                  alt="red circle"
                />
              </div>
              <div className="absolute bottom-[2px] left-[2px] h-[161px] w-[162px] md:bottom-[4px] md:left-[5px] md:h-[181px] md:w-[182px] ml:bottom-[2px] ml:left-[2px] ml:h-[161px] ml:w-[162px] lg:bottom-[4px] lg:left-[5px] lg:h-[181px] lg:w-[182px]">
                <Image
                  src="/icons/counter/yellow-border.svg"
                  fill
                  sizes="100%"
                  alt="yellow border"
                />
              </div>
              <div className="absolute -top-[30px] left-[6px] h-[65px] w-[54px] md:-top-[39px] md:left-[4px] md:h-[74px] md:w-[60px] ml:-top-[30px] ml:left-[6px] ml:h-[65px] ml:w-[54px] lg:-top-[39px] lg:left-[4px] lg:h-[74px] lg:w-[60px]">
                <Image
                  src="/icons/counter/purple-party-hat.svg"
                  fill
                  sizes="100%"
                  alt="purple party hat"
                />
              </div>
            </>
          )}
          {variant === '3' && (
            <>
              <div className="relative h-[156px] w-[162px] md:h-[173px] md:w-[180px] ml:h-[156px] ml:w-[162px] lg:h-[173px] lg:w-[180px]">
                <Image
                  src="/icons/counter/purple-circle.svg"
                  fill
                  sizes="100%"
                  alt="purple circle"
                />
              </div>
              <div className="absolute bottom-[2px] right-[2px] h-[156px] w-[162px] md:bottom-[4px] md:right-[4px] md:h-[175px] md:w-[182px] ml:bottom-[2px] ml:right-[2px] ml:h-[156px] ml:w-[162px] lg:bottom-[4px] lg:right-[4px] lg:h-[175px] lg:w-[182px]">
                <Image
                  src="/icons/counter/red-border.svg"
                  fill
                  sizes="100%"
                  alt="red border"
                />
              </div>
              <div className="absolute -top-[23px] right-[13px] h-[62px] w-[76px] md:-top-[36px] md:right-[11px] md:h-[78px] md:w-[95px] ml:-top-[23px] ml:right-[13px] ml:h-[62px] ml:w-[76px] lg:-top-[36px] lg:right-[11px] lg:h-[78px] lg:w-[95px]">
                <Image
                  src="/icons/counter/cap.svg"
                  fill
                  sizes="100%"
                  alt="cap"
                />
              </div>
            </>
          )}
          {variant === '4' && (
            <>
              <div className="relative h-[161px] w-[162px] md:h-[179px] md:w-[180px] ml:h-[161px] ml:w-[162px] lg:h-[179px] lg:w-[180px]">
                <Image
                  src="/icons/counter/red-circle.svg"
                  fill
                  sizes="100%"
                  alt="red circle"
                />
              </div>
              <div className="absolute left-[2px] top-[2px] h-[161px] w-[162px] md:bottom-[4px] md:left-[5px] md:h-[181px] md:w-[182px] ml:left-[2px] ml:top-[2px] ml:h-[161px] ml:w-[162px] lg:bottom-[4px] lg:left-[5px] lg:h-[181px] lg:w-[182px]">
                <Image
                  src="/icons/counter/yellow-border.svg"
                  fill
                  sizes="100%"
                  alt="yellow border"
                />
              </div>
              <div className="absolute -top-[39px] right-[7px] h-[65px] w-[53px] md:right-[20px] md:h-[74px] md:w-[61px] ml:right-[7px] ml:h-[65px] ml:w-[53px] lg:right-[20px] lg:h-[74px] lg:w-[61px]">
                <Image
                  src="/icons/counter/yellow-party-hat.svg"
                  fill
                  sizes="100%"
                  alt="yellow party hat"
                />
              </div>
            </>
          )}
          {variant === '5' && (
            <>
              <div className="relative h-[157px] w-[162px] md:h-[180px] md:w-[187px] ml:h-[157px] ml:w-[162px] lg:h-[180px] lg:w-[187px]">
                <Image
                  src="/icons/counter/yellow-circle.svg"
                  fill
                  sizes="100%"
                  alt="yellow circle"
                />
              </div>
              <div className="absolute bottom-[4px] left-[2px] h-[156px] w-[163px] md:bottom-[2px] md:h-[182px] md:w-[191px] ml:bottom-[4px] ml:h-[156px] ml:w-[163px] lg:bottom-[2px] lg:h-[182px] lg:w-[191px]">
                <Image
                  src="/icons/counter/purple-border.svg"
                  fill
                  sizes="100%"
                  alt="purple border"
                />
              </div>
              <div className="absolute -top-[6px] right-[6px] h-[35px] w-[45px] md:-top-[13px] md:right-[29px] md:h-[44px] md:w-[56px] ml:-top-[6px] ml:right-[6px] ml:h-[35px] ml:w-[45px] lg:-top-[13px] lg:right-[29px] lg:h-[44px] lg:w-[56px]">
                <Image
                  src="/icons/counter/red-bow.svg"
                  fill
                  sizes="100%"
                  alt="purple bow"
                />
              </div>
            </>
          )}
        </div>
        <div className="absolute left-[50%] top-0 w-[121px] -translate-x-2/4 pt-5 text-center font-bold md:pt-9 ml:pt-5 lg:pt-9">
          <div className="mb-2 text-5xl leading-[1.2]">
            <CountUp
              start={0}
              end={number}
              duration={2}
              enableScrollSpy
              scrollSpyOnce={true}
            />
          </div>
          <div className="text-base leading-[1] text-textViolet">{text}</div>
        </div>
      </li>
    </>
  );
};

export default CounterItem;
