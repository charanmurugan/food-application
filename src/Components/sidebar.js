import React from "react";
import "../Styles/sidebar.css";

function sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-navigation">
        <li className="sidebar-navigation-option active">
          <b></b>
          <b></b>
          <a href="#">
            <span className="icon">
              <ion-icon name="menu-outline"></ion-icon>
            </span>
            <span className="title">Menu</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default sidebar;
