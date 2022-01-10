import { AiFillHome } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";
import { TiThLarge } from "react-icons/ti";

export const SidebarData = [
  { title: "Home", icon: <AiFillHome />, path: "", sub: false },
  {
    title: "Category",
    icon: <ImPriceTag />,
    path: "",
    sub: [
      { title: "Fiction", path: "" },
      { title: "Nonfiction", path: "" },
      { title: "Lifestyle", path: "" },
      { title: "Health & Fitness", path: "" },
      { title: "Art & Design", path: "" },
      { title: "Music", path: "" },
    ],
  },
  { title: "Wishlist", icon: <TiThLarge />, path: "", sub: false },
];
