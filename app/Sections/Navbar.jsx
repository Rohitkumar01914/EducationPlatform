import DrawerComponent from "@app/Components/DrawerComponent";
import Link from "next/link";

const pages = ["Home", "All-Course", "Success-story", "Hire-with-us", "Blog"];

const Navbar = () => {
  return (
    <nav className="nav-class fixed w-full z-50 bg-white">
      <span className="lg:hidden md:visible">
        <DrawerComponent />
      </span>
      <a href="/">
        <img className="ml-2" src="/Logo.svg" width="100" alt="" />
      </a>

      <ul className="navlist-class">
        {pages.map((page, index) => (
          <li className="listitem-class" key={index}>
            <Link href={page === "Home" ? "/" : `#${page}`}>{page}</Link>
          </li>
        ))}
      </ul>

      <Link className="ml-auto" href="/Contact">
        <button className="contactbtn-class">Contact</button>
      </Link>
    </nav>
  );
};

export default Navbar;
