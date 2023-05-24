import UserLogOut from "../../components/UserLogOut/UserLogOut";
import { Link } from "react-router-dom";
import styles from "./PostHistory.module.css";

import { useState, useEffect } from "react";

import PostList from "../../components/PostList/PostList";
import NewPostPage from "../NewPostPage/NewPostPage";

export default function PostHistoryPage({ user, setUser }) {
  // //----State----//
  // const [post, setPosts] = useState([]);

  // //-----useEffect-----//
  // useEffect(function () {
  //   //load previous posts//
  //   async function fetchPostHistory() {
  //     const posts = await postAPI.getPostHistory();
  //     setPosts(posts);
  //   }
  //   fetchPostHistory();
  // }, []);
  return (
    <div className={styles.main}>
      <PostList />
      <NewPostPage />

      <UserLogOut user={user} setUser={setUser} />
    </div>
  );
}
