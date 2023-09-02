import { Flex,Center } from "@chakra-ui/react";
import { MarginBottom, paddingX } from "../../styles/styles";
import { staggerContainer } from "../../styles/animations";
import { motion } from "framer-motion";

const CenterMotion = motion(Center);
const WrapperComponent = (WrappedComponent: React.FC) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>


        <CenterMotion
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        bg="color.primary"
        paddingX={paddingX}
        justifyContent="center"
        mb={MarginBottom}
>

<WrappedComponent {...props} />

        </CenterMotion>
      </>
    );
  };

  return hocComponent;
};

export default WrapperComponent;
