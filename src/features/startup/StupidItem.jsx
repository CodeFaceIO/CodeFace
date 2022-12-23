import React, { useState } from 'react';
import styles from './code.module.css';
import instagram from './../assets/teamins.png';
import google from './../assets/teamgoog.png';
import github from './../assets/teamgit.png';

const StupidItem = ({ team }) => {
  const [visible, setVisible] = useState({
    visibility: false,
    name: '',
  });

  return (
    <div className={styles.teamCard}>
      <div className={styles.teamCard__img}></div>
    </div>
  );
};

export default StupidItem;
/*
 <div className={`${styles.rightSide_inside}`}>
          <img src={instagram} alt="team-social-media-links" width="36" />
          <img src={google} alt="team-social-media-links" width="36" />
          <img src={github} alt="team-social-media-links" width="36" />
        </div>
*/
