import clsx from 'clsx';
import { useCallback, type ReactNode } from 'react';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';

export interface CarouselProps<T> extends SwiperProps {
  items: T[] | undefined;
  renderItem: (item: T, i: number) => ReactNode;
  className?: string;
  slideClassName?: string;
  nextEl: string;
  prevEl: string;
}

export const Carousel = <T, _>({
  items,
  renderItem,
  className,
  slideClassName,
  modules,
  nextEl,
  prevEl,
  ...options
}: CarouselProps<T>) => {
  const renderSlides = useCallback(
    (_items: typeof items) =>
      _items?.map((item, i) => (
        <SwiperSlide className={slideClassName} key={i}>
          {renderItem(item, i)}
        </SwiperSlide>
      )),
    [slideClassName, renderItem]
  );

  const swiperOptions: SwiperOptions = {
    spaceBetween: 15,
    ...options,
  };

  const DEFAULT_MODULES = [Navigation];

  return (
    <Swiper
      className={clsx('slider', className)}
      modules={[...(modules ?? DEFAULT_MODULES)]}
      navigation={{
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      {...swiperOptions}
    >
      {renderSlides(items)}
    </Swiper>
  );
};
