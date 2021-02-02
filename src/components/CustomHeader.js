//Importing Neccessary Packages
import React from "react";
import { Link } from "react-router-dom";

//Importing Antd Components
import { AudioOutlined } from "@ant-design/icons";
import "../css/CustomHeader.css";
import { Input } from "antd";

export default function CustomHeader() {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    // Header Elements
    <div className="header">
      <Search
        placeholder="Search here.... "
        enterButton="Search"
        size="large"
        style={{ width: "50%", marginLeft: "10px", padding: "5px" }}
        suffix={suffix}
      />
      <button className="header-button" href="https://www.google.com">
        <Link to="/" style={{ outline: "none", color: "white" }}>
          Movies
        </Link>
      </button>
      <button className="header-button" href="https://www.google.com">
        <Link to="/tvshows" style={{ outline: "none", color: "white" }}>
          Tv Shows
        </Link>
      </button>

      <button className="header-button" href="https://www.google.com">
        <Link to="/trendings" style={{ outline: "none", color: "white" }}>
          Trendings
        </Link>
      </button>
    </div>
  );
}
