import React from "react";
import h from "./Header.module.css";
const Header = () => {
  return (
    <header className={h.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png"
        alt=""
      />
    </header>
  );
};
export default Header;
