import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
const MyPosts = (props) => {
 console.log(props)
  
  let postsElement = props.posts.posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} />
    
  ));
  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
    { postsElement}
      </div>
    </div>
  );
};
export default MyPosts;
