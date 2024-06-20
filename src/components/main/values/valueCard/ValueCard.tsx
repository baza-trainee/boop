type ValueCardProps = {
  card: {
    text: string;
    icon: string;
    hoverText: string;
    height: string;
    width: string;
  };
  index: number;
};

const ValueCard = ({
  card: { text, icon, hoverText, height, width },
  index,
}: ValueCardProps) => {
  return (
    <div className="group relative flex w-[251px] cursor-pointer flex-col gap-2">
      <div
        className={`flex items-end gap-4 pb-2 ${index === 2 || index === 3 ? `flex-row-reverse justify-end` : ``}`}
      >
        <p className="title-gradient p-0 pb-2 font-groppled text-xl font-bold leading-none">
          {text}
        </p>
        <svg style={{ height: height, width: width }}>
          <use href={icon}></use>
        </svg>
      </div>

      <div className="absolute top-[100%] w-[248px] rounded-2xl border-0 border-inherit bg-bgWhite p-4 opacity-0 shadow-[0_2px_6px_2px_rgba(47,36,94,0.15)] transition-opacity duration-[600ms] ease-in-out before:absolute before:-inset-0 before:block before:rotate-[-1deg] before:rounded-2xl before:border-[1px] before:border-yellow group-hover:opacity-100">
        <p className="text-left font-raleway text-[14px] leading-[116%] text-textViolet">
          {hoverText}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
