// import
import { darktheme, lighttheme } from "./themes/theme";
// mui
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { Grid } from "@mui/material";
// react helmet
import { Helmet, HelmetProvider } from "react-helmet-async";
// rtl mui
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const MainLayout = ({ children, mode }) => {
  const theme = mode === "dark" ? darktheme : lighttheme;
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت رزرومه پارسا اصلانی</title>
          </Helmet>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
