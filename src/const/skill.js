import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaSquareJs, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
export const devSkill = {
  htmlSkill: {
    name: "HTML",
    icon: (
      <IoLogoHtml5
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(242,101,41)",
        }}
      />
    ),
    barcolor: "rgba(242,101,41,0.9)",
    backbarcolor: "rgba(242, 101, 41, 0.4)",
  },
  cssSkill: {
    name: "CSS",
    icon: (
      <IoLogoCss3
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(10,113,186)",
        }}
      />
    ),
    barcolor: "rgba(10,113,186,0.9)",
    backbarcolor: "rgba(10, 113, 186, 0.4)",
  },
  jsSkill: {
    name: "JAVASCRIPT",
    icon: (
      <FaSquareJs
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(240,192,43)",
        }}
      />
    ),
    barcolor: "rgba(240,192,43,0.9)",
    backbarcolor: "rgba(240, 192, 43, 0.4)",
  },
  reactSkill: {
    name: "REACT",
    icon: (
      <FaReact
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(16,130,167)",
        }}
      />
    ),
    barcolor: "rgba(16,130,167,0.9)",
    backbarcolor: "rgba(16, 130, 167, 0.4)",
  },
  tailwindSkill: {
    name: "TAILWIND",
    icon: (
      <SiTailwindcss
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(0,188,255)",
        }}
      />
    ),
    barcolor: "rgba(0, 187, 255, 0.9)",
    backbarcolor: "rgba(0, 187, 255, 0.4)",
  },
  nextjsSkill: {
    name: "NEXTJS",
    icon: (
      <RiNextjsFill
        style={{
          fontSize: "1.7rem",
          marginLeft: "0.4rem",
          color: "rgb(0, 0, 0)",
        }}
      />
    ),
    barcolor: "rgba(0, 0, 0, 0.9)",
    backbarcolor: "rgba(0, 0, 0, 0.4)",
  },
};
