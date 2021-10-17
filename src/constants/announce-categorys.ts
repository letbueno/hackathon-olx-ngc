import { FiTv, FiSmartphone } from "react-icons/fi";
import { BiBed, BiBasketball } from "react-icons/bi";
import { GrCar } from "react-icons/gr";
import { AiOutlineTool, AiOutlineSkin } from "react-icons/ai";
import {
  IoPawOutline,
  IoStorefrontOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { FaGuitar, FaBabyCarriage, FaTractor } from "react-icons/fa";

export const categories = [
  {
    label: "Imóveis",
    icon: FiTv,
  },
  {
    label: "Auto e peças",
    icon: GrCar,
  },
  {
    label: "Para a sua casa",
    icon: BiBed,
  },
  {
    label: "Eletrônicos e celulares",
    icon: FiSmartphone,
  },
  {
    label: "Música e hobbies",
    icon: FaGuitar,
  },
  {
    label: "Esportes e Lazer",
    icon: BiBasketball,
  },
  {
    label: "Artigos infantis",
    icon: FaBabyCarriage,
  },
  {
    label: "Animais de estimação",
    icon: IoPawOutline,
  },
  {
    label: "Moda e beleza",
    icon: AiOutlineSkin,
  },
  {
    label: "Agro e indústria",
    icon: FaTractor,
  },
  {
    label: "Comércio e escritório",
    icon: IoStorefrontOutline,
  },
  {
    label: "Serviços",
    icon: AiOutlineTool,
  },
  {
    label: "Vagas de emprego",
    icon: IoPersonOutline,
  },
];
