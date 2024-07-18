import { motion } from 'framer-motion';
import AnimateVariants from './AnimateVariants';

const AnimatedDivs = () => {
  const { div1Variants, div2Variants, div3Variants, imageVariants } =
    AnimateVariants();

  return (
    <div className="absolute mt-[180px] hidden md:block md:h-[520px] md:w-[650px] ml:h-[627px] ml:w-[810px] lg:h-[657px] lg:w-[950px] 3xl:h-[745px] 3xl:w-[878px]">
      <motion.div
        className="3lg:top-[107px] absolute left-0 z-0 h-[329px] w-[329px] cursor-pointer rounded-full bg-yellow  md:top-[31px] md:h-[220px] md:w-[220px] ml:top-[39px] ml:h-[300px] ml:w-[300px] lg:h-[329px] lg:w-[329px]"
        variants={div1Variants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 z-10 rounded-full bg-mainViolet  md:right-[153px] md:h-[153px] md:w-[153px] ml:right-[187px] ml:h-[213px] ml:w-[213px]"
        variants={div2Variants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute right-0 top-0 z-10 h-[153px] w-[153px] overflow-hidden rounded-full bg-red ml:h-[213px] ml:w-[213px]"
        variants={div3Variants}
        initial="initial"
        animate="animate"
      >
        <motion.img
          src="/images/heroSection/red_circle.png"
          alt="happy child"
          width={213}
          height={213}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="h-[153px] w-[153px] ml:h-[213px] ml:w-[213px]"
        />
      </motion.div>
    </div>
  );
};

export default AnimatedDivs;
