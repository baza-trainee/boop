import { useTranslations } from 'next-intl';

const GetValuesCardsInfo = () => {
  const t = useTranslations('Values');
  return [
    {
      text: `${t('inclusivity.text')}`,
      icon: '/icons/values/red-hat.svg',
      width: 46,
      height: 64,
      hoverText: `${t('inclusivity.hoverText')}`,
    },
    {
      text: `${t('proactivity.text')}`,
      icon: '/icons/values/red-cap.svg',
      width: 73,
      height: 48,
      hoverText: `${t('proactivity.hoverText')}`,
    },
    {
      text: `${t('respect.text')}`,
      icon: '/icons/values/yellow-triangulars.svg',
      width: 64,
      height: 50,
      hoverText: `${t('respect.hoverText')}`,
    },
    {
      text: `${t('sincerity.text')}`,
      icon: '/icons/values/bow-ties.png',
      width: 89,
      height: 49,
      hoverText: `${t('sincerity.hoverText')}`,
    },

    {
      text: `${t('empathy.text')}`,
      icon: '/icons/values/blue-hat.svg',
      width: 45,
      height: 65,
      hoverText: `${t('empathy.hoverText')}`,
    },
  ];
};

export default GetValuesCardsInfo;
