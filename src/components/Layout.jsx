import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {

  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <section className="overflow-hidden bg-[#F5F4F4] w-screen">{children}</section>
    </div>
  );
};

export default Layout;
