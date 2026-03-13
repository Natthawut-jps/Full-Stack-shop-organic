import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { CartProvider } from "./pages/unities/HandleCart";

export default function RootApp() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID || ""}>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}
