import clsx from 'clsx';

interface VerticalCarouselButtonProps {
  className?: string;

}

const VerticalCarouselButton = ({ className, ...props }: VerticalCarouselButtonProps) => {

  return (
    <button
      className={clsx(
        'flex h-8 w-8 items-center justify-center transition-all duration-200 ease-linear disabled:opacity-30',
        'transform rotate-90',  
        className,
      )}
      {...props}
    >
      <svg className="h-[16px] w-[11px]">
        <use href="/icons/sprite.svg#slider-arrow"></use>
      </svg>
    </button>
  );
};

export default VerticalCarouselButton;
