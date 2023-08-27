import { Flex,  Show, Hide } from "@chakra-ui/react";
import { width } from "../../styles/styles";
import WrapperComponent from "../HOC/Hoc";
import MenuMd from "./MenuMd";
import MenuSm from "./MenuSm";

const NavBar = () => {
  return (
    <>
      <Flex paddingY={5} justifyContent="space-between" width={width} mb="-90px">
        <Show above="md">
          <MenuMd />
        </Show>

        <Hide above="md">
          <MenuSm />
        </Hide>
      </Flex>
    </>
  );
};

const componentNavbarWrapper = WrapperComponent(NavBar);

export default componentNavbarWrapper;
