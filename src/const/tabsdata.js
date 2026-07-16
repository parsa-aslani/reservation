// react icons
import { IoHome } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaFileCode } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
// style
const iconstyle = { fontSize: "1.15rem" };
const tabindex = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
    sx: {
      minHeight: 40,
      my: "6px",
      py: "13px",
      maxWidth: "100%",
      transition: "all 0.4s",
      backgroundColor: "#031c1c17",
      borderRadius: "0.6rem",
      minWidth: "100%",
      "&.Mui-selected": {
        backgroundColor: "#008b8b27",
        borderRadius: "0rem",
      },
    },
  };
};
// tab data
export const tabsdata = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <IoHome style={iconstyle} />, ...tabindex(0) },
    {
      label: "درباره من",
      icon: <BsFillPersonVcardFill style={iconstyle} />,
      ...tabindex(1),
    },
    {
      label: "نمونه کارها",
      icon: <FaFileCode style={iconstyle} />,
      ...tabindex(2),
    },
    {
      label: "ارتباط با من",
      icon: <ImConnection style={iconstyle} />,
      ...tabindex(3),
    },
  ];
  return tabs;
};
