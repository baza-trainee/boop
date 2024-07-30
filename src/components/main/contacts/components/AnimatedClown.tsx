import React, { useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface AnimatedClownProps {
  className?: string;
}

const AnimatedClown: React.FC<AnimatedClownProps> = ({ className }) => {
  const [showFirstSvg, setShowFirstSvg] = useState(true);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setShowFirstSvg(false);

      const blinkDelay = setTimeout(() => {
        setShowFirstSvg(true);
      }, 1500);

      return () => clearTimeout(blinkDelay);
    }, 1500);

    return () => {
      clearTimeout(initialDelay);
    };
  }, []);

  const style: CSSProperties = { transition: 'opacity 0s' };

  return (
    <div className={`w-[260px] h-[192px] ${className}`}>
      <div
        className={classNames('absolute inset-0', {
          'opacity-100': showFirstSvg,
          'opacity-0': !showFirstSvg,
        })}
        style={style}
      >
        <Image
          src="/images/blue-clown.svg"
          alt="Clown"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={classNames('absolute inset-0', {
          'opacity-100': !showFirstSvg,
          'opacity-0': showFirstSvg,
        })}
        style={style}
      >
        <Image
          src="/images/blue-clown-animation.svg"
          alt="Clown"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default AnimatedClown;
