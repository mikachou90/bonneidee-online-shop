import "../styles/root.scss";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoSticker from "../components/InfoSticker";
import Auth0AppProvider from "../Auth0AppProvider";

export default function Root() {
  return (
    <Auth0AppProvider>
      <Header />
      <div id="globalWrapper">
        <Outlet />

        <InfoSticker />
      </div>
      <Footer />
    </Auth0AppProvider>
  );
}
