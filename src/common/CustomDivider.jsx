import { Divider, Typography } from "@mui/material";

const CustomDivider = ({ icon, text }) => {
  return (
    <Divider
      variant="fullWidth"
      sx={{
        color: "secondary.main",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {text}
        {icon}
      </Typography>
    </Divider>
  );
};
export default CustomDivider;
