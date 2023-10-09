import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./AppRoutes/AppRoutes";
import Footer from "./components/Footer";
// import DeBouncing from "./pages/DeBouncing";

const App = () => {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
      {/* <DeBouncing /> */}
    </>
  );
};

export default App;
