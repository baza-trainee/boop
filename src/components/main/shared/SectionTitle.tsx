import React from 'react';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-[20px]">
      <h2 className="title-gradient font-groppled text-3xl font-bold">
        {title}
      </h2>
      <svg className="h-[1rem] w-[5rem]">
        <use href="/icons/sprite.svg#title-line"></use>
      </svg>
    </div>
  );
};

export default SectionTitle;
