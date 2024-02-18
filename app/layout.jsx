// RootLayout.js

import React from "react";
import Footer from "./Sections/Footer";
import Navbar from "./Sections/Navbar";
import "./globals.css";

export const metadata = {
  title: "LeeLa",
  description: "Online platform for Programming Courses",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main>
        <header>
          <Navbar />
        </header>

        {children}
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
