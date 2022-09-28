import React from "react";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import "./Posts.css"

const Posts: React.FC = () => {
  return (
    <div className="post">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Posts;
