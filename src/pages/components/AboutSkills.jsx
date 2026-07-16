// import
import MySkill from "./MySkill";
import { useEffect, useState } from "react";
import { devSkill } from "../../const/skill";
// mui
import skillValue from "../../common/skillValue";
// set jsx
const AboutSkills = () => {
  const {
    cssSkill,
    htmlSkill,
    jsSkill,
    reactSkill,
    tailwindSkill,
    nextjsSkill,
  } = devSkill;
  // state
  const [javascript, setjavascript] = useState(0);
  const [html, sethtml] = useState(0);
  const [css, setcss] = useState(0);
  const [react, setreact] = useState(0);
  const [bootstrap, setbootstrap] = useState(0);
  const [nextjs, setnextjs] = useState(0);
  useEffect(() => {
    const progrestimer = setInterval(() => {
      setjavascript((prevdata) => skillValue(prevdata, 70));
      sethtml((prevdata) => skillValue(prevdata, 80));
      setcss((prevdata) => skillValue(prevdata, 75));
      setreact((prevdata) => skillValue(prevdata, 75));
      setbootstrap((prevdata) => skillValue(prevdata, 80));
      setnextjs((prevdata) => skillValue(prevdata, 65));
    }, 60);
    return () => {
      clearInterval(progrestimer);
    };
  }, []);
  return (
    <>
      <MySkill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        barcolor={htmlSkill.barcolor}
        backbarcolor={htmlSkill.backbarcolor}
        value={html}
      />
      <MySkill
        name={cssSkill.name}
        icon={cssSkill.icon}
        barcolor={cssSkill.barcolor}
        backbarcolor={cssSkill.backbarcolor}
        value={css}
      />
      <MySkill
        name={jsSkill.name}
        icon={jsSkill.icon}
        barcolor={jsSkill.barcolor}
        backbarcolor={jsSkill.backbarcolor}
        value={javascript}
      />
      <MySkill
        name={reactSkill.name}
        icon={reactSkill.icon}
        barcolor={reactSkill.barcolor}
        backbarcolor={reactSkill.backbarcolor}
        value={react}
      />
      <MySkill
        name={nextjsSkill.name}
        icon={nextjsSkill.icon}
        barcolor={nextjsSkill.barcolor}
        backbarcolor={nextjsSkill.backbarcolor}
        value={nextjs}
      />
      <MySkill
        name={tailwindSkill.name}
        icon={tailwindSkill.icon}
        barcolor={tailwindSkill.barcolor}
        backbarcolor={tailwindSkill.backbarcolor}
        value={bootstrap}
      />
    </>
  );
};
export default AboutSkills;
