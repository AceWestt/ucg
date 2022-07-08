import React from "react";

const CommonHero = ({ title = "UCG", img = "", customClass = "" }) => {
  return (
    <div className={`common-hero p-left ${customClass}`}>
      {img && <img src={img} alt="hero" />}
      <h1>{title}</h1>
    </div>
  );
};

export default CommonHero;
