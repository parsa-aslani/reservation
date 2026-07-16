// import
import { SidebarContent } from "../index";
// context
import { useContext } from "react";
import { MainContext } from "../../context";
// mui
import { Drawer, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
// set jsx
const SidevarDrawer = () => {
  const { opendrawer, setopendrawer } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Drawer
      anchor="top"
      open={opendrawer}
      variant="temporary"
      onClose={() => {
        setopendrawer(false);
      }}
      sx={{
        "& .MuiDrawer-paper": {
          width: 235,
          backgroundColor:
            theme.palette.mode === "dark" ? grey[900] : grey[400],
          height: 1,
          display: { xs: "bloke", md: "none" },
        },
      }}
    >
      <SidebarContent showitems="flex" hiddenitems="flex" />
    </Drawer>
  );
};
export default SidevarDrawer;
