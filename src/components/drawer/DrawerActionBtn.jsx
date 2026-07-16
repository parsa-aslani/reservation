// import
// context
import { useContext } from "react";
import { MainContext } from "../../context";
// mui
import { Box, Fab, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
// react icons
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
const DrawerActionBtn = () => {
  const { opendrawer, setopendrawer } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Box sx={{ position: "absolute" }}>
      <Fab
        sx={{
          borderRadius: "0.4rem",
          backgroundColor:
            theme.palette.mode === "dark" ? grey[800] : grey[200],
          boxShadow: 6,
          m: 1.2,
          display: { xs: "block", md: "none" },
          ":hover": {
            backgroundColor:
              theme.palette.mode === "dark" ? grey[900] : grey[500],
          },
        }}
        className="icon"
        size="small"
        onClick={() => setopendrawer(!opendrawer)}
      >
        <HiOutlineBars3BottomRight
          style={{
            fontSize: "1.7rem",
            color: "#0f987dff",
            margin: "auto 0",
          }}
        />
      </Fab>
    </Box>
  );
};
export default DrawerActionBtn;
