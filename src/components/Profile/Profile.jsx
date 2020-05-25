import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <div>
          <img src='https://demo.hasthemes.com/adda-preview/adda/assets/images/banner/profile-banner.jpg'></img>
        </div>
        <div className={s.user}>
          ava + description
          <img src='data:image/jpeg;base64,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'/>
        </div>
        <MyPosts />
  </div>;
}

export default Profile;
