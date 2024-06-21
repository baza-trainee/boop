import { useTranslations } from 'next-intl';

const GetMissionCardsInfo = () => {
  const t = useTranslations('Mission');
  return [
    {
      image: '/images/missionSection/a_boy_in_a_mask.png',
      text: `${t('first.text')}`,
      cardGradient: `var(--blueCardGradient)`,
      overlayGradient: `var(--blueOverlayGradient)`,
      hoverText: `${t('first.hoverText')}`,
    },
    {
      image: '/images/missionSection/a_girl_with_a_clown_nose.png',
      text: `${t('second.text')}`,
      cardGradient: `var(--redCardGradient)`,
      overlayGradient: `var(--redOverlayGradient)`,
      hoverText: `${t('first.hoverText')}`,
    },
    {
      image: '/images/missionSection/a_girl_plays_with_a_toy_bear.png',
      text: `${t('third.text')}`,
      cardGradient: `var(--yellowCardGradient)`,
      overlayGradient: `var(--yellowOverlayGradient)`,
      hoverText: `${t('first.hoverText')}`,
    },
  ];
};

export default GetMissionCardsInfo;
