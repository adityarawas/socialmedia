import React from "react";
import PostsGrid from "../../components/PostsGrid/PostsGrid";
import ProfileGrid from "../../components/ProfileGrid/ProfileGrid";
import RightGrid from "../../components/RightGrid/RightGrid";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <ProfileGrid />
      <PostsGrid />
      <RightGrid />
    </div>
  );
};

export default Home;
