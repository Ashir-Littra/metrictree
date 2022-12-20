import React from "react";
import "./balance.css";
import master from "../../assets/master.svg"

const Balance = () => {
  return (
    <div className="balance-container">
      <div className="balance-headings">
        <p>Available Balance</p>
        <div className="balance-creditButton">
          <p>Credit</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div className="balance-amount">
        <h1>$12,234</h1>
      </div>
      <div className="balance-cardDetails">
        <p>**** &nbsp; 4532 </p>
        <img src={master} alt='' />
      </div>
    </div>
  );
};

export default Balance;
