import { Flex, Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import {  width } from "../../../styles/styles";
import WrapperComponent from "../../HOC/Hoc";
import { AiFillApple } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";


import image2 from "../../../assets/image2.png";
import Bitcoin from "../../../assets/Bitcoin.png";
import cardano from "../../../assets/cardano.png";

const Description =
  "The world's fastest crypto-matching engine built by traders for traders.";
const Description1 =
  "Increased purchasing power means up to 5 times more profit.";

const BestWayToBuy = () => {
  return (
    <Flex  width="100%" justifyContent="center">
      <Flex gap={10} width={width} flexDir="column">
        <Box width={{ base: "100%", md: "520px", xl: "620px" }}>
          <Text
            textAlign="start"
            fontFamily="title"
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "5xl" }}
            color="black"
          >
            Best way to buy
          </Text>
          <Text
            textAlign="end"
            fontFamily="title"
            fontWeight="bold"
            fontSize={{ base: "4xl", md: "5xl" }}
            color="black  "
          >
            Trade Crypto
          </Text>
        </Box>

        <Flex gap={{base:0, md:5}} flexDir={{ base: "column", md: "row" }}>
          <Box
            height={{base:"400px", md:"400px", lg:"500px"}}
            w={{ base: "100%", md: "80%" }}
            bgImage={image2}
            bgPos="center"
            bgSize="cover"
    ></Box>
          <Flex
            justifyContent="space-around"
            height={{ base: "760px", md: "600px", lg:"500px" }}
            w={{ base: "100%", md: "100%",lg:"40%" }}
            flexDir="column"
          >
            <VStack alignItems="start">
              <Text
                fontFamily="subtitle"
                fontSize="md"
                width={{ base: "100%", md: "65%" }}
                color="rgba(0,0,0,.4)"
                lineHeight="1.6"
              >
                {Description}
              </Text>

              <Text
                fontFamily="subtitle"
                fontSize="md"
                width={{ base: "100%", md: "65%" }}
                color="rgba(0,0,0,.4)"
                lineHeight="1.6"
              >
                {Description1}
              </Text>
            </VStack>
            <Flex flexDir={{base:"column", md: "row"}} gap={5}>
              <Button
                rounded="2xl"
                h="65px"
                leftIcon={
                  <AiFillApple style={{ width: "30px", height: "30px" }} />
                }
                _hover={{
                  color: "black",
                  bg: "white",
                }}
                bg="black"
                color="white"
              >
                Get on App Store
              </Button>

              <Button
                rounded="2xl"
                h="65px"
                leftIcon={
                  <BsGoogle style={{ width: "30px", height: "30px" }} />
                }
                _hover={{
                  color: "black",
                  bg: "white",
                }}
                bg="black"
                color="white"
              >
                Get on Play Store
              </Button>
            </Flex>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              alignItems="center"
              gap={5}
            >
              <Box
                rounded="3xl"
                bg="white"
                borderWidth="2px"
                borderColor="color.secondary"
                w="230px"
                h="180px"
              >
                <HStack padding={5} spacing="70px">
                <Box w="90px" h="70px" bgImage={cardano} bgPos="center" bgSize="cover" ></Box>

                  <Box>
                    <Text fontFamily="subtitle" mb={3} color="color.terciary">
                      BUY
                    </Text>
                    <Text fontFamily="subtitle" color="green">
                      TRADE
                    </Text>
                  </Box>
                </HStack>

                <HStack paddingX={5}>
                  <Text fontFamily="title" fontSize="2xl">
                    Cardano <span style={{ color: "rgba(0,0,0,.4)" }}>ADA</span>
                  </Text>
                </HStack>
                <HStack paddingX={5}>
                  <Text fontFamily="title" color="gray.800" fontSize="sm">
                    $27.47 <span style={{ color: "green" }}>+9.23%</span>
                  </Text>
                </HStack>
              </Box>

              <Box
                rounded="3xl"
                bg="white"
                borderWidth="2px"
                borderColor="color.secondary"
                w="230px"
                h="180px"
              >
                <HStack padding={5} spacing="70px">
                  <Box w="90px" h="70px" bgImage={Bitcoin} bgPos="center" bgSize="cover" ></Box>

                  <Box>
                    <Text fontFamily="subtitle" mb={3} color="color.terciary">
                      BUY
                    </Text>
                    <Text fontFamily="subtitle" color="green">
                      TRADE
                    </Text>
                  </Box>
                </HStack>

                <HStack paddingX={5}>
                  <Text fontFamily="title" fontSize="2xl">
                    Bitcoin <span style={{ color: "rgba(0,0,0,.4)" }}>BTC</span>
                  </Text>
                </HStack>
                <HStack paddingX={5}>
                  <Text fontFamily="title" color="gray.800" fontSize="sm">
                    $19,627.47 <span style={{ color: "green" }}>+2.23%</span>
                  </Text>
                </HStack>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WrapperComponent(BestWayToBuy);
