import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>
    <main className="mt-8">{children}</main>
    <footer>footer</footer>
  </div>
);

export default Layout;
