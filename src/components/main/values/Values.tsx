import React from 'react';

const valuesCards = [
  {
    text: 'Інклюзивність',
    icon: '/icons/sprite.svg#title-line',
    hoverText:
      'ми цінуємо кожного, незалежно від обставин, і робимо все, щоб кожен відчував себе важливим і потрібним',
  },
  {
    text: 'Проактивність',
    icon: '/icons/sprite.svg#title-line',
    hoverText:
      'ми діємо на випередження, завжди шукаючи нові способи принести радість і полегшення',
  },
  {
    text: 'Повага',
    icon: '/icons/sprite.svg#title-line',
    hoverText:
      'ми ставимося до всіх з глибокою повагою, цінуючи унікальність кожного',
  },
  {
    text: 'Щирість',
    icon: '/icons/sprite.svg#title-line',
    hoverText:
      'наші дії і слова завжди йдуть від серця, створюючи атмосферу довіри',
  },
  {
    text: 'Емпатія',
    icon: '/icons/sprite.svg#title-line',
    hoverText:
      'ми розуміємо і відчуваємо те, що відчуваєте ви, підтримуючи у найважчі моменти',
  },
];

type ValueCardProps = {
  text: string;
  icon: string;
  hoverText: string;
};

const ValueCard = ({ text, icon, hoverText }: ValueCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <p className="title-gradient p-0 font-groppled text-xl font-bold leading-none">
          {text}
        </p>
        <svg className="h-[5px] w-[25px]">
          <use href={icon}></use>
        </svg>
      </div>

      <div className="relative w-[248px] rounded-2xl border-0 border-inherit bg-bgWhite p-4 shadow-[0_2px_6px_2px_rgba(47,36,94,0.15)] before:absolute before:-inset-0 before:block before:rotate-[-1deg] before:rounded-2xl before:border-[1px] before:border-yellow">
        <p className="text-left font-raleway text-[14px] leading-[116%] text-textViolet">
          {hoverText}
        </p>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <section className=" bg-bgYellow  w-full    px-[120px]   pb-[48px] pt-[55px] ">
      <ul className="flex flex-wrap items-center justify-center gap-x-[276px]  gap-y-[-10px]">
        {valuesCards.map((el, index) => {
          return (
            <li key={index}>
              <ValueCard
                text={el.text}
                icon={el.icon}
                hoverText={el.hoverText}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Values;
