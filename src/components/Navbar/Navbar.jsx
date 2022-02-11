import React from "react";
import c from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className= {c.nav}>
      <div className= {c.item}>
        <a>Profile</a>
      </div>
      <div className= {`${c.item} ${c.active}`}>
        <a>Message</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;
