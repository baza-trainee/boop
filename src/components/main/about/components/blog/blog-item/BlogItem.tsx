import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import BlogItemText from './blog-item-text/BlogItemText';
import { useFormatDate } from '@/hooks/useFormatDate';

interface BlogItemProps {
  imgSrc: string;
  title: string;
  text: string;
  date: Date;
}

const BlogItem = ({ imgSrc, title, text, date }: BlogItemProps) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 825px)',
  });

  const formattedDate = useFormatDate(date, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <article className="ml:pl-[100px] xl:pl-[110px] 3xl:pl-[140px]" aria-labelledby={`blog-item-${title}`}>
      <div className="flex justify-between gap-[24px]">
        <div className="flex max-w-[540px] flex-col gap-12 max-3xl:max-w-[528px] max-xl:max-w-[488px] max-xl:gap-8 max-ml:max-w-[460px] max-md:max-w-none max-md:gap-[24px]">
          <div className="flex items-center gap-[20px]">
            <svg className="h-[1rem] w-[5rem]" aria-hidden="true">
              <use href="/icons/sprite.svg#title-line"></use>
            </svg>
            <h3 id={`blog-item-${title}`} className="pt-2 font-groppled text-[20px] font-bold leading-[1.32] text-textViolet max-sm:text-[18px]">
              {title}
            </h3>
          </div>
          <BlogItemText text={text} />
          <span className="self-end font-medium leading-[1.32] text-lightViolet max-md:hidden max-custom:block" aria-live="polite">
            {formattedDate}
          </span>
        </div>
        <div
          className={clsx(
            'relative h-[640px] w-[540px] flex-shrink-0 max-4xl:h-[490px] max-4xl:w-[416px] max-xl:h-[455px] max-xl:w-[386px] max-ml:h-[420px] max-ml:w-[360px] max-custom:hidden',
            isTablet && 'max-ml:h-[380px] max-ml:w-[240px]'
          )}
        >
          <Image
            className="bg-red object-contain"
            src={imgSrc}
            fill
            sizes="100%"
            alt={title || 'Blog post image'} // Ensure this alt text is meaningful
          />
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
