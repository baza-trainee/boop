import Image from 'next/image';
import './loader.css';

const Loader = () => {
  return (
    <div className="backdrop-brightness-10 bg-yellowTransparent fixed left-0 right-0 top-0 z-[9999] flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
      <Image
        src="/images/loader.webp"
        alt="loader"
        width={120}
        height={120}
        className="loader min-h-[118px] min-w-[121px]"
      />
    </div>
  );
};

export default Loader;
