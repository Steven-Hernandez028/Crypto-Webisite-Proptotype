import {
  Text,
  Flex,
  Box,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";

import { MarginBottom, paddingX, width } from "../../../styles/styles";
import image2 from "../../../assets/image3.png";

import { FiArrowUpRight } from "react-icons/fi";
import { BsBank } from "react-icons/bs";

const Description =
  "Blockchain.com institutional Markets is a full-featured cryptocurrency services platform designed to connect with companies with their own crypto assets and institutional clients to lend, trade, and custodial activities tailored to your needs.";

const Url = "";

const Information = () => {
  return (
    <Flex
    mb={MarginBottom}
      paddingX={paddingX}
      bg="white"
      alignItems="center"
      justifyContent="center"
      borderRadius={{ base: "40px", md: "90px" }}
      py={10}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h={{ base: "1000px", md: "720px",lg:"680px" }}
        width={width}
        gap={5}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          justifyContent="space-evenly"
          height={{ base: "650px", md: "630px" }}
          w={{ base: "100%", md: "40%" }}
          flexDir="column"
        >
          <HStack rounded="full" bg="color.primary" w="170px" p="14px">
            <Icon as={BsBank} color="color.terciary" />{" "}
            <Text fontFamily="title"> Institucional</Text>
          </HStack>

          <Text
            textAlign="start"
            fontFamily="title"
            fontWeight="bold"
            w={{ base: "auto", md: "700px" , lg:"600px" }}
            fontSize={{ base: "4xl", md: "5xl" }}
            color="black"
          >
            Bowrrowing, Trading And Custodial Operations To Individual Needs
          </Text>

          <Text
            fontFamily="subtitle"
            fontSize="md"
            width={{ base: "100%", md: "90%" }}
            color="rgba(0,0,0,.4)"
            lineHeight="1.6"
            textAlign="start"
          >
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
            Become a customer
          </Link>
        </Flex>
        <Box
          height={{ base: "400px", md: "400px", lg: "500px"}}
          w={{ base: "100%", md: "60%" }}
          bgImage={image2}
                alignSelf={{base: "auto", md: "end", lg:"auto"}}
          bgPos="center"
          bgSize="cover"
        ></Box>
      </Flex>
    </Flex>
  );
};
export default Information;
