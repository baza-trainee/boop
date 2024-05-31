import Image from 'next/image';

const MainPage = () => {
  return (
    <div className="flex min-h-[100vh] w-full items-center justify-center">
      <Image
        src="/images/pennywise.jpg"
        alt="pennywise"
        width={1000}
        height={500}
      />
    </div>
  );
};

export default MainPage;
