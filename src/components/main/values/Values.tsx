import React from 'react';

const valuesCards = [
  {
    text: 'Інклюзивність',
    icon: '/icons/sprite.svg#red-hat',
    hoverText:
      'ми цінуємо кожного, незалежно від обставин, і робимо все, щоб кожен відчував себе важливим і потрібним',
  },
  {
    text: 'Проактивність',
    icon: '/icons/sprite.svg#red-cap',
    hoverText:
      'ми діємо на випередження, завжди шукаючи нові способи принести радість і полегшення',
  },
  {
    text: 'Повага',
    icon: '/icons/sprite.svg#yellow-triangulars',
    hoverText:
      'ми ставимося до всіх з глибокою повагою, цінуючи унікальність кожного',
  },
  {
    text: 'Щирість',
    icon: '/icons/sprite.svg#bow-ties',
    hoverText:
      'наші дії і слова завжди йдуть від серця, створюючи атмосферу довіри',
  },
  {
    text: 'Емпатія',
    icon: '/icons/sprite.svg#blue-hat',
    hoverText:
      'ми розуміємо і відчуваємо те, що відчуваєте ви, підтримуючи у найважчі моменти',
  },
];

type ValueCardProps = {
  text: string;
  icon: string;
  hoverText: string;
  index: number;
};

const ValueCard = ({ text, icon, hoverText, index }: ValueCardProps) => {
  return (
    <div className="group relative flex w-[251px] cursor-pointer flex-col gap-2">
      <div
        className={`flex items-end gap-4 pb-2 ${index === 2 || index === 3 ? `flex-row-reverse justify-end` : ``}`}
      >
        <p className="title-gradient p-0 font-groppled text-xl font-bold leading-none">
          {text}
        </p>
        <svg className="h-[64px] w-[74px]">
          <use href={icon}></use>
        </svg>
      </div>

      <div className="invisible absolute top-[100%] w-[248px] rounded-2xl border-0 border-inherit bg-bgWhite p-4 shadow-[0_2px_6px_2px_rgba(47,36,94,0.15)] before:absolute before:-inset-0 before:block before:rotate-[-1deg] before:rounded-2xl before:border-[1px] before:border-yellow group-hover:visible ">
        <p className="text-left font-raleway text-[14px] leading-[116%] text-textViolet">
          {hoverText}
        </p>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <section className=" w-full  bg-bgYellow    px-[120px]   pb-[96px] pt-[55px] ">
      <ul className="flex flex-wrap items-center justify-center gap-x-[271px]  gap-y-12">
        {valuesCards.map((el, index) => {
          return (
            <li key={index}>
              <ValueCard
                text={el.text}
                icon={el.icon}
                hoverText={el.hoverText}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Values;
