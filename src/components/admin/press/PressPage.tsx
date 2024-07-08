'use client';
import React from 'react';
import { useAppDispatch } from '@/store/hook';
import { useGetAllPressQuery } from '@/store/api/pressApi';
import { INews } from '@/types/news';
import { openModal } from '@/store/slices/modalSlice';
import PageTitle from '../shared/PageTitle';
import Image from 'next/image';
import ActionButtonProps from './ActionPressButtons';
import FormModal from '../shared/FormModal';

const placeHolderImg = `/images/mainRules/image_1.png`;

const truncateText = (text: string, maxChars: number): string => {
  const truncatedText =
    text.length > maxChars ? text.substring(0, maxChars) + '...' : text;
  return truncatedText;
};
const PressPage = () => {
  const dispatch = useAppDispatch();
  const { data: news, isError, isLoading } = useGetAllPressQuery();
  console.log('news', news);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  // if (!press || !press.data) {
  //   return <div>No data available</div>;
  // }
  return (
    <section className="pb-[91px] pl-[24px] pt-[104px]">
      <PageTitle title="Преса про нас" />
      <div className="flex flex-wrap gap-[24px] ">
        <div className="flex h-[290px] w-[306px] flex-col items-center bg-bgViolet px-[80px] py-[92px]">
          <span className="mb-[8px]">Додати новину</span>
          <button onClick={() => dispatch(openModal({ type: 'add-news' }))}>
            <Image
              src="/images/add.svg"
              alt="add news"
              width={70}
              height={70}
            />
          </button>
        </div>
        {news &&
          news?.data.map((item: INews) => (
            <div key={item.id} className="relative h-[290px] w-[306px]">
              <div className="h-[111px] w-[100%] overflow-hidden  border border-b-0 border-[#E5E5E5] object-cover">
                <Image
                  src={placeHolderImg}
                  alt={item.location}
                  width={306}
                  height={150}
                />
              </div>
              <div className=" bg-white p-[8px]  ">
                <h2 className=" mb-[4px] text-[16px] font-bold leading-[150%] text-textViolet ">
                  {truncateText(item.titleUA, 65)}
                </h2>
                <p className="text-[16px] font-normal leading-[132%] text-textViolet ">
                  {truncateText(item.textUA, 103)}
                </p>
              </div>

              <ActionButtonProps action="all" width="w-[306px]" />
            </div>
          ))}
      </div>
      {/* <FormModal type="add-news">
        <p>Add News!!!</p>
      </FormModal> */}
    </section>
  );
};

export default PressPage;
