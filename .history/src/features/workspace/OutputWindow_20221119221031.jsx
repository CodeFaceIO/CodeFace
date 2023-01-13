<<<<<<< HEAD
<<<<<<< Updated upstream:.history/src/features/workspace/OutputWindow_20221119221031.jsx
=======
<<<<<<< Updated upstream:.history/src/features/workspace/OutputWindow_20221119220959.jsx
>>>>>>> main
/* eslint-disable no-unused-vars */
import { position } from '@chakra-ui/system';
import React from 'react';
import styles from './workspace.module.css';
import TypeAnimation from 'react-type-animation';
import { ReactTerminal } from "react-terminal";


const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return <pre className="px-2 py-1 font-normal text-xs text-red-500">{atob(outputDetails?.compile_output)}</pre>;
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null ? `${atob(outputDetails.stdout)}` : null}
        </pre>
      );
    } else if (statusId === 5) {
      return <pre className="px-2 py-1 font-normal text-xs text-red-500">{`Time Limit Exceeded`}</pre>;
    } else {
      return <pre className="px-2 py-1 font-normal text-xs text-red-500">{atob(outputDetails?.stderr)}</pre>;
    }
  };
  return (
    <div
      className={`${styles.codeface_file_container} w-100`}
      style={{
        zIndex: '100',
        position: 'relative',
      }}
    >
<<<<<<< HEAD
      <ER
=======
<<<<<<<< HEAD:.history/src/features/workspace/OutputWindow_20221119220959.jsx
      <TypeAnimation
        cursor={false}
        sequence={['Output...', 20000, 'Çıktı...', 20000, 'Выход...', 20000, 'Çıxış...', 20000, '输出...', 20000]}
        wrapper="h1"
        repeat={Infinity}
      />
      <div className="w-full">{outputDetails ? <>{getOutput()}</> : null}</div>
========
      <ER
>>>>>>>> main:.history/src/features/workspace/OutputWindow_20221119221031.jsx
>>>>>>> main
    </div>
  );
};

export default OutputWindow;
<<<<<<< HEAD
=======
<<<<<<<< HEAD:.history/src/features/workspace/OutputWindow_20221119220959.jsx
=======
>>>>>>> Stashed changes:.history/src/features/workspace/OutputWindow_20221016050833.jsx
========
>>>>>>> main


/*
      <TypeAnimation
        cursor={false}
        sequence={['Output...', 20000, 'Çıktı...', 20000, 'Выход...', 20000, 'Çıxış...', 20000, '输出...', 20000]}
        wrapper="h1"
        repeat={Infinity}
      />
      <div className="w-full">{outputDetails ? <>{getOutput()}</> : null}</div>
*/
<<<<<<< HEAD
=======
>>>>>>> Stashed changes:.history/src/features/workspace/OutputWindow_20221016050826.jsx
=======
>>>>>>>> main:.history/src/features/workspace/OutputWindow_20221119221031.jsx
>>>>>>> main
