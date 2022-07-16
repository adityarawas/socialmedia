import React from "react";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import ProfileGrid from "../../components/ProfileGrid/ProfileGrid";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <ProfileGrid />
      <PostsGrid />
      <div className="RightCols">Right</div>
    </div>
  );
};

export default Home;
