import React from "react";
import Posts from "./MyPosts/Posts";
import p from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img
          src="https://www.logodesign.net/images/illustration-logo.png"
          alt=""
        />
      </div>

      <div>ava + discription</div>
      <Posts/>
    </div>
  );
};
export default Profile;
