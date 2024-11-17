import { useLocale, useTranslations } from 'next-intl';

import FirstRuleCard from './components/FirstRuleCard';
import SecondRuleCard from './components/SecondRuleCard';
import ThirdRuleCard from './components/ThirdRuleCard';
import AboutLogo from './components/AboutLogo';
import AnimatedOrangeMan from './components/AnimatedOrangeMan';
import clsx from 'clsx';

const MainRules = () => {
  const t = useTranslations('About.main_rules');
  const locale = useLocale();
  const isUkr = locale === 'ua';
  const isIt = locale === 'it';

  return (
    <section className="mx-auto mb-[70px] flex w-full max-w-screen-3xl flex-col gap-[50px] whitespace-pre-line px-[20px] pt-10 md:mb-[100px] md:gap-[70px] md:px-[40px] ml:px-[64px] xl:mb-[120px] xl:px-[80px] 2xl:px-[120px]">
      <AboutLogo text={t('title')} isUkr={isUkr} isIt={isIt} />
      <div className="relative flex flex-col gap-6 font-raleway text-[16px] leading-[150%] text-textViolet md:h-[720px] md:flex-row md:items-start md:justify-between md:text-lg ml:h-fit ml:leading-normal lg:text-xl">
        <FirstRuleCard text={t('rules.paragraph_1')} isIt={isIt} />
        <div className="flex flex-col gap-6 md:gap-4 ml:flex-1 ml:gap-6">
          <SecondRuleCard text={t('rules.paragraph_2')} />
          <ThirdRuleCard text={t('rules.paragraph_3')} />
        </div>
        <AnimatedOrangeMan
          className={clsx(
            'absolute bottom-0 left-[75px] cursor-pointer ml:block',
            { 'hidden': !isIt }
          )}
        />
      </div>
    </section>
  );
};

export default MainRules;
