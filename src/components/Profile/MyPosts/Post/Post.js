import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={p.item}>
      <img
        src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
        alt=""
      />
      {props.message}
      <div>
        <span>Like</span>
        <span>Dislike</span>
      </div>
    </div>
  );
};

export default Post;
