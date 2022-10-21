import React from "react";
import styles from "./workspace.module.css";
import { Code } from '@chakra-ui/react'

const RandomCodeItem = ({
                          title
                        }) => {
  
  const titleArray = title.split("~");
  
  
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
        <div className={`${styles.user_action_container}`}></div>
      </div>
    </>
  );
};

export default RandomCodeItem;
