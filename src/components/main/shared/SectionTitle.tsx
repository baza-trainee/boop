import clsx from 'clsx';
import React from 'react';

type SectionTitleProps = {
  title: string;
  className?: string;
  titleClassName?: string;
};

const SectionTitle = ({
  title,
  className,
  titleClassName,
}: SectionTitleProps) => {
  return (
    <div className={clsx('flex items-center gap-[20px]', className)}>
      <h2
        className={clsx(
          'title-gradient pt-2 font-groppled text-3xl font-bold max-ml:text-2xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      <svg className="h-[1rem] w-[5rem]">
        <use href="/icons/sprite.svg#title-line"></use>
      </svg>
    </div>
  );
};

export default SectionTitle;
