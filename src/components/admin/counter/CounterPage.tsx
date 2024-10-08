'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hook';
import {
  useGetAllNumbersQuery,
  useUpdateNumberByIdMutation,
} from '@/store/api/counterApi';

import TextInput from '../ui/TextInput';
import PageTitle from '../shared/PageTitle';
import UniversalButton from '../shared/UniversalButton';
import { openAlert } from '@/store/slices/alertSlice';
import Loader from '@/components/shared/loader/Loader';

const orderTitles: Record<number, string> = {
  1: 'Роки досвіду',
  2: 'Лікарняні клоуни',
  3: 'Виходів на місяць',
  4: 'Кількість лікарень',
  5: 'Дітей на місяць',
};

const CounterPage = () => {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetAllNumbersQuery();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const [editingItemId, setEditingItemId] = useState<number[]>([]);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [initialValues, setInitialValues] = useState<{ [key: number]: string }>(
    {}
  );
  const [updateNumber] = useUpdateNumberByIdMutation();

  const handleImageEditClick = (id: number) => {
    setEditingItemId((prevEditingItemId) =>
      prevEditingItemId.includes(id)
        ? prevEditingItemId.filter((itemId) => itemId !== id) // delete id
        : [...prevEditingItemId, id]
    );
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { value } = event.target;

    const numberValue = Number(value);
    console.log('value', value);
    console.log('numberValue', numberValue);

    let error = '';
    if (
      !Number.isInteger(numberValue) ||
      numberValue < 0 ||
      numberValue > 9999
    ) {
      error = 'Число повинно бути цілим і в діапазоні від 1 до 9999';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: error,
    }));

    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      dispatch(
        openAlert({
          data: {
            state: 'error',
            message: 'Виправте помилки перед відправкою форми.',
          },
        })
      );
      return;
    }

    try {
      setIsProcessing(true);
      const promises = Object.keys(inputValues).map((id) =>
        updateNumber({
          id: Number(id),
          number: Number(inputValues[Number(id)]),
        })
      );
      await Promise.all(promises);

      setIsDisabled(true);
      setEditingItemId([]);
      dispatch(
        openAlert({
          data: {
            state: 'success',
            message: 'Дані статистики успішно змінені!',
          },
        })
      );
    } catch (error) {
      console.error('Error updating numbers:', error);
      dispatch(
        openAlert({
          data: {
            state: 'error',
            message: 'При оновленні сталася помилка!',
          },
        })
      );
      // Restoring previous values
      // setInputValues(initialValues);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleResetClick = () => {
    setInputValues(initialValues);
    setIsDisabled(true);
    setEditingItemId([]);
    setErrors({});
  };

  useEffect(() => {
    if (data) {
      const initialValues = data.reduce(
        (acc, item) => {
          acc[item.id] = item.number.toString();
          return acc;
        },
        {} as { [key: number]: string }
      );
      setInputValues(initialValues);
      setInitialValues(initialValues);
    }
  }, [data]);

  useEffect(() => {
    if (editingItemId.length !== 0) {
      setIsDisabled(false);
    }
  }, [editingItemId]);

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[50%] w-[80%] items-center justify-center rounded-[20px] bg-slate-200 p-[40px]">
          <p className="text-center text-[32px] text-yellow">
            Сталася помилка під час завантаження даних.
            <br /> Будь ласка, спробуйте оновити сторінку або повторити спробу
            пізніше.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="h-screen pb-[159px] pl-[24px] pt-[104px]">
      <PageTitle title="Каунтер" />
      <form onSubmit={handleSubmitForm} className="w-[292px]">
        <ul className="flex flex-col gap-[20px]">
          {data?.map((item) => (
            <li className="w-[100%]" key={item.id}>
              <TextInput
                title={orderTitles[item.order]}
                titleClassName="text-[#50439F] font-[700] leading-[140%] text-xl"
                imageSize={{ width: 24, height: 24 }}
                iconClassName="translate-y-[0%]"
                isEditMode={!editingItemId.includes(item.id)}
                isRequired={false}
                readOnly={!editingItemId.includes(item.id)}
                onImageEditClick={() => handleImageEditClick(item.id)}
                value={inputValues[item.id] || ''}
                onChange={(event) => handleChange(event, item.id)}
                className={`pb-[8px] ${editingItemId.includes(item.id) ? `text-[#50439F]` : `text-[#949398]`} h-[40px] text-center font-medium`}
              />
              {errors[item.id] && (
                <p className="mt-1 text-xs text-red">{errors[item.id]}</p>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-[40px] flex w-[100%] items-center gap-[20px]">
          <UniversalButton
            type="submit"
            disabled={isDisabled}
            btnTextStyle={` text-center ${isProcessing ? 'text-sm' : 'text-lg'} font-bold leading-[100%] ${isDisabled ? `text-[#97979A]  ` : `text-white`}`}
            className={`flex h-[56px] items-center justify-center gap-2 rounded-[32px] ${isDisabled ? `bg-[#E3E3E4]` : `bg-[#E93405]`} px-[24px] py-[18px] text-white`}
          >
            {isProcessing ? 'Обробка...' : 'Змінити'}
          </UniversalButton>
          <UniversalButton
            type="button"
            onClick={handleResetClick}
            disabled={isDisabled}
            btnTextStyle={`text-center text-xl font-medium leading-[100%] ${isDisabled ? `text-[#97979A] ` : `text-[#2F245E]`}`}
            className={`flex h-[56px] items-center justify-center gap-2 rounded-[32px] border-2 px-[24px] py-[18px] ${isDisabled ? `border-[#E3E3E4]` : `border-[#FFAB0B]`} px-[24px] py-[18px]`}
          >
            Скасувати
          </UniversalButton>
        </div>
      </form>
    </section>
  );
};

export default CounterPage;
