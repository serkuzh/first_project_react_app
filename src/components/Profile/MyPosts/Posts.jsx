import React from "react";
import Post from "./Post/Post";
import p from "./Posts.module.css";
const Posts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={p.posts}>
        <Post message="Hi, how are you" like="15" />
        <Post message="It's my first post" like="25" />
      </div>
    </div>
  );
};
export default Posts;
