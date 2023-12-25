"use client";
//Using Themeprovider to add dark mode to the application for better UI and UX

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>;

export default Providers;
