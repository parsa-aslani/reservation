// import
import bugMugIcon from "../../assets/image/bugmug.png";
import { RandomReveal } from "react-random-reveal";
import { persianLetters } from "../../const/persionletters";
// context
import { useContext } from "react";
import { MainContext } from "../../context";
// react icons
import { IoSunny, IoMoon } from "react-icons/io5";
// mui
import { Avatar, Typography, Button, useTheme } from "@mui/material";
const SidebarHeader = ({ showitems, hiddenitems }) => {
  const { handlechangemode } = useContext(MainContext);
  const theme = useTheme();
  return (
    <>
      <Avatar
        sx={{
          width: 160,
          height: 160,
          borderRadius: "1rem",
          boxShadow: 7,
          display: { xs: showitems, md: hiddenitems },
          justifyContent: "center",
          alignItems: "center",
        }}
        alt="my-image"
        src={bugMugIcon}
      />
      <Typography variant="h5" sx={{ mt: 1 }} color="textSecondary">
        پارسا اصلانی
      </Typography>
      <Typography variant="caption" sx={{ mt: "2px" }} color="textDisabled">
        <RandomReveal
          isPlaying
          duration={3}
          characters="توسعه دهنده برنامه نویسی فرانت اند"
          characterSet={persianLetters}
        />
      </Typography>
      <Button
        endIcon={
          theme.palette.mode === "dark" ? (
            <IoSunny style={{ fontSize: "1.3rem" }} />
          ) : (
            <IoMoon style={{ fontSize: "1.3rem" }} />
          )
        }
        sx={{
          width: "140px",
          padding: "0.3rem 0rem",
          borderRadius: "0.4rem",
          marginTop: "0.7rem",
          fontSize: "1rem",
        }}
        onClick={handlechangemode}
        variant="contained"
      >
        {theme.palette.mode === "dark" ? "روز" : "شب"}
      </Button>
    </>
  );
};
export default SidebarHeader;
