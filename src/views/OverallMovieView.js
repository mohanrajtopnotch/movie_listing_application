//Importing Neccessary Packages
import { CustomHeader, HeaderCard, Cards } from "../components/index";
import React from "react";
import { Typography } from "antd";
export default function index() {
  return (
    <div>
      <CustomHeader />
      <HeaderCard />
      <Typography
        style={{
          backgroundColor: "orange",
          padding: "10px",
          fontSize: "20px",
          color: "white",
          border: "1px solid white",
        }}
      >
        Movie's Available
      </Typography>
      <div style={{ margin: "20px" }}>
        <Cards type="movie" id="2" />
        <Cards id="1" />
        <Cards id="3" />
        <Cards id="4" />
      </div>
    </div>
  );
}
