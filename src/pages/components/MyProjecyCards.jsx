// import
import { myprojectsdata } from "../../const/myprojectsdata";
// mui
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Zoom,
  useTheme,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
// set jsx
const MyPProjectCards = ({ loading }) => {
  const theme = useTheme();
  return (
    <>
      {myprojectsdata.map((myproject, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Zoom in={loading} style={{ transitionDelay: `${index + 3}00ms` }}>
            <Card
              sx={{
                boxShadow: 15,
                borderRadius: "0.6rem",
                maxWidth: 340,
                mx: "auto",
                backgroundColor:
                  theme.palette.mode === "dark" ? grey[900] : grey[200],
              }}
            >
              <CardMedia
                component="img"
                image={myproject.image}
                alt={myproject.title}
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary" sx={{ mb: 1.5 }}>
                  {myproject.title}
                </Typography>
                <Divider />
                <Box sx={{ height: 75, mt: 1 }}>
                  <Typography variant="caption" color="textDisabled">
                    {myproject.info}
                  </Typography>
                </Box>
                <a
                  href={myproject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" sx={{ width: 1, boxShadow: 10 }}>
                    مشاهده نمونه کار
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </>
  );
};
export default MyPProjectCards;
