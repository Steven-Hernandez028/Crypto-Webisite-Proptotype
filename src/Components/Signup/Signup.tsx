import React, { useState } from "react";
import {
  InputRightElement,
  InputGroup,
  IconButton,
  Icon,
  Text,
  Center,
  Flex,
  HStack,
  VStack,
  Link,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillInstagram,
} from "react-icons/ai";
import { ToggleType } from "../../Types/Types";


const Signup: React.FC = () => {
  const [toggle, setToggle] = useState<ToggleType>({
    pass1: false,
    pass2: false,
  });

  const { pass1, pass2 } = toggle;

  const handleClick = (o: number): undefined => {
    setToggle((prevState ) => {
      if (o === 0) {
        return {
          ...prevState,
          pass1: !prevState.pass1,
        };
      }

      if (o === 1) {
        return {
          ...prevState,
          pass2: !prevState.pass2,
        };
      }
      return prevState;
    });
  };

  return (
    <Flex
      h="130vh"
      w="100vw"
      mt="-60px"
      bg="color.primary"
      justifyContent="center"
      alignItems="start"
    >
      <VStack
        h="730px"
        w="440px"
        p="30px"
        spacing="40px"
        borderRadius="3xl"
        borderWidth="2px"
        borderColor="color.secondary"
      >
        <VStack spacing="30px">
          <Text fontFamily="title" fontWeight="bold" fontSize="40px">
            Create Account
          </Text>

          <HStack spacing="20px" w="100%" justifyContent="center">
            <Center
              w="40px"
              h="40px"
              _hover={{
                color: "color.terciary",
                borderColor: "color.terciary",
              }}
              transition="all .3s ease-out"
              rounded="full"
              borderRadius="3xl"
              borderWidth="2px"
              borderColor="color.secondary"
            >
              <Icon
                href="www.google.com"
                as={AiFillFacebook}
                borderRadius="full"
                w="25px"
                h="25px"
              />
            </Center>

            <Center
              w="40px"
              h="40px"
              _hover={{
                color: "color.terciary",
                borderColor: "color.terciary",
              }}
              transition="all .3s ease-out"
              rounded="full"
              borderRadius="3xl"
              borderWidth="2px"
              borderColor="color.secondary"
            >
              <Icon
                href="www.google.com"
                as={AiFillInstagram}
                borderRadius="full"
                w="25px"
                h="25px"
              />
            </Center>

            <Center
              w="40px"
              h="40px"
              _hover={{
                color: "color.terciary",
                borderColor: "color.terciary",
              }}
              transition="all .3s ease-out"
              rounded="full"
              borderRadius="3xl"
              borderWidth="2px"
              borderColor="color.secondary"
            >
              <Icon
                href="www.google.com"
                as={AiOutlineTwitter}
                borderRadius="full"
                w="25px"
                h="25px"
              />
            </Center>
          </HStack>
          <Text fontFamily="subtitle" color="rgba(0,0,0,.4)">
            Or use your email for registration:
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
            _focus={{
              borderColor: "pink",
            }}
            p="10px"
            variant="flushed"
            placeholder="Email"
            fontFamily="subtitle"
          />
        </InputGroup>

        <InputGroup>
          <Input
            type={pass1 ? "text" : "password"}
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
              onClick={() => handleClick(0)}
              aria-label="hide password"
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              size="lg"
              color="color.secondary"
              icon={pass1 ? <AiFillEye /> : <AiFillEyeInvisible />}
            />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Input
            type={pass2 ? "text" : "password"}
            _focus={{
              borderColor: "pink",
            }}
            p="10px"
            variant="flushed"
            placeholder="Repeat Your Password"
            fontFamily="subtitle"
          />
          <InputRightElement>
            <IconButton
              onClick={() => handleClick(1)}
              aria-label="hide password"
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              size="lg"
              color="color.secondary"
              icon={pass2 ? <AiFillEye /> : <AiFillEyeInvisible />}
            />
          </InputRightElement>
        </InputGroup>
        <HStack spacing="70px">
          <Checkbox
            fontFamily="subtitle"
            color="rgba(0,0,0,.4)"
            colorScheme="pink"
          >
            I agree to the{" "}
            <Text as="span" color="color.secondary">
              Terms
            </Text>{" "}
            and{" "}
            <Text as="span" color="color.secondary">
              Privacy and Policy.
            </Text>
          </Checkbox>
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
          Get started
        </Link>
      </VStack>
    </Flex>
  );
};

export default Signup;
