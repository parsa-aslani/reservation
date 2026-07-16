// import
import bugMugIcon from "../../assets/image/bugmug.png";
import AboutPanel from "./AboutPanel";
import SohalMediaBtn from "./SohalMediaBtn";
import { CustomDivider, MyExperiences } from "../../components/index";
import AboutSkills from "./AboutSkills";
// mui
import { Box, Card, CardContent, Avatar, Grid } from "@mui/material";
// react icons
import {
  FaCode,
  FaUserTie,
  FaGithub,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";
// set jsx
const AboutMe = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        borderRadius: 0,
        overflow: "auto",
      }}
    >
      <CardContent>
        <CustomDivider
          text="توسعه دهنده برنامه نویسی فرانت اند"
          icon={
            <FaCode style={{ marginRight: "0.5rem", fontSize: "1.2rem" }} />
          }
        />
        <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
          <Box className="aboutme-box">
            <Box
              sx={{
                mx: "auto",
                my: { xs: 3, lg: "auto" },
                borderRadius: "1rem",
                boxShadow: 15,
                px: 3,
                py: 3,
                display: "flex",
                flexDirection: "column",
                order: { xs: 2, lg: 1 },
              }}
            >
              <SohalMediaBtn
                name="GIT HUB"
                icon={
                  <FaGithub
                    style={{
                      fontSize: "1.3rem",
                      marginRight: "0.5rem",
                    }}
                  />
                }
                color1="rgb(33,36,41)"
                color2="rgba(15, 16, 17, 1)"
                url={"https://github.com/parsa-aslani"}
              />
              <SohalMediaBtn
                name="INSTAGRAM"
                icon={
                  <FaInstagram
                    style={{
                      fontSize: "1.3rem",
                      marginRight: "0.5rem",
                    }}
                  />
                }
                color1="rgba(239, 97, 92, 1)"
                color2="rgba(199, 68, 166, 1)"
                url={"https://www.instagram.com/bugmug.dev/"}
              />
              <SohalMediaBtn
                name="TELEGRAM"
                icon={
                  <FaTelegram
                    style={{
                      fontSize: "1.3rem",
                      marginRight: "0.5rem",
                    }}
                  />
                }
                color1="rgba(90, 181, 220, 1)"
                color2="rgba(18, 117, 167, 1)"
                url={"https://web.telegram.org/k/#@P5367w8"}
              />
            </Box>
            <Avatar
              src={bugMugIcon}
              alt="my-image"
              sx={{
                borderRadius: "0.5rem",
                width: 220,
                height: 220,
                boxShadow: "0px 0px 15px #2e2e2e",
                mx: { xs: "auto", lg: 3 },
                order: { xs: 1, lg: 2 },
              }}
            />
            <Box
              sx={{
                my: "auto",
                borderRadius: "1rem ",
                boxShadow: 15,
                p: 1,
                order: 3,
              }}
            >
              <AboutPanel label="نام و نام خانوادگی" text="پارسا اصلانی" />
              <AboutPanel label="محل سکونت" text="استان مازندران - امل" />
              <AboutPanel
                label="ادرس ایمیل"
                text="parsa.aslani1390@gmail.com"
              />
              <AboutPanel label="سن" text="16" />
              <AboutPanel label="شماره تماس" text="09054060391" />
            </Box>
          </Box>
        </Box>
        {/* <MyExperiences /> */}
        <CustomDivider
          text="مهارت های من"
          icon={
            <FaUserTie style={{ marginRight: "0.5rem", fontSize: "1.2rem" }} />
          }
        />
        <Grid container sx={{ mt: 3 }} spacing={2}>
          <AboutSkills />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AboutMe;
