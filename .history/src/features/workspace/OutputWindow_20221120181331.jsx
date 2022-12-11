<<<<<<< Updated upstream:.history/src/features/workspace/OutputWindow_20221120181331.jsx
/* eslint-disable no-unused-vars */
import { position } from '@chakra-ui/system';
import React, {useState} from 'react';
import styles from './workspace.module.css';
import TypeAnimation from 'react-type-animation';
import { ReactTerminal } from "react-terminal";




const OutputWindow = ({ outputDetails }) => {


  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

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

<TypeAnimation
        cursor={false}
        sequence={['Output...', 20000, 'Çıktı...', 20000, 'Выход...', 20000, 'Çıxış...', 20000, '输出...', 20000]}
        wrapper="h1"
        repeat={Infinity}
      />
      <div className="w-full">{outputDetails ? <>{getOutput()}</> : null}</div>
    </div>
  );
};

export default OutputWindow;


=======
>>>>>>> Stashed changes:.history/src/features/workspace/OutputWindow_20221016050815.jsx
