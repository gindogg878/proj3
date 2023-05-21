import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import PostHistoryPage from "./pages/PostHistoryPage/PostHistoryPage";
import NewPostPage from "./pages/NewPostPage/NewPostPage";

function App() {
  return (
    <div className="App">
      <h1>Hello just starting</h1>
      <AuthPage />
      <PostHistoryPage />
      <NewPostPage />
    </div>
  );
}

export default App;
