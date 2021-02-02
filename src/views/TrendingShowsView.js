//Importing Neccessary Packages
import { CustomHeader, HeaderCard, TrendingsCard } from "../components/index";
import { Typography } from "antd";
import React from "react";
export default function TrendingShowsView() {
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
        Trendings
      </Typography>
      <TrendingsCard />
    </div>
  );
}
