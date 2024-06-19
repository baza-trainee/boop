import { useTranslations } from 'next-intl';

const valuesCardsInfo = () => {
  const t = useTranslations('Values');
  return [
    {
      text: `${t('inclusivity.text')}`,
      icon: '/icons/sprite.svg#red-hat',
      height: '64px',
      width: '45px',
      hoverText: `${t('inclusivity.hoverText')}`,
    },
    {
      text: `${t('proactivity.text')}`,
      icon: '/icons/sprite.svg#red-cap',
      height: '48px',
      width: '72px',
      hoverText: `${t('proactivity.hoverText')}`,
    },
    {
      text: `${t('respect.text')}`,
      icon: '/icons/sprite.svg#yellow-triangulars',
      width: '64px',
      height: '50px',
      hoverText: `${t('respect.hoverText')}`,
    },
    {
      text: `${t('sincerity.text')}`,
      icon: '/icons/sprite.svg#bow-ties',
      width: '89px',
      height: '48px',
      hoverText: `${t('sincerity.hoverText')}`,
    },
    {
      text: `${t('empathy.text')}`,
      icon: '/icons/sprite.svg#blue-hat',
      width: '45px',
      height: '64px',
      hoverText: `${t('empathy.hoverText')}`,
    },
  ];
};

export default valuesCardsInfo;
