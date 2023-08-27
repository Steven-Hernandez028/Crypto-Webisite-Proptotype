import { Box, Flex, Text, HStack, Icon, Link } from "@chakra-ui/react";

import { FiArrowUpRight } from "react-icons/fi";
import { HeroCardData } from "../../../Constants/Data";
import WrapperComponent from "../../HOC/Hoc";
import HeroCards from "./Cards/HeroCards";
import { width } from "../../../styles/styles";
import { FadeIn } from "../../../styles/animations";



const Hero = () => {
  return (
    <>
      <Flex flexDirection="column" width={width}>
        <Flex
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap={10}
          h={{ base: "300px", md: "auto" }}
        >
          <Box width={{ base: "100%", md: "370px", lg: "520px", xl: "620px" }}>
            <Text
              textAlign="start"
              fontFamily="title"
              fontWeight="bold"
              fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
              color="black  "
            >
              The best lighting
            </Text>
            <Text
              textAlign="end"
              fontFamily="title"
              fontWeight="bold"
              fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
              color="black  "
            >
              crypto trading
            </Text>
          </Box>

          <Flex
            width="340px"
            padding={1}
            justifyContent={{ base: "space-between", md: "space-around" }}
            alignItems="center"
            flexDir="column"
            height={{ base: "150px", md: "auto" }}
          >
            <Text
              fontFamily="subtitle"
              fontSize="md"
              color="blackAlpha.700"
              textAlign="justify"
            >
              Trusteds by millions since 2011 with over $1 Trillion in crypto
              transaction
            </Text>

            <HStack>
              <Link
                fontFamily="title"
                borderRadius="full"
                borderColor="color.secondary"
                color="white"
                borderWidth="1px"
                borderStyle="solid"
                padding="2"
                paddingX="5"
                bg="color.secondary"
                _hover={{
                  bg: "transparent",
                  borderColor: "color.secondary",
                  color: "black",
                }}
              >
                Get started
              </Link>

              <Link
                fontFamily="title"
                borderRadius="full"
                borderColor="transparent"
                display="flex"
                alignItems="center"
                borderWidth="1px"
                borderStyle="solid"
                bg="transparent"
                padding="2"
                paddingX="5"
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
                Explore
              </Link>
            </HStack>
          </Flex>
        </Flex>
        {HeroCardData.map(
          ({ id, Title, SubTitle, Delay, PosY ,Description, Image, Url }) => (
            <HeroCards
              key={id}
              Title={Title}
              SubTitle={SubTitle}
              Description={Description}
              Image={Image}
              Url={Url}
              PosY={PosY}
              Delay = {Delay}
              FadeIn={FadeIn}
            />
          )
        )}
      </Flex>
    </>
  );
};

export default WrapperComponent(Hero);
