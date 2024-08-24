'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useGetAllPostsQuery } from '@/store/api/blogApi';
import CarouselButton from '@/components/main/shared/carousel/carousel-button/CarouselButton';
import { Carousel } from '@/components/main/shared/carousel/Carousel';
import BlogItem from './blog-item/BlogItem';

const Blog = () => {
  const t = useTranslations('About.blog');
  const { locale } = useParams();
  const { data: blogItems, isFetching, isError } = useGetAllPostsQuery();

  if (!blogItems) return;
  return (
    <section className="mb-[120px]">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between gap-5">
          <h2 className="title-gradient pt-2 font-groppled text-3xl font-bold max-sm:text-[28px]">
            {t('title')}
          </h2>
          {blogItems.data.length > 1 && (
            <div className="flex items-center gap-2">
              <CarouselButton className="blog-prev-el rotate-180" />
              <CarouselButton className="blog-next-el" />
            </div>
          )}
        </div>
        {blogItems && !isError && !isFetching && (
          <Carousel
            items={blogItems.data}
            prevEl=".blog-prev-el"
            nextEl=".blog-next-el"
            slidesPerView={1}
            speed={500}
            renderItem={(item) => (
              <BlogItem
                imgSrc={item.imageUrl}
                title={
                  locale === 'ua'
                    ? item.titleUA
                    : locale === 'en'
                      ? item.titleEN
                      : item.titleIT
                }
                text={
                  locale === 'ua'
                    ? item.textUA
                    : locale === 'en'
                      ? item.textEN
                      : item.textIT
                }
                date={item.createdAt}
              />
            )}
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
