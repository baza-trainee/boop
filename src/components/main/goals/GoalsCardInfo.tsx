import { useTranslations } from 'next-intl';

const GetGoalsCardsInfo = () => {
  const t = useTranslations('Goals');
  return [
    {
      cardNumber: `${t('first.cardNumber')}`,
      text: `${t('first.text')}`,
    },
    {
      cardNumber: `${t('second.cardNumber')}`,
      text: `${t('second.text')}`,
    },
    {
      cardNumber: `${t('third.cardNumber')}`,
      text: `${t('third.text')}`,
    },
    {
      cardNumber: `${t('fourth.cardNumber')}`,
      text: `${t('fourth.text')}`,
    },
  ];
};

export default GetGoalsCardsInfo;
