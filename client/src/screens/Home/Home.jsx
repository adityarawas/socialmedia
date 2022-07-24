import React from "react";
import PostsGrid from "../../components/HomePageComponenets/PostsGrid/PostsGrid";
import ProfileGrid from "../../components/HomePageComponenets/ProfileGrid/ProfileGrid";
import RightGrid from "../../components/HomePageComponenets/RightGrid/RightGrid";
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
