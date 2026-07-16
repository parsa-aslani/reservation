// import
import letstalk from "../../assets/image/lets-talk.gif";
import CoustomDivider from "../../common/CustomDivider";
import ConectMeForm from "./ConectMeForm";
// mui
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
// react icons
import { GrContact } from "react-icons/gr";
const ConectMe = () => {
  return (
    <Card
      sx={{
        height: "100vh",
        borderRadius: 0,
        overflow: "auto",
      }}
    >
      <CardContent>
        <CoustomDivider
          text="ارتباط با من"
          icon={
            <GrContact style={{ marginRight: "0.5rem", fontSize: "1.2rem" }} />
          }
        />
        <Box
          className="email-box"
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: 15,
            mx: "auto",
            borderRadius: "1rem",
          }}
        >
          <Box>
            <Typography variant="h5">میخوای با هم صحبت کنیم ؟</Typography>
            <Typography
              variant="inherit"
              color="textSecondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1.5,
              }}
            >
              پس بهم
              <a
                href="mailto:parsa.aslani@gmail.com"
                style={{
                  margin: "0 6px",
                  color: "#17ad80ff",
                  textDecoration: "none",
                }}
              >
                ایمیل
              </a>
              بزن
            </Typography>
          </Box>
          <Avatar
            src={letstalk}
            alt="lets-talk"
            className="email-image"
            sx={{
              width: 140,
              height: 140,
            }}
            variant="square"
          />
        </Box>
        <ConectMeForm />
      </CardContent>
    </Card>
  );
};
export default ConectMe;
