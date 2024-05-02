import React from "react";
import "../../css/header.css";
import HeaderIcon from "../../assets/tech-icon.png";

export default function Header() {
  return (
    <div className="app-header">
      My Tech Forums
      <div>
        <img className="header-icon-container" src={HeaderIcon} />{" "}
      </div>
    </div>
  );
}
