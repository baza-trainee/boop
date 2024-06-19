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
              <svg className="h-[180px] w-[187px]">
                <use href="/icons/sprite.svg#counter-circle-yellow"></use>
              </svg>
              <svg className="absolute bottom-[2px] left-[2px] h-[182px] w-[191px]">
                <use href="/icons/sprite.svg#counter-border-violet"></use>
              </svg>
              <svg className="absolute -top-[23px] right-[42px] h-[62px] w-[56px]">
                <use href="/icons/sprite.svg#bow-violet"></use>
              </svg>
            </>
          )}
          {variant === '2' && (
            <>
              <svg className="h-[179px] w-[180px]">
                <use href="/icons/sprite.svg#counter-circle-red"></use>
              </svg>
              <svg className="absolute bottom-[4px] left-[5px] h-[181px] w-[182px]">
                <use href="/icons/sprite.svg#counter-border-yellow"></use>
              </svg>
              <svg className="absolute -top-[39px] left-[4px] h-[74px] w-[60px]">
                <use href="/icons/sprite.svg#party-hat-violet"></use>
              </svg>
            </>
          )}
          {variant === '3' && (
            <>
              <svg className="h-[173px] w-[180px]">
                <use href="/icons/sprite.svg#counter-circle-violet"></use>
              </svg>
              <svg className="absolute bottom-[4px] right-[4px] h-[175px] w-[182px]">
                <use href="/icons/sprite.svg#counter-border-red"></use>
              </svg>
              <svg className="absolute -top-[36px] right-[11px] h-[78px] w-[95px]">
                <use href="/icons/sprite.svg#cap"></use>
              </svg>
            </>
          )}
          {variant === '4' && (
            <>
              <svg className="h-[179px] w-[180px]">
                <use href="/icons/sprite.svg#counter-circle-red"></use>
              </svg>
              <svg className="absolute bottom-[4px] left-[5px] h-[181px] w-[182px]">
                <use href="/icons/sprite.svg#counter-border-yellow"></use>
              </svg>
              <svg className="absolute -top-[39px] right-[20px] h-[74px] w-[61px]">
                <use href="/icons/sprite.svg#party-hat-yellow"></use>
              </svg>
            </>
          )}
          {variant === '5' && (
            <>
              <svg className="h-[180px] w-[187px]">
                <use href="/icons/sprite.svg#counter-circle-yellow"></use>
              </svg>
              <svg className="absolute bottom-[2px] left-[2px] h-[182px] w-[191px]">
                <use href="/icons/sprite.svg#counter-border-violet"></use>
              </svg>
              <svg className="absolute -top-[13px] right-[29px] h-[44px] w-[56px]">
                <use href="/icons/sprite.svg#bow-red"></use>
              </svg>
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
