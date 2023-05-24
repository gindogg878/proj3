import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import PostHistoryPage from "../PostHistoryPage/PostHistoryPage";
import NewPostPage from "../NewPostPage/NewPostPage";

export default function App() {
  const [user, setUser] = useState(getUser());
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
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/posts/" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
