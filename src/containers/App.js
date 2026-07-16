// import
import { useEffect, useState } from "react";
import {
  MainLayout,
  Sidebar,
  PagesContainer,
  PagePanel,
  SidebarContainer,
  DrawerActionBtn,
  Home,
  AboutMe,
  MyProjects,
  ConectMe,
} from "../components/index";
import "../style.css";
// context
import { MainContext } from "../context";
// mui
import { useMediaQuery, useTheme } from "@mui/material";
// set jsx
function App() {
  // state
  const [pagenumber, setpagenumber] = useState(0);
  const [opendrawer, setopendrawer] = useState(false);
  const [mode, setmode] = useState(null);
  // set defaulte mode
  const preferstheme = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setmode(preferstheme ? "dark" : "light");
  }, [setmode]);
  // control drawer
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (isMdUp) {
      setopendrawer(false);
    }
  }, [isMdUp]);
  // control tabs
  const handlepagenumber = (event, newvalue) => {
    setpagenumber(newvalue);
  };
  // handle mode
  const handlechangemode = () => {
    setmode((pervmode) => (pervmode === "dark" ? "light" : "dark"));
  };
  return (
    <MainContext.Provider
      value={{
        pagenumber,
        opendrawer,
        setopendrawer,
        handlepagenumber,
        handlechangemode,
      }}
    >
      <MainLayout mode={mode}>
        <DrawerActionBtn />
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <PagesContainer>
            <PagePanel pagenumber={pagenumber} index={0}>
              <Home />
            </PagePanel>
            <PagePanel pagenumber={pagenumber} index={1}>
              <AboutMe />
            </PagePanel>
            <PagePanel pagenumber={pagenumber} index={2}>
              <MyProjects />
            </PagePanel>
            <PagePanel pagenumber={pagenumber} index={3}>
              <ConectMe />
            </PagePanel>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
