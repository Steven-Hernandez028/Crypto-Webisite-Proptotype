import { Variants } from "framer-motion";

export const FadeIn = (Delay: number, PosY = "0px") : Variants => {

    const obj : Variants =
     {initial: { 
      opacity: 0,
       y: 100, 
    transition: { 
      duration:0.5,
      delay: Delay
    } 
  },
  animate: {
      opacity: 1,
      y: PosY,
    transition:{
      duration: 0.5,
      delay:Delay
    }
  } }
    return obj;
  
  };
  