import { Box, Text, Flex, Link, VStack } from "@chakra-ui/react";
import { paddingX, width } from "../../styles/styles";

const DescriptionFooter =
  "For further details seee our Legal Disclosures. By using this website. you accept our Terms of Use and Privay Policy.";

const Footer = () => {
  return (
    <Flex
    w="100%" 
    justifyContent="center"
    >


    <Flex 
    w={width}
    h={{base:"1200px", md:"300px"}} 
    flexDir={{base:"column", md:"row"}} 
     bg="color.primary"
      paddingX={paddingX}
      gap={{base:10, md:0}}
      >
      <Flex
       w={{base:"100%", md:"45%"}}
       h={{base:"300px",md:"auto"}} 
       justifyContent="space-between" 
       flexDir="column"
       
       >
        <Box w={{base:"100%", md:"280px"}}>
          <Box width="80px" height={"100%"}>
            <Text fontFamily="title" fontWeight="bold" fontSize="3xl">
              LOGO
            </Text>
          </Box>

          <Flex
            justifyContent="space-between"
            fontSize="md"
            fontFamily="subtitle"
          >
            <Link href="/">Twitter</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Medium</Link>
          </Flex>
        </Box>
        <Text w="70%">{DescriptionFooter}</Text>
      </Flex>

      <Flex justifyContent={{base:"start",md:"end"}} w={{base:"100%" ,md:"55%" }} gap="90px" flexDir={{base:"column", md:"row"}}>
        <VStack spacing="20px">
            <Text  w="100%" fontWeight="bold" fontFamily="title" fontSize="xl" marginBottom="5px">Products</Text>
            <Text  w="100%"  fontFamily="subtitle"  >Wallet</Text>
            <Text  w="100%" fontFamily="subtitle" >Exchange</Text>
            <Text  w="100%"  fontFamily="subtitle" >Explorer</Text>
            <Text  w="100%" fontFamily="subtitle"  >Learn</Text>
        </VStack>


        <VStack spacing="20px">
            <Text  w="100%" fontWeight="bold" fontFamily="title" fontSize="xl" marginBottom="5px">Resources</Text>
            <Text  w="100%"  fontFamily="subtitle"  >APIs</Text>
            <Text  w="100%" fontFamily="subtitle" >Status</Text>
            <Text  w="100%"  fontFamily="subtitle" >Open Source</Text>
            <Text  w="100%" fontFamily="subtitle"  >Reserch</Text>
            <Text  w="100%" fontFamily="subtitle"  >Wallet support</Text>

        </VStack>


        <VStack spacing="20px">
            <Text  w="100%" fontWeight="bold" fontFamily="title" fontSize="xl" marginBottom="5px">Company</Text>
            <Text  w="100%"  fontFamily="subtitle"  >About</Text>
            <Text  w="100%" fontFamily="subtitle" >Careers</Text>
            <Text  w="100%"  fontFamily="subtitle" >Press Center</Text>
            <Text  w="100%" fontFamily="subtitle"  >Prime</Text>
            <Text  w="100%" fontFamily="subtitle"  >Ventures</Text>
        </VStack>
      </Flex>
    </Flex>


    </Flex>

  );
};

export default Footer;