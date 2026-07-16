// import
import MyPProjectCards from "./MyProjecyCards";
import { useEffect, useState } from "react";
import { CustomDivider } from "../../components";
// mui
import { Alert, Card, CardContent, Grid, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
// react icons
import { HiOutlineComputerDesktop } from "react-icons/hi2";
// set jsx
const MyProjects = () => {
  // state
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    return () => {
      setloading(false);
    };
  }, []);
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
          text=" نمونه کارهای من"
          icon={
            <HiOutlineComputerDesktop
              style={{ marginRight: "0.5rem", fontSize: "1.2rem" }}
            />
          }
        />
        <Alert sx={{ mt: 4, mx: 3 }} variant="standard" severity="warning">
          به دلیل استفاده از سرویس های خارجی اگر پروژه ها ارور دادند از vpn
          استفاده کنید
        </Alert>
        <Grid container spacing={3.5} sx={{ mt: 4 }}>
          <MyPProjectCards loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default MyProjects;
