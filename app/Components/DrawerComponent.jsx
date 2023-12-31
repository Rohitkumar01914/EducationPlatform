"use client";
import { List, ListItemButton, ListItemIcon } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useState } from "react";

const pages = ["Home", "All-Course", "Success-story", "Hire-with-us", "Blog"];

const DrawerComponent = () => {
  const [rvalue, setValue] = useState(false);

  return (
    <div>
      <Drawer open={rvalue} onClose={() => setValue(false)}>
        {" "}
        <span
          onClick={() => setValue(false)}
          className="absolute right-4 top-2 cursor-pointer text-blue-600"
        >
          ✕
        </span>
        <List sx={{ margin: "2rem" }}>
          <a href="/">
            <img
              src="/Logo.svg"
              className="absolute top-[-2rem] left-[-14px]"
              width={150}
              alt="Logo"
            />
          </a>

          {pages.map((page, index) => (
            <ListItemButton onClick={() => setValue(false)} key={index}>
              <ListItemIcon sx={{ marginLeft: "4px" }}>
                {page === "Home" ? (
                  <Link href={`/`}>Home</Link>
                ) : (
                  <Link href={`/${page}`}>{page}</Link>
                )}
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <span
        onClick={() => setValue(!rvalue)}
        className="cursor-pointer text-2xl ml-[2rem] text-blue-600"
      >
        ☰
      </span>
    </div>
  );
};

export default DrawerComponent;
