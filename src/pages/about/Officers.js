import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import officer1 from "../../imgs/about/offficers-1.png";
import officer2 from "../../imgs/about/offficers-2.png";
import officer3 from "../../imgs/about/offficers-3.png";
const Officers = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 0,
    });
  }, []);
  return (
    <section className="section officers p-left p-right">
      <div className="section-title">Руководители:</div>
      <div className="officers-wrap">
        <div className="control officers-prev-button"></div>
        <div className="officers-container">
          <div className="officers swiper">
            <div className="officers-wrapper swiper-wrapper">
              {officers.map((o) => {
                return (
                  <div className="officer swiper-slide" key={`officer-${o.id}`}>
                    <div className="item">
                      <img src={o.img} alt={o.name} />
                      <div className="name">{o.name}</div>
                      <div className="title">{o.title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="control officers-next-button"></div>
      </div>
    </section>
  );
};

export default Officers;

const officers = [
  {
    id: 1,
    name: "Коробкин Василий Викторович",
    title: "Генеральный директор АО “Бекабадцемент”",
    img: officer1,
  },
  {
    id: 2,
    name: "Коробкин Василий Викторович",
    title: "Генеральный директор АО “Бекабадцемент”",
    img: officer2,
  },
  {
    id: 3,
    name: "Коробкин Василий Викторович",
    title: "Генеральный директор АО “Бекабадцемент”",
    img: officer3,
  },
];
