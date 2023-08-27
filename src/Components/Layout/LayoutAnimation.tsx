import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
const BoxMotion = motion(Box);

interface pageVariant {
  initial: { opacity: number; scale: number };
  in: { opacity: number; scale: number };
  out: { opacity: number; scale: number };
}
interface pageTransition {
  type: string;
  ease: string;
  duration: number;
}
const pageVariants: pageVariant = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0,
  },
};

const pageTransition: pageTransition = {
  type: "spring",
  ease: "ease",
  duration: 0.9,
};

const PageLayout = ({ children }: { children: JSX.Element }) => children;

const LayoutAnimation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>

      <PageLayout>
        <BoxMotion
          key={pathname}
          initial="initial"
          animate="in"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </BoxMotion>
      </PageLayout>
    </>
  );
};

export default LayoutAnimation;
