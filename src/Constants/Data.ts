import ImageCard1 from "../assets/Vector.png";
import { TitleItemDataType, HeroCardDataType, CoinsCarruselDataType} from "../Types/Types";
import { FaMonero, FaEthereum, FaViacoin } from "react-icons/fa";
import { SiCardano } from "react-icons/si";

export const TitleItemData: TitleItemDataType[] = [
  {
    id: 1,
    TitleName: "Wallet",
    url: "",
  },
  {
    id: 2,
    TitleName: "Exchange",
    url: "",
  },
  {
    id: 3,
    TitleName: "Explorer",
    url: "",
  },
  {
    id: 4,
    TitleName: "Institutional",
    url: "",
  },
];

export const HeroCardData: HeroCardDataType[] = [
  {
    id: 1,
    Title: "The best lighting",
    SubTitle: "For crypto wallet",
    PosY: "0px",
    Delay: 1, 
    Description:
      "BlackChain is the easiest Place to buy and sell cryptocurency. Sign up an get started today",
    Image: ImageCard1,
    Url: "",
  }
];

export const CoinsCarruselData :CoinsCarruselDataType[]= [
  {
    id: 1,
    Icon: FaEthereum,
    CoinName: "Etherium",
    Perce: "+2.58%",
  },
  {
    id: 2,
    Icon: FaMonero,
    CoinName: "Monero",
    Perce: "+3.20%",
  },
  {
    id: 3,
    Icon: FaViacoin,
    CoinName: "ViaCoin",
    Perce: "+2.34%",
  },
  {
    id:4,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id: 5,
    Icon: FaMonero,
    CoinName: "Monero",
    Perce: "+3.20%",
  },
  {
    id: 6,
    Icon: FaViacoin,
    CoinName: "ViaCoin",
    Perce: "+2.34%",
  },
  {
    id:7,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  }
  ,
  {
    id: 8,
    Icon: FaMonero,
    CoinName: "Monero",
    Perce: "+3.20%",
  },
  {
    id: 9,
    Icon: FaViacoin,
    CoinName: "ViaCoin",
    Perce: "+2.34%",
  },
  {
    id:10,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id:11,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id:12,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id:13,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id:14,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
  {
    id:15,
    Icon: SiCardano,
    CoinName: "Cardano",
    Perce: "+2.34%",
  },
];
