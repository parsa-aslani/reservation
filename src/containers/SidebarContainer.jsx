// import
import { useTheme } from "@mui/material";
// mui
import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
const SidebarContainer = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      size={{ xs: 0, md: 3, lg: 2 }}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[400],
        height: "100vh",
        overflow: "auto",
      }}
      className="sidebar-container"
    >
      {children}
    </Grid>
  );
};
export default SidebarContainer;
