import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SnackbarProvider } from "notistack";
import { AiOutlineInfoCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PayPalScriptProvider
    options={{
      "client-id": process.env.REACT_APP_PAYPAL_KEY,
    }}
  >
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2500}
      iconVariant={{
        success: (
          <AiOutlineCheckCircle
            color="inherit"
            style={{ marginRight: "10px" }}
          />
        ),
        error: <BiErrorAlt color="inherit" style={{ marginRight: "10px" }} />,
        info: (
          <AiOutlineInfoCircle
            color="inherit"
            style={{ marginRight: "10px" }}
          />
        ),
      }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </SnackbarProvider>
  </PayPalScriptProvider>
);
