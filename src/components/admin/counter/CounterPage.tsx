'use client';
import { useGetAllNumbersQuery } from '@/store/api/counterApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextInput from '../ui/TextInput';
import PageTitle from '../shared/PageTitle';

const orderTitles: Record<number, string> = {
  1: 'Роки досвіду',
  2: 'Лікарняні клоуни',
  3: 'Виходів на місяць',
  4: 'Кількість лікарень',
  5: 'Дітей на місяць',
};

const CounterPage = () => {
  const { data, isError, isLoading } = useGetAllNumbersQuery();
  console.log('data-counter', data);
  return (
    <section className=" h-screen  pb-[159px] pl-[24px] pt-[104px]">
      <PageTitle title="Каунтер" />
      <form className=" w-[50%] ">
        <ul className="flex flex-col gap-[20px]">
          {data?.map((item) => (
            <li className="w-[100%]" key={item.id}>
              <TextInput
                title={orderTitles[item.order]}
                titleClassName="text-[#50439F] font-[700] leading-[140%] text-xl"
                imageSize={{ width: 24, height: 24 }}
                iconClassName="translate-y-[0%]"
                isRequired={false}
                isEditMode={true}
                value={item.number}
                //   onChange={(e) => handleChange(e, item.id)}

                className="h-[40px] text-center font-medium text-[#949398] "
              />
            </li>
          ))}
        </ul>
      </form>
    </section>
  );
};

export default CounterPage;
