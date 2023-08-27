import { HStack, Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { TitleItemData } from "../../Constants/Data";
import { Link } from "react-router-dom";


const MenuMd: React.FC = () => {
  return (
    <>
      <HStack spacing={10}>
        <Box width="80px" height="100%" padding={1}>
          <Text fontFamily="title" fontWeight="bold" fontSize="3xl">
            
            <Link to="/" >LOGO</Link>
          </Text>
        </Box>
        <HStack spacing={7} justifySelf="flex-start">
          {TitleItemData.map(({ id, TitleName }) => (
            <Text
              fontSize="md"
              key={id}
              fontFamily="subtitle"
              color="blackAlpha.700"
            >
              {TitleName}
            </Text>
          ))}
        </HStack>
      </HStack>

      <HStack>
        <ChakraLink

          fontFamily="title"
          padding="2"
          paddingX="5"
          href="/login"
          borderWidth="1px"
          borderColor="transparent"
          borderRadius="full"
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
        >
          Log in
        </ChakraLink>

        <ChakraLink
          fontFamily="title"
          padding="2"
          paddingX="5"
          href="/signup"
          borderRadius="full"
          borderColor="black"
          borderWidth="1px"
          borderStyle="solid"
          bg="transparent"
          _hover={{
            bg: "color.secondary",
            borderColor: "color.secondary",
            color: "white",
          }}
        >
          Sign up
      {/* <Link to="/signup">  Sign up </Link>          */}
        </ChakraLink>
      </HStack>
    </>
  );
};

export default MenuMd;
