import React, { useEffect, useState } from 'react';
import CallToActionWithIllustration from './CallToActionWithIllustration';
import SmallWithLogoLeft from './../common/Footer/SmallWithLogoLeft';
import CodeSamples from './CodeSamples';
import OurProjects from './OurProjects';
import Features from './Features';
import StupidTeam from './StupidTeam';
import styles from './code.module.css';
import Subscribe from './Subscribe ';

const StartUp = () => {
  const [navLight, setNavLight] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 123) {
        setNavLight(true);
      } else {
        setNavLight(false);
      }
    });
  }, []);

  return (
    <div className={`${styles.code_module_container}`}>
      <CallToActionWithIllustration navLight={navLight} />
      <CodeSamples />
      <Features />
      <StupidTeam />
      <OurProjects />
      <Subscribe />
      <SmallWithLogoLeft />
    </div>
  );
};

export default StartUp;
