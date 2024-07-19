'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import CarouselButton from '@/components/main/shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '@/components/main/shared/carousel/Carousel';
import BlogItem from './blog-item/BlogItem';
import { blogItems } from './items';

const Blog = () => {
  const t = useTranslations('About.blog');

  return (
    <section className="mb-[120px]">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="title-gradient font-groppled text-3xl font-bold max-sm:text-[28px]">
            {t('title')}
          </h2>
          <div className="flex items-center gap-2">
            <CarouselButton className="blog-prev-el rotate-180" />
            <CarouselButton className="blog-next-el" />
          </div>
        </div>
        <Carousel
          items={blogItems}
          prevEl=".blog-prev-el"
          nextEl=".blog-next-el"
          slidesPerView={1}
          speed={500}
          renderItem={(item) => <BlogItem {...item} />}
        />
      </div>
    </section>
  );
};

export default Blog;
