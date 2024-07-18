import { useFormatter } from 'next-intl';

type TFormatOptions = {
  year: '2-digit' | 'numeric';
  month: '2-digit' | 'numeric' | 'narrow' | 'long' | 'short';
  day: '2-digit' | 'numeric';
};

export const useFormatDate = (
  date: string | number | Date,
  options: TFormatOptions
) => {
  const format = useFormatter();
  const newDate = new Date(date);

  return format.dateTime(newDate, options);
};
