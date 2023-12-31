import ThemeButton from "./Components/ThemeButton";
import Providers from "./Providers";
import Navbar from "./Sections/Navbar";
import "./globals.css";

export const metadata = {
  title: "LeeLa",
  description: "Online platform for Programming Courses",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Providers>
        <ThemeButton />
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
