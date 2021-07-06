import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPost = React.createRef(); 

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={p.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
            ref={newPost} 
            value={props.newPostText} 
            onChange={onPostChange} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={p.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
