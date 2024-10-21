import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import ContextProv from "./context/ContextProv";

function App() {
  return (
    <ContextProv>
      <Navbar />
      <Outlet />
      <Footer />
    </ContextProv>
  );
}

export default App;
