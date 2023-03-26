import React from 'react';
import styles from './code.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import StupidItem from './StupidItem';
import Terminal from 'react-animated-term';
import 'react-animated-term/dist/react-animated-term.css';

const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const ourTeam = [
  {
    text: 'node team.js',
    cmd: true,
    delay: 80,
  },
  {
    text: '✔ Ugurlu Murquzov,\n✔ Yusif Hasanov,\n✔ Samir Hasanov,\n✔ Tural Xaneliyev,\n',
    cmd: false,
    repeat: true,
    repeatCount: 5,
    frames: spinner.map(function (spinner) {
      return {
        text: spinner + ' Loading app',
        delay: 40,
      };
    }),
  },
  {
    text: '',
    cmd: true,
  },
];

const StupidTeam = () => {
  return (
    <div className={`${styles.stupid_container}`}>
      <h2 className={`${styles.code_section_header_away_team}`}>
        CodeFace team <br /> support you in every condition
      </h2>
      <div>
        {/*{ourTeam.map((team) => {*/}
        {/*  return <StupidItem team={team} />;*/}
        {/*})}*/}
        <Terminal lines={ourTeam} interval={80} />
      </div>
    </div>
  );
};

export default StupidTeam;
