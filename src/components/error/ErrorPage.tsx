import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const t = useTranslations('errorpage');

  return (
    <main
      className="flex h-screen flex-col items-center justify-center gap-4 bg-bgWhite bg-[url('/icons/404/footprints.png')] bg-[length:926px_873px] bg-right-bottom bg-no-repeat px-10 pt-[30px] 3xl:pb-[72px] 3xl:pt-[120px]"
      role="main"
    >
      <Image
        src="/icons/404/404.svg"
        alt="404 error illustration with clown character"
        width={200}
        height={200}
        className="px-3 max-md:max-w-[135px] md:px-7"
        aria-describedby="error-description"
      />
      <p
        id="error-description"
        className="mb-[65px] flex items-center justify-center text-center font-groppled text-[20px] font-bold leading-[1.55] text-yellow md:text-[30px]"
      >
        {t('paragraph_1')}
        <br /> {t('paragraph_2')}
      </p>
      <button
        onClick={reset}
        className="h-[54px] min-w-[272px] whitespace-nowrap rounded-[32px] bg-red px-4 py-2 font-raleway text-[20px] font-bold text-white"
        aria-label={t('button')}
      >
        {t('button')}
      </button>
    </main>
  );
};

export default ErrorPage;
