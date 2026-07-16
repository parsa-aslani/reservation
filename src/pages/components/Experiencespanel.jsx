// import
// mui
import { Box, Tooltip, Typography, Zoom } from "@mui/material";
import CountUp from "react-countup";
// set jsx
const ExperiencesPanel = ({
  number,
  tooltiptitle,
  color,
  bordercolor,
  icon,
}) => {
  return (
    <Tooltip
      title={tooltiptitle}
      arrow
      placement="top"
      slots={{
        transition: Zoom,
      }}
    >
      <Box
        sx={{
          backgroundColor: color,
          width: 230,
          textAlign: "center",
          py: 1.2,
          borderRadius: "0.3rem",
          boxShadow: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: 2,
          borderColor: bordercolor,
          mx: "auto",
          my: 1.5,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", color: "#dadadaff" }}
        >
          <CountUp start={0} end={number} duration={3.5} />
        </Typography>
        {icon}
      </Box>
    </Tooltip>
  );
};
export default ExperiencesPanel;
