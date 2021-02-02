//Importing Neccessary Packages
import { CustomHeader, HeaderCard , TvShowsCard } from "../components/index";
import { Typography } from "antd";
import React from "react";
export default function OverallTvShowsView() {
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
        Tv Shows Available
      </Typography>
      <div style={{margin:'20px'}}>
      <TvShowsCard id="1" />
      <TvShowsCard id="48" />
      <TvShowsCard id="34" />
      <TvShowsCard id="24" />
      <TvShowsCard id="36" />
      <TvShowsCard id="99" />
      </div>
    </div>
  );
}
