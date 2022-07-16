import React from "react";
import FollowersCard from "../followersCard/FollowersCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import Search from "../Search/Search";
import "./ProfileGrid.css"
const ProfileGrid = () => {
  return <div className="profileCols">
    <Search />
    <ProfileCard />
    <FollowersCard />
  </div>;
};

export default ProfileGrid;
