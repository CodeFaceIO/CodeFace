import { Avatar } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { TiTimesOutline } from 'react-icons/ti';
import playbuttonsvg from './../assets/leaderplaybutton.svg';

const UserProfileLeaderBoardItem = () => {
  const [sideBar, setSideBar] = useState(true);

  return (
    <div className="container-leader">
      <div className="card-leader">
        <div className="card2-leader">
          <ul className="header">
            <FaBars className="hamburger-menu" onClick={() => setSideBar(!sideBar)} />
            <div
              className={`${sideBar ? 'leader-item-sideBar' : 'leader-item-sideBar-in '}`}
              onClick={() => setSideBar(!sideBar)}
            >
              <div className="leader-top-icons-container">
                <Avatar size="md" name="Code Face" />
                <TiTimesOutline onClick={() => setSideBar(!sideBar)} />
              </div>
            </div>

            <h2>CodeFace Developers</h2>
            <i className="fa-solid fa-bolt" />
          </ul>
          <div className="acc">
            <div className="user-name">
              <h3>CodeFace User</h3>
              <b>Front-end Developer</b>
            </div>
          </div>
          <div className="result">
            <ul>
              <li>
                <p>#1</p>
                <span>RANK</span>
              </li>
              <li>
                <p>28</p>
                <span>WIN</span>
              </li>
              <li>
                <p>17</p>
                <span>AGE</span>
              </li>
            </ul>
          </div>
          <div className="more-follow">
            <button>More</button>
            <button className="svg-container-button">
              <img src={playbuttonsvg} alt="play" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileLeaderBoardItem;
