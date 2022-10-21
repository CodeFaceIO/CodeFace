import React from 'react';
import styles from './workspace.module.css';
import { CopyBlock, dracula, monokaiSublime, solarizedDark } from 'react-code-blocks';



const sampleJsCode = `const a = 1;
const b = 2;
const c = a + b;
outputWriter(c);

function outputWriter(output) {
  console.log(output);
const b = 2;
const c = a + b;
outputWriter(c);

function outputWriter(output) {
  console.log(output);
}`;


const RandomCodeItem = ({ title }) => {
  const titleArray = title.split('~');

  return (
    <>
      <div className={`${styles.card_IDE}`}>
        <div className={`${styles.code_item_IDE_body}`}>
          <CopyBlock 
            language="js" 
            text={sampleJsCode}
            showLineNumbers={true}
            wrapLines={true}
            theme={solarizedDark}
            height="326px"
            width="280px"
            codeBlock
            />
        </div>
        <div>
          <button>Explain</button>
        </div>
      </div>
    </>
  );
};

export default RandomCodeItem;
