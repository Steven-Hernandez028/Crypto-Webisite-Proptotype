import { Flex, Box, Link, Text } from "@chakra-ui/react";
import { width } from "../../../styles/styles";
import WrapperComponent from "../../HOC/Hoc";

const Description = "Blockchain.com institutional Markets is a full-featured cryptocurrency servies platform designed to connect.";

const PreFooter = () => {
  return (
    <>
      <Flex
        p={20}
        bg="white"
        w={width}
        h={{base:"900px", md:"800px", lg:"auto"}}
        justifyContent="center"
        alignItems="center"
        rounded={{base: "150px", md: "200px" , lg: "full"}}
        width="100%"
        flexDir="column"
      >
        <Box width={{base:"100%", md:"100%", lg:"80%"}} mb="50px" >
          <Text fontFamily="title" fontWeight="bold" fontSize={{base:"50px",md:"90px"}}>
            From Zero To
          </Text>
          <Text
            fontFamily="title"
            fontWeight="bold"
            fontSize={{base:"50px",md:"90px"}}
             textAlign="start"

          >
            Crypto in minutes
          </Text>
        </Box>

        <Flex  w={{base:"100%",md:"100%", lg:"60%"}}  flexDir={{base:"column", md:"row"}} gap={{base:"30px",md:"auto"}} justifyContent="space-between">
          <Text
            fontFamily="subtitle"
            fontSize="md"
            w={{ base: "100%", md: "60%" }}
            color="rgba(0,0,0,.4)"
            lineHeight="1.6"
            textAlign="start"
          >
            {Description}
          </Text>


          <Link
                fontFamily="title"
                borderRadius="full"
                borderColor="color.secondary"
                color="white"
                w="170px"
                h="50px"
                borderWidth="1px"
                borderStyle="solid"
                textAlign="center"
                padding="2"
                bg="color.secondary"
                _hover={{
                  bg: "transparent",
                  borderColor: "color.secondary",
                  color: "black",
                }}
              >
                Get started
              </Link>

        </Flex>
      </Flex>
    </>
  );
};

export default WrapperComponent(PreFooter);
