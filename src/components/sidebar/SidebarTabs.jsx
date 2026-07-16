// import
import { tabsdata } from "../../const/tabsdata";
// context
import { useContext } from "react";
import { MainContext } from "../../context";
// mui
import { Tabs, Tab, useTheme } from "@mui/material";
const SidbarTabs = ({ showitems, hiddenitems }) => {
  const { setopendrawer, pagenumber, handlepagenumber } =
    useContext(MainContext);
  const data = tabsdata();
  const theme = useTheme();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
      value={pagenumber}
      onChange={handlepagenumber}
      sx={{ display: { xs: showitems, md: hiddenitems }, width: "85%" }}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          {...tab}
          onClick={() => setopendrawer(false)}
        />
      ))}
    </Tabs>
  );
};
export default SidbarTabs;
