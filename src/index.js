// import
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
// react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// toast
import { Bounce, ToastContainer } from "react-toastify";
// render
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
    <App />
  </React.StrictMode>,
);
