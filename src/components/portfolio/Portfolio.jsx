import React from "react";
import "./portfolio.css";
import portfolioData from "./portfolioData";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>
      <Swiper className="conatiner portfolio-main-container">
        {portfolioData.map((item) => {
          const { id, image, name } = item;
          return (
            <SwiperSlide key={id} className="portfolio_container">
              <img src={image} alt={name} />
              <div>
                <h5 className="projects-name">{name}</h5>
                <button className="btn btn-primary">Live Demo</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
