import React from "react";
import "./TopBanner.css";

function TopBanner({ title, subTitle }) {
  const bannerStyle = {
    backgroundImage:
      "url(https://img.freepik.com/free-photo/boston-night-panorama_649448-187.jpg?w=1380&t=st=1684987563~exp=1684988163~hmac=70c2df1afe5555374c91536c8a8d3bcf03b99a3f6312aac3606e5476251c5c9b)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "450px",
    position: "relative",
    zIndex: -1,
  };

  return (
    <div style={bannerStyle}>
      <div className="banner-text overlay">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default TopBanner;
