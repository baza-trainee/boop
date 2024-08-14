import Image from 'next/image';

const DecoratedSvg = () => {
  return (
    <span className="absolute bottom-[150px] left-0 z-0 inline-block md:-left-[50px] md:bottom-0">
      <Image
        className="hidden md:inline-block"
        src="/icons/footer/desktop-icon.svg"
        width={879}
        height={550}
        alt="decorative arrow"
      />
      <Image
        className="md:hidden"
        src="/icons/footer/mobile-icon.svg"
        width="390"
        height="563"
        alt="decorative arrow"
      />
    </span>
  );
};

export default DecoratedSvg;
