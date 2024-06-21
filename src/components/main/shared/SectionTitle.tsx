import clsx from 'clsx';
import React from 'react';

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div className={clsx('flex items-center gap-[20px]', className)}>
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
