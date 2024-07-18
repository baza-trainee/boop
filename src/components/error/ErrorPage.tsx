import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const t = useTranslations('errorpage');
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-bgWhite  bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-right-bottom bg-no-repeat px-10 pt-[30px] 3xl:pb-[72px] 3xl:pt-[120px]">
      <Image
        src="/icons/404/404.svg"
        alt="Clown"
        width={200}
        height={200}
        className="px-3 max-md:max-w-[135px] md:px-7"
      />
      <p className="mb-[65px] flex items-center items-baseline justify-center text-center font-groppled text-[20px] font-bold leading-[1.55] text-yellow md:text-[30px]">
        {t('paragraph_1')}
        <br /> {t('paragraph_2')}
      </p>
      <button
        onClick={reset}
        className="h-[54px] min-w-[272px] whitespace-nowrap rounded-[32px] bg-red px-4 py-2 font-raleway text-[20px] font-bold text-white"
      >
        {t('button')}
      </button>
    </div>
  );
};

export default ErrorPage;
