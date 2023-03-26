import React from 'react';
import styles from './code.module.css';
import reactEasy from './../assets/react-easy.png';
import modernSchool from './../assets/modernSchool.png';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
const ourAppItems = [
  <div className={styles.reactEasy} data-value="1">
    <p>React Easy</p>
    <img src={reactEasy} alt="" />
  </div>,
  <div className={styles.modernSchool} data-value="2">
    <p>Modern School</p>
    <img src={modernSchool} alt="" />
  </div>,
];
const ourResponsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};
const OurProjects = () => {
  return (
    <div className={styles.our_other_apps}>
      <h3>Our other Apps ⚡</h3>
      <div>
        <AliceCarousel
          className={'ourCarousel'}
          infinite={true}
          items={ourAppItems}
          mouseTracking={false}
          responsive={ourResponsive}
          autoPlay={true}
          autoPlayInterval={2000}
          disableButtonsControls={true}
          disableDotsControls={true}
        />
      </div>
    </div>
  );
};

export default OurProjects;
