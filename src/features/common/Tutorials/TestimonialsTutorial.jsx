import React from "react";
import styles from "./tutorials.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const carouselItems = [
  { id: 1, title: "testimonial 1" },
  { id: 2, title: "testimonial 1" },
  { id: 3, title: "testimonial 1" },
  { id: 4, title: "testimonial 1" },
  { id: 5, title: "testimonial 1" },
  { id: 6, title: "testimonial 1" },
  { id: 7, title: "testimonial 1" },
  { id: 8, title: "testimonial 1" },
  { id: 9, title: "testimonial 1" }
];

const TestimonialsTutorial = () => {
  const items = carouselItems.map((item) => {
    return <div className={`${styles.tutorial_carousel}`} key={item.id}></div>;
  });
  
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  };
  
  return (
    <div style={{ marginBottom: "131px" }}>
      <AliceCarousel
        autoPlay
        disableDotsControls
        disableButtonsControls
        infinite
        items={items}
        responsive={responsive}
        mouseTracking={true}
        autoPlayInterval={2000}
        animationDuration={2000}
      />
    </div>
  );
};

export default TestimonialsTutorial;
