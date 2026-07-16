// import
// react icons
import { CgWebsite } from "react-icons/cg";
import { FaClock } from "react-icons/fa6";
import { BsEmojiGrinFill } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";
// mui
import { blue, brown, deepPurple, red } from "@mui/material/colors";

const style = { marginRight: "0.6rem", fontSize: "1.2rem", color: "#f6f3f3ff"  };
export const experiencesdata = [
  {
    number: 50,
    tooltiptitle: "تعداد پروژه های انجام شده",
    icon: <CgWebsite style={style} />,
    color: blue[600],
    bordercolor: blue[300],
  },
  {
    number: 4,
    tooltiptitle: "تعداد سال برنامه نویسی",
    icon: <FaClock style={style} />,
    color: red[600],
    bordercolor: red[300],
  },
  {
    number: 26,
    tooltiptitle: "تعداد مشتریان راضی",
    icon: <BsEmojiGrinFill style={style} />,
    color: deepPurple[500],
    bordercolor: deepPurple[300],
  },
  {
    number: 753,
    tooltiptitle: "تعداد قهوه های خورده شده",
    icon: <GiCoffeeCup style={style} />,
    color: brown[600],
    bordercolor: brown[300],
  },
];
