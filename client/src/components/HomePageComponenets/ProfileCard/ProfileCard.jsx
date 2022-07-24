import React from "react";
import "./ProfileCard.css";
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={`${window.location.origin}/img/cover.jpg`} alt="" />
        <img src={`${window.location.origin}/img/profileImg.jpg`} alt="" />
      </div>
      <div className="profileDetails">
        <span>Aditya Rawas</span>
        <span>Senior JavaScript Developer</span>
      </div>
      <div className="followersfollowing">
        <hr />
        <div>
          <div className="follow">
            <span>6,89</span>
            <span>Followings</span>
          </div>
          <div className="verticalLine"></div>
          <div className="follow">
            <span>6,89</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="verticalLine"></div>
              <div className="follow">
                <span>10</span>
                <span>
                  Posts
                </span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ?  "" : <span>My Profile</span>}
      
    </div>
  );
};

export default ProfileCard;
