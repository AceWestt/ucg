import React from "react";
import Hero from "./home/Hero";

import bgPattern from "../imgs/home/bg-pattern.svg";
import factorymodel from "../imgs/home/ucg-factory-model.png";
import logo from "../imgs/common/logo.svg";

const Home = () => {
  return (
    <div className="page home">
      <Hero />
      <div className="mission-section">
        <img className="bg-pattern" src={bgPattern} alt="bg" />
        <div className="left p-left">
          <img className="logo" alt="logo" src={logo} />
          <p>
            Компания United Cement Group крупный промышленный холдинг,
            специализирующийся на производстве общестроительных и специальных
            марок цемента самого высокого качества. С нашим цементом вы строите
            "Раз и навсегда!"
          </p>
        </div>
        <div className="right">
          <img src={factorymodel} alt="factorymodel" />
        </div>
      </div>
    </div>
  );
};

export default Home;
