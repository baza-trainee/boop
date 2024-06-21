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
      <li className="font-groppleds relative h-[183px] first:text-violet last:text-violet">
        <div className="relative">
          {variant === '1' && (
            <>
              <div className="h-[180px] w-[187px]">
                <Image
                  src="/icons/counter/yellow-circle.svg"
                  fill
                  sizes="100%"
                  alt="yellow circle"
                />
              </div>
              <div className="absolute bottom-[2px] left-[2px] h-[182px] w-[191px]">
                <Image
                  src="/icons/counter/purple-border.svg"
                  fill
                  sizes="100%"
                  alt="purple border"
                />
              </div>
              <div className="absolute -top-[23px] right-[42px] h-[62px] w-[56px]">
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
              <div className="h-[179px] w-[180px]">
                <Image
                  src="/icons/counter/red-circle.svg"
                  fill
                  sizes="100%"
                  alt="red circle"
                />
              </div>
              <div className="absolute bottom-[4px] left-[5px] h-[181px] w-[182px]">
                <Image
                  src="/icons/counter/yellow-border.svg"
                  fill
                  sizes="100%"
                  alt="yellow border"
                />
              </div>
              <div className="absolute -top-[39px] left-[4px] h-[74px] w-[60px]">
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
              <div className="h-[173px] w-[180px]">
                <Image
                  src="/icons/counter/purple-circle.svg"
                  fill
                  sizes="100%"
                  alt="purple circle"
                />
              </div>
              <div className="absolute bottom-[4px] right-[4px] h-[175px] w-[182px]">
                <Image
                  src="/icons/counter/red-border.svg"
                  fill
                  sizes="100%"
                  alt="red border"
                />
              </div>
              <div className="absolute -top-[36px] right-[11px] h-[78px] w-[95px]">
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
              <div className="h-[179px] w-[180px]">
                <Image
                  src="/icons/counter/red-circle.svg"
                  fill
                  sizes="100%"
                  alt="red circle"
                />
              </div>
              <div className="absolute bottom-[4px] left-[5px] h-[181px] w-[182px]">
                <Image
                  src="/icons/counter/yellow-border.svg"
                  fill
                  sizes="100%"
                  alt="yellow border"
                />
              </div>
              <div className="absolute -top-[39px] right-[20px] h-[74px] w-[61px]">
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
              <svg className="absolute -top-[13px] right-[29px] h-[44px] w-[56px]">
                <use href="/icons/sprite.svg#bow-red"></use>
              </svg>
              <div className="h-[180px] w-[187px]">
                <Image
                  src="/icons/counter/yellow-circle.svg"
                  fill
                  sizes="100%"
                  alt="yellow circle"
                />
              </div>
              <div className="absolute bottom-[2px] left-[2px] h-[182px] w-[191px]">
                <Image
                  src="/icons/counter/purple-border.svg"
                  fill
                  sizes="100%"
                  alt="purple border"
                />
              </div>
              <div className="absolute -top-[13px] right-[29px] h-[44px] w-[56px]">
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
        <div className="absolute left-[50%] top-0 w-[143px] -translate-x-2/4 pt-9 text-center font-bold">
          <div className="mb-2 text-5xl leading-[1.2]">
            <CountUp
              start={0}
              end={number}
              duration={3}
              enableScrollSpy
              scrollSpyOnce={true}
            />
          </div>
          <div className="text-xl leading-[1] text-textViolet">{text}</div>
        </div>
      </li>
    </>
  );
};

export default CounterItem;
