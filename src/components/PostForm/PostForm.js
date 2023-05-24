import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./PostForm.module.css";

export default function PostForm() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //send post data to the server//
    // const response = await fetch("api/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ content }),
    // });

    // if (response.ok) {
    //   setContent("");
    // }
    postJoke();
    navigate("/");
  };

  function handleChange(evt) {
    setContent(evt.target.value);
  }
  const navigate = useNavigate();
  const postJoke = async () => {
    try {
      const response = await axios.post("/api/posts", { joke: content });
    } catch (err) {}
  };

  return (
    <div className={styles.container}>
      <h2>Create a post</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        {/*<input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
  />*/}
        <textarea
          placeholder="Yo mama..."
          value={content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
