import React, { useState } from 'react';
import { Collapse, Button ,useDisclosure} from '@chakra-ui/react';

const TreeView = () => {
  const { isOpen:srcOpen, onToggle:srcToggle } = useDisclosure()
 
   
  return (
    <div style={{color:"#fff"}}>
    <p onClick={srcToggle}>src</p>
      <Collapse   color={"#fff"} in={srcOpen}>
        index.js
      </Collapse>
      <Collapse   color={"#fff"} in={srcOpen}>
        app.js
      </Collapse>
      <Collapse   color={"#fff"} in={srcOpen}>
        type.js
      </Collapse>
    </div>
  );
};

export default TreeView;
