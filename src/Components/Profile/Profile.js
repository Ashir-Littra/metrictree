import React from "react";
import "./profile.css";
import logo from "../../assets/logoProfile.png";
import avatar from "../../assets/avatar.png";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-contents">
        <div className="profile-logo">
          <img src={logo} alt="" className="logo-image" />
          <h1>Zence</h1>
        </div>
        <div className="profile-picture">
          <img src={avatar} alt="" className="profile-picture-image"/>
          <p>welcome back</p>
          <h2>Walter White</h2>
        </div>
        <div className="profile-budget">
        <h1>$34321</h1>
        <p>Monthly budget</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
