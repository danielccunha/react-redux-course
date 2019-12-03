import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  }

  return latitude < 0 ? "summer" : "winter";
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const text = season === "winter" ? "Burr, it's chilly" : "Lets hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`icon ${icon}`} />
      <h1>{text}</h1>
      <i className={`icon ${icon}`} />
    </div>
  );
};

export default SeasonDisplay;
