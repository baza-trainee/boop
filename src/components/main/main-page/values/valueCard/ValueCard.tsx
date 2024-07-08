import Image from 'next/image';

type ValueCardProps = {
  card: {
    text: string;
    icon: string;
    hoverText: string;
    height: number;
    width: number;
  };
  index: number;
};

const ValueCard = ({
  card: { text, icon, hoverText, height, width },
  index,
}: ValueCardProps) => {
  return (
    // <div
    //   className={`group relative flex h-[64px]  cursor-pointer flex-col justify-end gap-2 ${index % 2 ? `top-[100px]` : ``}`}
    // >
    //   <div
    //     className={`flex items-end gap-4 pb-2 ${index === 1 || index === 4 ? `flex-row-reverse justify-end` : index === 3 ? `justify-center` : ``}`}
    //   >
    //     <p className="title-gradient p-0 pb-2 font-groppled text-xl font-bold leading-none">
    //       {text}
    //     </p>

    //     <Image src={icon} alt="" width={width} height={height} />
    //   </div>

    //   <div className="absolute top-[100%] w-[248px] rounded-2xl border-0 border-inherit bg-bgWhite p-4 opacity-0 shadow-[0_2px_6px_2px_rgba(47,36,94,0.15)] transition-opacity duration-[600ms] ease-in-out before:absolute before:inset-0 before:left-0 before:block before:h-[calc(100%-1px)]    before:origin-top-right before:rotate-[-1deg] before:rounded-2xl before:border-[1px] before:border-yellow before:content-[''] group-hover:opacity-100">
    //     <p className="text-left font-raleway text-[14px] font-normal leading-[116%] text-textViolet">
    //       {hoverText}
    //     </p>
    //   </div>
    // </div>
    <div
      className={`group relative flex h-[64px] w-full cursor-pointer flex-col justify-end gap-2 md:w-auto ml:${index % 2 ? `ml:top-[100px]` : ``} `}
    >
      <div
        className={`flex flex-row items-end justify-end gap-4 pb-2 ${index === 0 ? `flex-row-reverse justify-start  md:flex-row` : index === 3 ? `flex-row-reverse justify-start ml:relative ml:-right-12 xl:right-0` : index === 4 ? `relative left-[50px] flex-row-reverse justify-start md:static md:flex-row xl:relative xl:left-[80px]` : index === 2 ? 'md:flex-row-reverse' : ``} `}
      >
        <p className="title-gradient p-0 pb-2 font-groppled text-xl font-bold leading-none 4xl:text-[28px] ">
          {text}
        </p>

        <Image src={icon} alt="" width={width} height={height} />
      </div>

      <div
        className={`  absolute  top-[100%] ${index === 4 ? 'md:right-[-10px] ml:-right-1/2' : ''} w-[248px] rounded-2xl border-0 border-inherit bg-bgWhite p-4 opacity-0 shadow-[0_2px_6px_2px_rgba(47,36,94,0.15)] transition-opacity duration-[600ms] ease-in-out before:absolute before:inset-0 before:left-0 before:block before:h-[calc(100%-1px)]    before:origin-top-right before:rotate-[-1deg] before:rounded-2xl before:border-[1px] before:border-yellow before:content-[''] group-hover:opacity-100 ml:z-[2] ${index === 1 || index === 2 ? `xs:self-end md:self-auto` : ''}${index === 2 ? ' ml:-right-[20px] ml:w-[217px] lg:w-[248px]' : ''}${index === 0 ? ' ml:right-0 ml:w-[248px] lg:w-[248px]' : ''}`}
      >
        <p className="text-left font-raleway text-[14px] font-normal leading-[116%]  text-textViolet">
          {hoverText}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
