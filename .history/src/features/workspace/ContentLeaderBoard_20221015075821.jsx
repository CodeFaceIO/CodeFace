import React from 'react';
import styles from './z.module.css';
import WorkspaceNav from './WorkspaceNav';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import AiDailyIcon from './../assets/daily.png';
import { Button } from 'bootstrap';

const leaderBoard = [
  {
    username: 'Coder',
    winning: 25,
    lost: 5,
    rank: 1,
    score: 83.33,
  },
  {
    username: 'CodeFace',
    winning: 20,
    lost: 10,
    rank: 2,
    score: 66.67,
  },
  {
    username: 'CodeMaster',
    winning: 15,
    lost: 15,
    rank: 3,
    score: 50,
  },
  {
    username: 'CodeWarrior',
    winning: 10,
    lost: 20,
    rank: 4,
    score: 33.33,
  },
  {
    username: 'CodeLearner',
    winning: 5,
    lost: 25,
    rank: 5,
    score: 16.67,
  },
  {
    username: 'CodeNewbie',
    winning: 0,
    lost: 30,
    rank: 6,
    score: 0,
  },
];

const ContentLeaderBoard = ({ ref,  }) => {
  const renderedLeaderBoard = leaderBoard.map((leader, index) => {
    return (
      <tr key={index} className={`${styles.leaderBoard_row}`}>
        <td className={`${styles.leaderBoard_table_cell}`}>{leader.rank}</td>
        <td className={`${styles.leaderBoard_table_cell}`}>{leader.username}</td>
        <td className={`${styles.leaderBoard_table_cell}`}>{leader.winning}</td>
        <td className={`${styles.leaderBoard_table_cell}`}>{leader.lost}</td>
        <td className={`${styles.leaderBoard_table_cell}`}>{leader.score}</td>
      </tr>
    );
  });

  return (
    <div>
      <WorkspaceNav handleWorkspaceComponentClick={handleWorkspaceComponentClick} />
      <div className={`${styles.leaderBoard_container}`}>
        <div className={`${styles.leaderBoard_toolbox}`}></div>
        <div className={`${styles.leaderBoard_userProfile}`}>
          <div className={`${styles.user_profile_inside_container}`}>
            <div className={`${styles.profile_cover_photo}`}></div>
            <div className={`${styles.user_profile_information_and_social_media_container}`}>
              {/* User Profile Information*/}
              <div className={`${styles.social_media_container}`}>
                <div className={`${styles.social_controller_container}`}></div>
                <div className={`${styles.social_media_icon_container}`}>
                  <AiFillGithub className={`${styles.social_media_icon}`} />
                  <AiFillInstagram className={`${styles.social_media_icon}`} />
                  <AiFillTwitterCircle className={`${styles.social_media_icon}`} />
                  <img src={AiDailyIcon} alt="AiDaily" className={`${styles.social_media_icon_image}`} />
                </div>
              </div>
              {/* User Profile Information*/}
              <div className={`${styles.user_profile_information_container}`}>
                <h1>John Doe</h1>
                <div>
                  <div className={`${styles.user_demographic_data_container}`}>
                    <h2>1</h2>
                    <p>Rank</p>
                  </div>
                  <div className={`${styles.user_demographic_data_container}`}>
                    <h2>1.2k</h2>
                    <p>Followers</p>
                  </div>
                  <div className={`${styles.user_demographic_data_container}`}>
                    <h2>15</h2>
                    <p>Following</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.ContentLeaderBoard_table_container}`}>
          <table className={`${styles.ContentLeaderBoard}`}>
            {/* <TableCaption>© 2022 CodeFace. Leader board rating updated every weekend</TableCaption> */}
            <thead className={`${styles.ContentLeaderBoard_thead}`}>
              <tr>
                <th className={`${styles.ContentLeaderBoard_thead_cell}`}>Rank</th>
                <th className={`${styles.ContentLeaderBoard_thead_cell}`}>Username</th>
                <th className={`${styles.ContentLeaderBoard_thead_cell}`}>Win</th>
                <th className={`${styles.ContentLeaderBoard_thead_cell}`}>Lost</th>
                <th className={`${styles.ContentLeaderBoard_thead_cell}`}>Score</th>
              </tr>
            </thead>
            <tbody className={`${styles.ContentLeaderBoard_table_body}`}>{renderedLeaderBoard}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentLeaderBoard;
