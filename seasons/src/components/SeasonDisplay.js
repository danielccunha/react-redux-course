import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake"
  }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  }

  return latitude < 0 ? "summer" : "winter";
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
