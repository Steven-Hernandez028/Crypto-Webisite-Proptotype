import { Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { CarruselTypes } from "../../../Types/Types";
import { motion } from "framer-motion";

const HStackMotion = motion(HStack);

const Carrusel: React.FC<CarruselTypes> = ({ Icons, CoinName, Perce }) => {
  return (
    <HStackMotion

      bg="white"
      borderRadius="full"
      padding={6}
      spacing={3}
      width="250px"
      height="80px"
      mx="20px"
    >
      <Icon color="color.terciary" width="30px" height="30px" as={Icons} />

      <Text fontFamily="title" fontWeight="200" fontSize="xl">
        {CoinName}
      </Text>

      <Flex
        borderRadius="full"
        borderWidth="1px"
        borderColor="color.secondary"
        paddingX="2"
        width="80px"
        height="30px"
        fontSize="sm"
        alignItems="center"
      >
        {Perce}
      </Flex>
    </HStackMotion>
  );
};

export default Carrusel;
