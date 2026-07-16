// import
// mui
import { Button } from "@mui/material";
// set jsx
const SohalMediaBtn = ({ name, icon, color1, color2, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button
        variant="contained"
        sx={{
          width: 270,
          fontSize: "1.1rem",
          my: 1,
          background: `linear-gradient(to right, ${color1},${color2})`,
          boxShadow: 10,
        }}
      >
        {name} {icon}
      </Button>
    </a>
  );
};
export default SohalMediaBtn;
