import { Typography, Box, LinearProgress, useTheme, Grid } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
const MySkill = ({ name, icon, barcolor, backbarcolor, value }) => {
  const theme = useTheme();
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        sx={{
          boxShadow: 18,
          py: 3,
          px: 2,
          borderRadius: 3,
          backgroundColor:
            theme.palette.mode === "dark" ? blueGrey[900] : blueGrey[200],
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {icon}
            {name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography sx={{ mr: 1 }} variant="body2">
              {value}%
            </Typography>
          </Box>
          <LinearProgress
            dir="rtl"
            variant="determinate"
            value={value}
            sx={{
              width: "90%",
              height: 7,
              borderRadius: "0.1rem",
              backgroundColor: backbarcolor,
              "& .MuiLinearProgress-bar": {
                backgroundColor: barcolor,
              },
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};
export default MySkill;
