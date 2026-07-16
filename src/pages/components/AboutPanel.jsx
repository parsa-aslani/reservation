import { Typography } from "@mui/material";
// react icons
import { RiArrowLeftSLine } from "react-icons/ri";
const AboutPanel = ({ label, text }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        my: 1.5,
      }}
    >
      <RiArrowLeftSLine style={{ fontSize: "1.7rem", color: "darkcyan" }} />{" "}
      {label} :<span style={{ margin: "0 0.5rem" }}>{text}</span>{" "}
    </Typography>
  );
};
export default AboutPanel;
