import { useState } from "react";
import {
  Flex,
  Text,
  Link,
  VStack,
  HStack,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      h={{base:"900px", md:"100vh",lg:"1000px"}}
      w="100vw"
      mt={{base:"-60px",md:"-200px",lg:"-40px"}}
      bg="color.primary"
      justifyContent="center"
      alignItems={{base:"center", md:"center", lg:"start"}}
    >
      <VStack
        h="550px"
        w="400px"
        p="30px"
        spacing="40px"
        borderRadius="3xl"
        borderWidth="2px"
        borderColor="color.secondary"
      >
        <VStack spacing="30px">
          <Text fontFamily="title" fontWeight="bold" fontSize="40px">
            Login
          </Text>
          <Text fontFamily="subtitle" color="rgba(0,0,0,.4)">
            We are waiting for you
          </Text>
        </VStack>
        <InputGroup>
        <Input
          _focus={{
            borderColor: "pink",
          }}
          p="10px"
          variant="flushed"
          placeholder="username"
          fontFamily="subtitle"
        />
        </InputGroup>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            _focus={{
              borderColor: "pink",
            }}
            p="10px"
            variant="flushed"
            placeholder="password"
            fontFamily="subtitle"
          />
          <InputRightElement>
            <IconButton
              onClick={handleClick}
              aria-label="hide password"
              bg="transparent"
              _hover={{
                bg : "transparent"
              }}
              size="lg"
              color="color.secondary"
              icon={show ?  <AiFillEye/> : <AiFillEyeInvisible/> }
            />
          </InputRightElement>
        </InputGroup>

        <HStack spacing="70px">
          <Checkbox
            fontFamily="subtitle"
            color="rgba(0,0,0,.4)"
            colorScheme="pink"
          >
            Remember Me
          </Checkbox>

          <Link fontFamily="subtitle" color="rgba(0,0,0,.4)">
            Forgot Password?
          </Link>
        </HStack>

        <Link
          fontFamily="title"
          borderRadius="full"
          borderColor="color.secondary"
          color="white"
          borderWidth="1px"
          borderStyle="solid"
          w="100%"
          textAlign="center"
          p="2"
          px="5"
          bg="color.secondary"
          _hover={{
            bg: "transparent",
            borderColor: "color.secondary",
            color: "black",
          }}
        >
         Log in
        </Link>

        <HStack >
          <Text color="rgba(0,0,0,.4)">Don't have an account?</Text>
          <Link
            href="/signup"
            textDecor="none"
            fontFamily="title"
            fontWeight="bold"
            color="primary.terciary"
          >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Login;
