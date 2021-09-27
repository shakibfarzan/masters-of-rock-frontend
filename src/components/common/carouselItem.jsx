import React from "react";

const CarouselItem = ({ active, data_bs_interval, src, alt, caption }) => {
  let className = active ? "carousel-item active" : "carousel-item";
  return (
    <div className={className} data-bs-interval={data_bs_interval}>
      <img src={src} alt={alt} />
      <div className="carousel-caption">{caption}</div>
    </div>
  );
};

export default CarouselItem;
