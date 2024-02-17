import { AiFillBook, AiFillRead, AiOutlineLaptop } from "react-icons/ai";
import { FaChild, FaGraduationCap } from "react-icons/fa";
import { MdLibraryAdd, MdOutlineKeyboard, MdRouter, MdScanner, MdStorefront, MdTv, MdWatch } from "react-icons/md";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Books",
    icon: AiFillBook,
  },
  {
    label: "CBC",
    icon: AiOutlineLaptop,
  },
  {
    label: "ECDE",
    icon: FaChild,
  },
  {
    label: "Novels",
    icon: AiFillRead,
  },
  {
    label: "Tvet",
    icon: FaGraduationCap,
  },
  {
    label: "Secondary",
    icon: MdLibraryAdd,
  },
  {
    label: "Electronics",
    icon: MdRouter,
  },
  {
    label: "Stationery",
    icon: MdScanner,
  },
  {
    label: "Accesories",
    icon: MdOutlineKeyboard,
  },
];