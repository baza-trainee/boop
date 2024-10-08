import { useTranslations } from 'next-intl';

const GetMissionCardsInfo = () => {
  const t = useTranslations('Mission');
  return [
    {
      image: '/images/missionSection/a_boy_in_a_mask.webp',
      text: `${t('first.text')}`,
      cardGradient: `var(--blueCardGradient)`,
      overlayGradient: `var(--blueOverlayGradient)`,
      hoverText: `${t('first.hoverText')}`,
    },
    {
      image: '/images/missionSection/a_girl_with_a_clown_nose.webp',
      text: `${t('second.text')}`,
      cardGradient: `var(--redCardGradient)`,
      overlayGradient: `var(--redOverlayGradient)`,
      hoverText: `${t('second.hoverText')}`,
    },
    {
      image: '/images/missionSection/a_girl_plays_with_a_toy_bear.webp',
      text: `${t('third.text')}`,
      cardGradient: `var(--yellowCardGradient)`,
      overlayGradient: `var(--yellowOverlayGradient)`,
      hoverText: `${t('third.hoverText')}`,
    },
  ];
};

export default GetMissionCardsInfo;
