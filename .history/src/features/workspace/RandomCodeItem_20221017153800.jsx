import React from 'react';
import styles from './workspace.module.css';
import { CopyBlock, dracula, monokaiSublime, solarizedDark } from 'react-code-blocks'; 

const RandomCodeItem = ({ title }) => {
  const titleArray = title.split('~');

  return (
    <>
      <div className={`${styles.card_IDE}`}>
        <div className={`${styles.code_item_IDE_body}`}>
         <CopyBlock lan />
        </div>
        <div>
          <button>Explain</button>
        </div>
      </div>
    </>
  );
};

export default RandomCodeItem;