import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/newspaper" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/listen" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/sett" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
