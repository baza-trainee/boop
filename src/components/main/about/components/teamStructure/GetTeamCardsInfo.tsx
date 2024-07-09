import { useTranslations } from 'next-intl';

const GetTeamCardsInfo = () => {
  const t = useTranslations('About.team_structure');
  return [
    {
      title: `${t('management_title')}`,
      text: `${t('management_text')}`,
      image: '/images/missionSection/a_girl_with_a_clown_nose.png',
    },
    {
      title: `${t('volunteers_title')}`,
      text: `${t('volunteers_text')}`,
      image: '/images/missionSection/a_girl_with_a_clown_nose.png',
    },
  ];
};

export default GetTeamCardsInfo;
