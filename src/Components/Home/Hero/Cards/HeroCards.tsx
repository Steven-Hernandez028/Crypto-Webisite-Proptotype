import { Box, Flex, VStack, Text, Icon, Link } from "@chakra-ui/react";

import { FiArrowUpRight } from "react-icons/fi";
import { HeroCardsTypes } from "../../../../Types/Types";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);


const HeroCards: React.FC<HeroCardsTypes> = ({
  Title,
  SubTitle,
  Description,
  Image,
  Url,
  Delay,
  PosY,
  FadeIn
  
}) => {
  return (
    <FlexMotion
      h={{ base: "750", md: "350" }}
      bg="white"
      flexDir={{ base: "column", md: "row" }}
      marginTop="90px"
      justifyContent="space-between"
      borderRadius="3xl"
      borderWidth="2px"
      borderColor="color.secondary"
      initial="initial"
      animate="animate"
      variants={FadeIn(Delay, PosY)}
    >
      <VStack
        w={{ base: "100%", md: "80%",lg:"60%" }}
        padding={{ base: "30px", md: "60px" }}
        alignItems="start"
        spacing={{ base: 5, md: 6 }}
      >
        <Text
          fontFamily="title"
          fontSize="4xl"
          width="100%"
          textAlign="start"
          color="color.secondary"
          fontWeight="bold"
        >
          {Title}
          <Text as="span" display="block">{SubTitle}</Text>
        </Text>

        <Text fontFamily="subtitle" fontSize="md" color="blackAlpha.700">
          {Description}
        </Text>

        <Link
          fontFamily="title"
          borderRadius="full"
          href={Url}
          display="flex"
          alignItems="center"
          padding="0"
          _hover={{
            color: "none",
          }}
          _active={{
            bg: "transparent",
          }}
        >
          <Icon
            marginRight={5}
            borderRadius="full"
            borderColor="color.secondary"
            width="40px"
            bg="transparent"
            height="40px"
            padding={2}
            color="black"
            borderWidth="1px"
            _hover={{
              bg: "color.secondary",
              color: "white",
            }}
            transition={"all .3s ease"}
            as={FiArrowUpRight}
          />
          Get started now
        </Link>
      </VStack>

      <Box
        w={{ base: "100%", md: "50%" }}
        h="100%"
        position="relative"
        backgroundImage={Image}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="contain"
      ></Box>
    </FlexMotion>
  );
};

export default HeroCards;
