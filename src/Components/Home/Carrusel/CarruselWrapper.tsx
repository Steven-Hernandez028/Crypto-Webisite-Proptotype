import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Carrusel from "./Carrusel";
import { CoinsCarruselData } from "../../../Constants/Data";
import { MarginBottom } from "../../../styles/styles";

const FlexMotion = motion(Flex);

export const CarruselWrapper = ({speed = 15} : {speed?:number}) => {
  return (
    <FlexMotion
      bg="color.primary"
      overflow={{base:"hidden", md:"hidden"}}
      mb={MarginBottom}
    >
      <FlexMotion
         width="5790px"
      alignItems="center"
      animate={{
        transform: ["translateX(0)", `translateX(calc(-1250px))`],
      }}
      transition={{
        ease: "linear",
        duration: speed,
        repeat: Infinity,
      }}
      
      >
        {CoinsCarruselData.map(({ id, Icon, CoinName, Perce }) => (
          <Carrusel key={id} Icons={Icon} CoinName={CoinName} Perce={Perce} />
        ))}
      </FlexMotion>
    </FlexMotion>
  );
};
