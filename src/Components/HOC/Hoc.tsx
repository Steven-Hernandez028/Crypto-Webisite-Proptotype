import { Flex } from "@chakra-ui/react";
import { MarginBottom, paddingX } from "../../styles/styles";

const WrapperComponent = (WrappedComponent: React.FC) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>
        <Flex
          bg="color.primary"
          paddingX={paddingX}
          justifyContent="center"
          mb={MarginBottom}
        >
          <WrappedComponent {...props} />
        </Flex>
      </>
    );
  };

  return hocComponent;
};

export default WrapperComponent;
