import React from "react";
import "./FollowersCard.css";
const Followers = () => {
  return (
    <div className="followers">
      <div>
        <img src={`${window.location}/img/img1.png`} className="followingImage" />
        <div className="name">
          <span>Aditya Rawas</span>
          <span>@adiraw28</span>
        </div>
      </div>
      <button className="button followbutton">Follow</button>
    </div>
  );
};

export default Followers;
