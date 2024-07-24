import { useMediaQuery } from 'react-responsive';

const AnimateVariants = () => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });
  const isDesktopMl = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1199px)',
  });
  const isDesktopLg = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1535px)',
  });
  const isDesktop3xl = useMediaQuery({
    query: '(min-width: 1536px) and (max-width: 1919px)',
  });
  const isDesktop4xl = useMediaQuery({
    query: '(min-width: 1920px)',
  });

  let positionX1Variant;
  let positionX2Variant;
  let positionX3Variant;
  let positionY1Variant;
  let positionY2Variant;
  let positionY3Variant;

  switch (true) {
    case isTablet:
      positionX1Variant = [0, 310, 455, 0];
      positionX2Variant = [0, 152, -350, 0];
      positionX3Variant = [0, -500, -152, 0];
      positionY1Variant = [0, 305, -100, 0];
      positionY2Variant = [0, -365, -310, 0];
      positionY3Variant = [0, 57, 368, 0];
      break;
    case isDesktopMl:
      positionX1Variant = [0, 380, 560, 0];
      positionX2Variant = [0, 187, -415, 0];
      positionX3Variant = [0, -600, -187, 0];
      positionY1Variant = [0, 340, -120, 0];
      positionY2Variant = [0, -415, -340, 0];
      positionY3Variant = [0, 75, 412, 0];
      break;
    case isDesktopLg:
      positionX1Variant = [0, 500, 680, 0];
      positionX2Variant = [0, 187, -480, 0];
      positionX3Variant = [0, -680, -187, 0];
      positionY1Variant = [0, 340, -130, 0];
      positionY2Variant = [0, -442, -340, 0];
      positionY3Variant = [0, 100, 443, 0];
      break;
    case isDesktop3xl:
      positionX1Variant = [0, 430, 600, 0];
      positionX2Variant = [0, 187, -450, 0];
      positionX3Variant = [0, -620, -187, 0];
      positionY1Variant = [0, 420, -100, 0];
      positionY2Variant = [0, -530, -420, 0];
      positionY3Variant = [0, 100, 533, 0];
      break;
    case isDesktop4xl:
      positionX1Variant = [0, 410, 600, 0];
      positionX2Variant = [0, 196, -470, 0];
      positionX3Variant = [0, -650, -185, 0];
      positionY1Variant = [0, 400, -100, 0];
      positionY2Variant = [0, -551, -390, 0];
      positionY3Variant = [0, 140, 530, 0];
      break;
    default:
      positionX1Variant = [0, 380, 600, 0];
      positionX2Variant = [0, 196, -470, 0];
      positionX3Variant = [0, -650, -200, 0];
      positionY1Variant = [0, 390, -150, 0];
      positionY2Variant = [0, -551, -390, 0];
      positionY3Variant = [0, 140, 510, 0];
  }

  return {
    div1Variants: {
      initial: { x: 0, y: 0 },
      animate: {
        x: positionX1Variant,
        y: positionY1Variant,
        transition: {
          duration: 6,
          ease: 'easeOut',
          times: [0, 0.33, 0.67, 1],
          exit: { x: 0, y: 0 },
        },
      },
    },

    div2Variants: {
      initial: { x: 0, y: 0 },
      animate: {
        x: positionX2Variant,
        y: positionY2Variant,
        transition: {
          duration: 6,
          ease: 'easeOut',
          times: [0, 0.33, 0.67, 1],
          exit: { x: 0, y: 0 },
        },
      },
    },

    div3Variants: {
      initial: { x: 0, y: 0 },
      animate: {
        x: positionX3Variant,
        y: positionY3Variant,
        transition: {
          duration: 6,
          ease: 'easeOut',
          times: [0, 0.33, 0.67, 1],
          exit: { x: 0, y: 0 },
        },
      },
    },

    imageVariants: {
      hidden: { opacity: 0, y: 150, z: -10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 6 } },
    },
  };
};

export default AnimateVariants;
