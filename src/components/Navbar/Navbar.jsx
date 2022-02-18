import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
const Navbar = (props) => {
  const friends = props.sidebar.users.map((el) => (
    <div className={s.friend}>
      <div className={s.circle}></div>
      <div className={s.name}>{el.name}</div>
    </div>
  ));

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
      <div className={s.friend}>
        <h4>Friends</h4>

        <div className={s.friends}>{friends}</div>
      </div>
    </nav>
  );
};
export default Navbar;
