//Importing Neccessary Packages
import React from "react";
import { Button } from "antd";
import "../css/HeaderCard.css";
export default function HeaderCard(props) {
  return (
    <div className="header-card-wrapper">
      <div className="header-card-content">
        <p className="header-card-p">Welcome.</p>
        <p className="header-card-p">
          Millions of Movies , TV shows and people to discover.Explore More
        </p>
        <input
          type="text"
          placeholder="Search for a movie , TV show , Person"
          className="header-card-input"
          style={{ color: "red" }}
        ></input>
        <Button type="primary" style={{ margin: "10px" }}>
          Search
        </Button>
      </div>
    </div>
  );
}
