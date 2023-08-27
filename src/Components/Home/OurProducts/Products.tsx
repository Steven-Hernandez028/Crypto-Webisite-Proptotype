import { Flex, Text, Button, Icon, Link } from "@chakra-ui/react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineWallet,
} from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FadeIn } from "../../../styles/animations"

import { useEffect } from "react";

import WrapperComponent from "../../HOC/Hoc";
import { width } from "../../../styles/styles";


const gapNumber = 10;

const Title = "The Easiest and Most";
const SubTitle = "Powerful Crypto Wallet";
const Description =
  "Buy Bitcoin instantly with a credit card, debit card, or by linking your bank.";

const TextMotion = motion(Text);
const FlexMotion = motion(Flex);

const Products = () => {
  const [ref, inView] = useInView();

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    const rewardCount = useMotionValue(0);
    const rewardrounded = useTransform(rewardCount, Math.ceil)

    useEffect(()=>{
    
        if(inView) {
          console.log(inView);
         animate(count, 100 , { duration: 2.3});
          animate(rewardCount, 10, { duration: 3 });
       
        }
    }, [inView]);



  return (
    <FlexMotion 
    flexDir="column" 
    width={width} 
    gap={gapNumber}
    initial="initial"
    animate="animate"

    variants={inView === true ? " " : FadeIn(2, "0px") }
    
    >
      <Flex flexDir={{ base: "column", md: "row" }} gap={gapNumber}>
        <Flex w="100%" h={{ base: "40px", md: "80px" }} alignItems="center">
          <Text
            fontFamily="title"
            fontWeight="bold"
            fontSize="5xl"
            width={{ base: "100%", md: "auto" }}
            textAlign={{ base: "center", md: "start" }}
          >
            Our products
          </Text>
        </Flex>
        <Flex
          w="100%"
          h="80px"
          alignItems="center"
          justifyContent={{ base: "center", md: "end" }}
        >
          <Button
            borderRadius="full"
            padding={0}
            borderColor="color.secondary"
            borderWidth="1px"
          >
            <Icon widthq="40px" height="40px" as={AiOutlineArrowLeft} />
          </Button>
          <Button
            borderRadius="full"
            padding={0}
            ml={10}
            borderColor="color.secondary"
            borderWidth="1px"
          >
            <Icon height="40px" as={AiOutlineArrowRight} />
          </Button>
        </Flex>
      </Flex>

      <Flex ref={ref}   gap={gapNumber} flexDir={{ base: "column", md: "row" }}>
        <Flex
          flexDir="column"
          padding={8}
          rounded="3xl"
          width={{ base: "100%", md: "60%" }}
          h={{ base: "550px", md: "530px", lg: "380px" }}
          bg="black"
          justifyContent="space-around"
        >
          <Button
            bg="pink.100"
            rounded="full"
            height={{ base: "55px", md: "55px" }}
            width="120px"
            fontFamily="subtitle"
            aria-label="subtitle"
            leftIcon={<AiOutlineWallet />}
          >
            Wallet
          </Button>
          <Text
            fontFamily="title"
            fontSize="4xl"
            width="100%"
            display="inline"
            textAlign="start"
            color="color.primary"
            fontWeight="bold"
          >
            {Title}
            <Text as="span" >{SubTitle}</Text>
          </Text>

          <Text
            fontFamily="subtitle"
            fontSize="md"
            width={{ base: "100%", md: "70%" }}
            color="rgba(255,255,255,.6)"
            lineHeight="1.6"
          >
            {Description}
          </Text>

          <Link
            fontFamily="title"
            borderRadius="full"
            borderColor="transparent"
            display="flex"
            alignItems="center"
            borderStyle="solid"
            color="pink.100"
            bg="transparent"
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
              bg="transparent"
              width="40px"
              height="40px"
              padding={2}
              color="pink.100"
              borderWidth="1px"
              _hover={{
                bg: "color.secondary",
                color: "white",
              }}
              transition={"all .3s ease"}
              as={FiArrowUpRight}
            />
            Start
          </Link>
        </Flex>

        <Flex
          gap={gapNumber}
          width={{ base: "100%", md: "40%" }}
          height={{ base: "450px", md: "auto" }}
          flexDir="column"
        >
          <Flex
            borderColor="color.secondary"
            borderWidth="2px"
            rounded="3xl"
            h="45%"
            bg="white"
            alignItems="center"
            gap={{ base: 5, md: 7 }}
            justifyContent="center"
          >
            <Text
              ml={{ base: 5, md: 0 }}
              fontFamily="title"
              fontSize={{ base: "7xl", md: "8xl" }}
              fontWeight="bold"
            >
              <motion.span>{rewardrounded}</motion.span><span style={{ fontSize: "40px" }}>%</span>
            </Text>

            <Text
              alignSelf="center"
              w="240px"
              fontFamily="title"
              fontSize="3xl"
              fontWeight="bold"
            >
              Earn with us in rewards
            </Text>
          </Flex>

          <Flex
            flexDir="column"
            justifyContent="space-around"
            alignItems="center"
            borderColor="color.secondary"
            borderWidth="2px"
            rounded="3xl"
            h="55%"
            bg="pink.100"
          >
            <TextMotion
              display="inline"
              h={"100px"}
              fontFamily="title"
              fontSize={{ base: "7xl", md: "8xl" }}
              fontWeight="bold"
            >
                          <motion.span>{rounded}</motion.span><span style={{ fontSize: "40px" }}>%</span>
            </TextMotion>
            <Text
              textAlign="center"
              fontFamily="title"
              fontSize="3xl"
              fontWeight="bold"
            >
              Earn with us in rewards
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </FlexMotion>
  );
};
const componentWrapper = WrapperComponent(Products);

export default componentWrapper;
