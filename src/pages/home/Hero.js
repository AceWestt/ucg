import React from "react";
import BtnRounded from "../../components/BtnRounded";
import hero1bg from "../../imgs/home/hero-bg-1.png";
import logo from "../../imgs/common/logo.svg";
import Btn from "../../components/Btn";
import facebookIcn from "../../imgs/common/facebookicn.svg";
import twitterIcn from "../../imgs/common/twittericn.svg";
import slidePrevIcn from "../../imgs/common/hero-slider-prev.svg";
import slideNextIcn from "../../imgs/common/hero-slider-next.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="slide">
        <img className="bg-img" src={hero1bg} alt="hero1" />
        <div className="top-sec p-left">
          <div className="title">
            <h1>
              Международный <br />
              цементный холдинг
            </h1>
          </div>
          <div className="logo-holder p-right">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="bottom-sec">
          <div className="left p-left">
            <div className="social-links">
              <a href="https://www.facebook.com/" className="social-links-link">
                <img src={facebookIcn} alt="fb" />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                className="social-links-link"
              >
                <img src={twitterIcn} alt="twitter" />
              </a>
            </div>
            <div className="slider">
              <div className="slider-slide prev">
                <img src={slidePrevIcn} alt="prev" />
              </div>
              <div className="slider-slide next">
                <img src={slideNextIcn} alt="next" />
              </div>
            </div>
          </div>
          <div className="mid">
            <h3>
              Немного истории о<br />
              нашем холдинге
            </h3>
            <Btn type="secondary" text="Подробнее" />
          </div>
          <div className="right p-right">
            <BtnRounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
