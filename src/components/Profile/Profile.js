import React from "react";
import p from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div className={p.content}>
      <ProfileInfo />
      <div className={p.posts}>
        <MyPostsContainer
          store={props.store}
        />
      </div>
    </div>
  );
};

export default Profile;
