import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Text } from "@chakra-ui/react";
import { MarginBottom } from "../../../styles/styles";
import { ParallaxProps } from "../../../Types/Types";

const BoxMotion = motion(Box);

const marginRight = {
 md: "320px", xl:"780px"
}

const ParralaxTextChakra = ({
  children,
  baseVelocity = 100,
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame(( delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Box
      display="flex"
      flexWrap="nowrap"
      whiteSpace="nowrap"
      overflow="hidden"
      letterSpacing="-2px"
      lineHeight="0.8"
      mb={MarginBottom}
    >
      <BoxMotion
        display="flex"
        flexWrap="nowrap"
        fontSize="64px"
        fontWeight="600"
        textTransform="uppercase"
        whiteSpace="nowrap"
        style={{ x }}
      >
        <Text as="span" display="block" marginRight={marginRight} fontFamily="title">
          {children}
        </Text>
        <Text as="span" display="block" marginRight={marginRight} fontFamily="title">
          {children}
        </Text>
        <Text as="span" display="block" marginRight={marginRight} fontFamily="title">
          {children}
        </Text>
        <Text as="span" display="block" marginRight={marginRight} fontFamily="title">
          {children}
        </Text>
      </BoxMotion>
    </Box>
  );
};

export default function BannerMotion() {
  return (
      <ParralaxTextChakra baseVelocity={-10}>JOIN WITH US</ParralaxTextChakra>
  );
}
