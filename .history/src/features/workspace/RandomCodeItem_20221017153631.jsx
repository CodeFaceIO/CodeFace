import React from 'react';
import styles from './workspace.module.css';
import { CopyBlock, dracula, monokaiSublime, solarizedDark } fr 

const RandomCodeItem = ({ title }) => {
  const titleArray = title.split('~');

  return (
    <>
      <div className={`${styles.card_IDE}`}>
        <div className={`${styles.code_item_IDE_body}`}>
          <h2>
            {titleArray[0]}
            <br />
            {titleArray[1]}
          </h2>
        </div>
        <div>
          <button>Explain</button>
        </div>
      </div>
    </>
  );
};

export default RandomCodeItem;
