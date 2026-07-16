// import
// mui
import { Box, Typography, Divider } from "@mui/material";
// react icons
import { FaHeart } from "react-icons/fa";
import { SidebarHeader, SidebarTabs } from "..";
// set jsx
const SidebarContent = ({ showitems, hiddenitems }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
      }}
    >
      <SidebarHeader showitems={showitems} hiddenitems={hiddenitems} />
      <Divider variant="fullWidth" sx={{ width: "90%", my: 1.2 }} />
      <SidebarTabs showitems={showitems} hiddenitems={hiddenitems} />
      <Divider variant="fullWidth" sx={{ width: "90%", my: 1.2 }} />
      <Typography
        color="textDisabled"
        variant="subtitle1"
        sx={{
          display: { xs: showitems, md: hiddenitems },
          mb: 2,
          alignItems: "center",
        }}
      >
        ساخته شده با{" "}
        <FaHeart
          style={{
            marginRight: "5px",
            verticalAlign: "middle",
            color: "#e41d1de1",
          }}
        />
      </Typography>
    </Box>
  );
};
export default SidebarContent;
