import { useTranslations } from 'next-intl';

const GetGoalsCardsInfo = () => {
  const t = useTranslations('Goals');
  return [
    {
      // cardNumber: `${t('first.cardNumber')}`,
      cardNumber: `/images/goalSection/1.svg`,
      width: 25,
      height: 101,
      text: `${t('first.text')}`,
    },
    {
      // cardNumber: `${t('second.cardNumber')}`,
      cardNumber: `/images/goalSection/2.svg`,
      width: 66,
      height: 103,
      text: `${t('second.text')}`,
    },
    {
      // cardNumber: `${t('third.cardNumber')}`,
      cardNumber: `/images/goalSection/3.svg`,
      width: 66,
      height: 103,
      text: `${t('third.text')}`,
    },
    {
      // cardNumber: `${t('fourth.cardNumber')}`,
      cardNumber: `/images/goalSection/4.svg`,
      width: 71,
      height: 101,
      text: `${t('fourth.text')}`,
    },
  ];
};

export default GetGoalsCardsInfo;
