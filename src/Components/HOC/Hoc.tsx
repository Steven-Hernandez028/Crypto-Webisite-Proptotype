import { Flex } from "@chakra-ui/react";
import { MarginBottom, paddingX } from "../../styles/styles";
import { staggerContainer } from "../../styles/animations";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

const WrapperComponent = (WrappedComponent: React.FC) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>
        <FlexMotion
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          bg="color.primary"
          paddingX={paddingX}
          justifyContent="center"
          mb={MarginBottom}
        >
          <WrappedComponent {...props} />
        </FlexMotion>
      </>
    );
  };

  return hocComponent;
};

export default WrapperComponent;
