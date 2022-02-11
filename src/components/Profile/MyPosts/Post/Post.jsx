import React from "react";
import p from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={p.item}>
      <img
        src="https://cdn.vox-cdn.com/thumbor/n-eAupxM4Gc3fjq896eKxFjsPso=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19981067/avatar_sokka_lips.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
    
  );
};
export default Post;
