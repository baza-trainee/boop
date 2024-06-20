import clsx from 'clsx';

interface CarouselButtonProps {
  className?: string;
}

const CarouselButton = ({ className, ...props }: CarouselButtonProps) => {
  return (
    <button
      className={clsx(
        'transi flex h-8 w-8 items-center justify-center transition-all duration-200 ease-linear disabled:opacity-30',
        className
      )}
      {...props}
    >
      <svg className="h-[16px] w-[11px]">
        <use href="/icons/sprite.svg#slider-arrow"></use>
      </svg>
    </button>
  );
};

export default CarouselButton;
