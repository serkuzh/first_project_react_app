import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.logodesign.net/images/illustration-logo.png"
          alt=""
        />
      </div>

      <div className={s.discriptionBlock}>ava + discription</div>
    </div>
  );
};
export default ProfileInfo;
