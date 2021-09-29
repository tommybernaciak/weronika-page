import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>
    <main>{children}</main>
    <footer>footer</footer>
  </div>
);

export default Layout;
