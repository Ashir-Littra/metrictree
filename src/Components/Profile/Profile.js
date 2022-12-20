import React from "react";
import "./profile.css";
import logo from "../../assets/logoProfile.png";
import avatar from "../../assets/avatar.png";
import OptionButtons from "../OptionButtons/OptionButtons";
import dashboard from "../../assets/dashboard.svg"
import invest from "../../assets/invest.svg"
import trans from "../../assets/trans.svg"
import wallet from "../../assets/wallet.svg"
import signout from "../../assets/signout.svg"

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
        <h1>$34,321</h1>
        <p>Monthly budget</p>
        </div>
      </div>
      <div className="profile-buttons">
<OptionButtons icon={dashboard} title="Dashboard"/>
<OptionButtons icon={invest} title="Investments"/>
<OptionButtons icon={trans} title="Transactions"/>
<OptionButtons icon={wallet} title="Wallet"/>
      </div>
      <div className="profile-signout">
        <OptionButtons icon={signout} title="Sign-Out" />
      </div>
    </div>
  );
};

export default Profile;
