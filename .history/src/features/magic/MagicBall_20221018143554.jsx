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
      
      ):null}
    </div>
  );
};

export default MagicBall;
