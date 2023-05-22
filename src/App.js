import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import PostHistoryPage from "./pages/PostHistoryPage/PostHistoryPage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      {user ? (
        <>
          <Routes>
            <Route
              path="/posts"
              element={<PostHistoryPage user={user} setUser={setUser} />}
            />
            <Route
              path="/posts/new"
              element={<NewPostPage user={user} setUser={setUser} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
