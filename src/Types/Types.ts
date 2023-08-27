import { As } from "@chakra-ui/react";
import { Variants } from "framer-motion";



export interface TitleItemDataType {
    id: number;
    TitleName: string;
    url: string;
}

export interface HeroCardDataType {
    id: number;
    Title: string;
    SubTitle:string;
    Description: string;
    PosY:string;
    Delay:number;
    Image:string;
    Url: string;
  }

  export interface HeroCardsTypes {
    Title: string;
    SubTitle: string;
    Description: string;
    Image: string;
    Url: string;
    Delay : number;
    PosY:string;
    FadeIn :  (Delay:number, PosY: string) => Variants;
    
}
export interface CoinsCarruselDataType {
    id:number;
    Icon:As | undefined;
    CoinName:string;
    Perce:string;
  }

export interface CarruselTypes {
    Icons:As | undefined;
    CoinName:string;
    Perce:string;
}

export interface ParallaxProps {
  children: string;
  baseVelocity: number;
}


export interface Hamburger {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen:boolean;
}


export type ToggleType = {
  pass1: boolean;
  pass2: boolean;
};
