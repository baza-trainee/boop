import { motion } from 'framer-motion';
import Image from 'next/image';

const div1Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, 380, 600, 0],
    y: [0, 390, -150, 0],
    transition: {
      duration: 8,
      ease: 'backOut',
      times: [0, 0.33, 0.67, 1],
    },
  },
};

const div2Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, 196, -470, 0],
    y: [0, -551, -390, 0],
    transition: {
      duration: 8,
      ease: 'backOut',
      times: [0, 0.33, 0.67, 1],
    },
  },
};

const div3Variants = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -650, -200, 0],
    y: [0, 140, 510, 0],
    transition: {
      duration: 8,
      ease: 'backOut',
      times: [0, 0.33, 0.67, 1],
    },
  },
};

const AnimatedDivs = () => {
  return (
    <div className="absolute mt-[180px] xs:hidden md:block md:h-[520px] md:w-[650px] ml:h-[627px] ml:w-[810px] lg:h-[657px] lg:w-[950px] 3xl:h-[745px] 3xl:w-[878px]">
      <motion.div
        className="3lg:top-[107px] absolute left-0 z-0 h-[329px] w-[329px] cursor-pointer rounded-full bg-yellow transition-all md:top-[31px] md:h-[220px] md:w-[220px] ml:top-[39px] ml:h-[300px] ml:w-[300px] lg:h-[329px] lg:w-[329px]"
        variants={div1Variants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 z-10 rounded-full bg-mainViolet transition-all md:right-[153px] md:h-[153px] ml:right-[187px] ml:h-[213px] ml:w-[213px]"
        variants={div2Variants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute right-0 top-0 z-10 transition-all"
        variants={div3Variants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/heroSection/red_circle.png"
          alt=""
          width={213}
          height={213}
          className="h-[153px] w-[153px] ml:h-[213px] ml:w-[213px]"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedDivs;
