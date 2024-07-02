import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  href?: string;
  onClick: () => void;
  rest?: string;

}

const Logo: React.FC<LogoProps> = ({onClick, ...rest}) => {
  return (
    <button onClick={onClick} style={{ cursor: 'pointer' }} {...rest}>
    <Image
    src="/images/logo.svg"
    alt="logo"
    width={93}
    height={54}
  />
  </button>
    
  );
};

export default Logo;