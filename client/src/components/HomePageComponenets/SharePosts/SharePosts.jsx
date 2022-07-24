import React, { useState, useRef } from "react";
import "./SharePosts.css";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlineSlowMotionVideo,
  MdLocationPin,
  MdOutlineCalendarToday,
} from "react-icons/md";
import {FaTimes} from 'react-icons/fa'
const SharePosts = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="shareposts">
      <img src={`${window.location.origin}/img/profileImg.jpg`} alt="" />
      <div>
        <input type="text" placeholder="What's cool ?" />
        <div className="shareOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <MdOutlinePhotoSizeSelectActual />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <MdOutlineSlowMotionVideo />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <MdLocationPin />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <MdOutlineCalendarToday />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && <div className="previewImage">
          <FaTimes onClick={()=>setImage(null)}/>
          <img src={image.image} />
          </div>}
      </div>
    </div>
  );
};

export default SharePosts;
