import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './magicball.module.css';
import { SiOpenai } from 'react-icons/si';
import { AiOutlineMore, AiOutlineShareAlt, AiOutlineTool } from 'react-icons/ai';
import { BsFillBookmarksFill } from 'react-icons/bs';

const MagicBall = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [translateY, setTranslateY] = useState(370);

  return (
    <div className={`${styles.magic_box}`} style={{ transform: `translateX(${translateY}px)` }}>
      <div className={`${styles.widget_extension}`}>
        {isOpen ? (
          <SiOpenai
            className={`${styles.right_arrow}`}
            onClick={() => {
              setIsOpen(false);
              setTranslateY(0);
            }}
          />
        ) : (
          <SiOpenai
            className={`${styles.left_arrow}`}
            onClick={() => {
              setIsOpen(true);
              setTranslateY(370);
            }}
          />
        )}
        <AiOutlineTool className={`${styles.right_arrow}`} />
        <BsFillBookmarksFill className={`${styles.right_arrow}`} />
        <AiOutlineShareAlt className={`${styles.right_arrow}`} />
        <AiOutlineMore className={`${styles.right_arrow}`} />
      </div>
      {!isOpen ? (
      <>
        <div className={`d-flex align-items-start`}>
          <div className={`${styles.user_profile}`}></div>
          <h1 className={`${styles.user_username}`}>Username</h1>
        </div>
      </>
      ):null}
    </div>
  );
};

export default MagicBall;
