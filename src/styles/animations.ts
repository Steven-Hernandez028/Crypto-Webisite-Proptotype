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
  
export const staggerContainer =(staggerChildren?: any, delayChildren? : any) : Variants =>{
              return{
                hidden:{},
                show:{
                  transition:{
                    staggerChildren: staggerChildren,
                    delayChildren: delayChildren || 0
                  }
                }
              }
};


export const fadeIn = (direction :string, type : string, delay : number, duration :number )  => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};