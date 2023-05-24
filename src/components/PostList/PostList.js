import { useEffect, useState } from "react";
import styles from "./PostList.module.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //fetch posts from the server
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts([...data]);
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.postList}>
      <h2>Yo Mama Jokes</h2>
      {posts.length ? (
        <div>
          {posts.map((post) => {
            return <div key={post._id}>{post.joke}</div>;
          })}
        </div>
      ) : (
        "No jokes posted: ..."
      )}
    </div>
  );
}
