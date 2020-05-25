import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return <div>
        <div>
          My posts 2
          <div>
            New posts
          </div>
        </div>
        <div>
            <Posts />
            <Posts />
            <Posts />
            <Posts />

        </div>
  </div>;
}

export default MyPosts;
