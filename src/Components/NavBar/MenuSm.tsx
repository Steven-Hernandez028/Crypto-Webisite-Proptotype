import { useState } from "react";
import {  HStack,Box,Text,Flex,Link } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "./Hamburger/Hamburger";

const FlexMotion = motion(Flex);


const MenuSm: React.FC = () => {


  const [isOpen, setOpen] = useState(false);


  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Text fontFamily="title" fontWeight="bold" fontSize="3xl">
            LOGO
          </Text>
          <Hamburger setOpen={setOpen} isOpen={isOpen}/>
          <AnimatePresence>
              {isOpen && (
                    <FlexMotion
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    bg="color.primary"
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    style={{
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100vh',

                    }}                
                    justifyContent="center"
                  alignItems ="center"
                  flexDir="column"
                  gap= "20px"
                  zIndex={1000}
                        >

                      <Link href="/" fontFamily="title" fontSize="2xl" >Home</Link>
                      <Link href="/login" fontFamily="title" fontSize="2xl" >Login</Link>
                      <Link href="/signup" fontFamily="title" fontSize="2xl" >Sign up</Link>
                      <Link href="/" fontFamily="title" fontSize="2xl" >Exchange</Link>
                      <Link href="/" fontFamily="title" fontSize="2xl" >Explorer</Link>
                      <Link href="/" fontFamily="title" fontSize="2xl" >Institutional</Link>
                      <Link href="/" fontFamily="title" fontSize="2xl" >Wallet</Link>
                     
                    </FlexMotion>
                
              )}

            </AnimatePresence>    
      </Flex>
    </>
  );
};

export default MenuSm;