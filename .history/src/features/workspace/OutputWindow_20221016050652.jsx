/* eslint-disable no-unused-vars */
import { position } from '@chakra-ui/system';
import React from 'react';
import styles from './workspace.module.css';
import TypeAnimation from 'react-type-animation';

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
      <TypeAnimation cursor={false} sequence={['Output...', 4000,"Çıktı...",4000,"",4000]} wrapper="h1" repeat={Infinity} />
      <div className="w-full">{outputDetails ? <>{getOutput()}</> : null}</div>
    </div>
  );
};

export default OutputWindow;
