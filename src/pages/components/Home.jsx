// import
import forestanime from "../../assets/image/digital-art-style-river-nature-landscape-min.jpg";
import { useRef, useEffect, useMemo } from "react";
// mui
import { Box, Typography } from "@mui/material";
// typed js
import Typed from "typed.js";
// react Particles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { stars } from "../../const/particles";
// set jsx
const Home = () => {
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const strings = useMemo(
    () => [
      "من یک برنامه نویس هستم",
      "من یک طراح وب هستم",
      "من یک توسعه دهنده فرانت اند هستم",
    ],
    [],
  );
  useEffect(() => {
    const typename = new Typed(nameEl.current, {
      strings: ["پارسا اصلانی"],
      typeSpeed: 15,
      backSpeed: 30,
      backDelay: 15,
      showCursor: false,
    });
    const typeinfo = new Typed(infoEl.current, {
      strings,
      startDelay: 1000,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
      showCursor: false,
    });
    return () => {
      typename.destroy();
      typeinfo.destroy();
    };
  }, [strings]);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${forestanime})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          backdropFilter: "brightness(50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="ali"
      >
        <Particles id="tsparticles" options={stars} />
        <Typography
          ref={nameEl}
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#ffffff",
          }}
        ></Typography>
        <Typography
          ref={infoEl}
          variant="h5"
          sx={{
            textAlign: "center",
            color: "#bbc4d1ed",
            mt: 2,
          }}
        ></Typography>
      </Box>
    </Box>
  );
};
export default Home;
