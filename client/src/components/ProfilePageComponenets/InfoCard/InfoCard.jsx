import React from "react";
import "./InfoCard.css";
import { BsPencil } from "react-icons/bs";
const InfoCard = () => {
  return (
    <div className="infoCard">
      <div className="infoHeader">
        <h4>Your Information</h4>
        <button>
        <BsPencil />
        </button>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span> Married</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in</b>
        </span>
        <span> Maharashtra</span>
      </div>
      <div className="info">
        <span>
          <b>Works at</b>
        </span>
        <span> Indie Developers</span>
      </div>
      <button className="button logout-button">Log out</button>
    </div>
  );
};

export default InfoCard;
