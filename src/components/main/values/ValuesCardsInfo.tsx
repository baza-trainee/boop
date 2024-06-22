import { useTranslations } from 'next-intl';

const GetValuesCardsInfo = () => {
  const t = useTranslations('Values');
  return [
    {
      text: `${t('inclusivity.text')}`,
      icon: '/icons/values/red-hat.svg',
      height: 64,
      width: 45,
      hoverText: `${t('inclusivity.hoverText')}`,
    },
    {
      text: `${t('sincerity.text')}`,
      icon: '/icons/values/bow-ties.png',
      width: 89,
      height: 49,
      hoverText: `${t('sincerity.hoverText')}`,
    },
    {
      text: `${t('proactivity.text')}`,
      icon: '/icons/values/red-cap.svg',
      height: 48,
      width: 72,
      hoverText: `${t('proactivity.hoverText')}`,
    },
    {
      text: `${t('empathy.text')}`,
      icon: '/icons/values/blue-hat.svg',
      width: 45,
      height: 64,
      hoverText: `${t('empathy.hoverText')}`,
    },
    {
      text: `${t('respect.text')}`,
      icon: '/icons/values/yellow-triangulars.svg',
      width: 64,
      height: 50,
      hoverText: `${t('respect.hoverText')}`,
    },
  ];
};

export default GetValuesCardsInfo;
