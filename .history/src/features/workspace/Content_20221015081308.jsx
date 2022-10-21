import React, { useEffect, useState } from 'react';
import styles from './workspace.module.css';
import SmallWithLogoLeft from './../common/Footer/SmallWithLogoLeft';
import { useNavigate } from 'react-router-dom';
import logo from './../assets/svg/1.svg';
import { GiArena } from 'react-icons/gi';
import routingObject from './../../routing.js';

const Content = () => {
  const [navLight, setNavLight] = useState(false);
  const navigate = useNavigate();
  const { backward, dynamicRouting } = routingObject;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 527) {
      setNavLight(true);
    } else {
      setNavLight(false);
    }
  });

  return (
    <div className={`${styles.user_profile}`}>
      <div className={`${!navLight ? styles.navigation_main_container_transparent : styles.navigation_main_container_light}`}>
        <img src={logo} alt="" onClick={() => dynamicRouting('/')} />
        <div>
          <p onClick={() => dynamicRouting(navigate, 'tutorials')}>TUTORIALS</p>
          <p onClick={() => dynamicRouting(navigate, 'workspace')}>ARENA</p>
          <p onClick={() => dynamicRouting(navigate, 'documentation')}>DOCS</p>
          <button onClick={() => dynamicRouting(navigate, 'register')}>Start journey - IT'S FREE</button>
        </div>
      </div>
      <div className={`${styles.user_profile_header}`}>
        <div className={`${styles.user_profile_body_top}`}>
          <div className={`${styles.box}`}>
            <h1>CodeFace Arena</h1>
            <p>Next generation free workspace</p>
          </div>
          <div className={`${styles.features_workspace_arena}`}>
            <div className={`${styles.features_head_line}`}></div>
            <h2>
              CodeFace FREE workspace features <GiArena />
            </h2>
            <div className={`${styles.item_container_IDE}`}>
              <div>
                <ul>
                  <li>Javascript CODE IDE</li>
                  <li>UI FREE Tools</li>
                  <li>CODE WAR Arena</li>
                  <li>Task Manager</li>
                  <li>CODE Snippets</li>
                  <li>FREE Support</li>
                  <li>Magic Box</li>
                </ul>
              </div>
            </div>
            <button
              className={`${styles.be_codeface_programmer}`}
              onClick={() => dynamicRouting(navigate, 'workspace-data-fill-form')}
            >
              {' '}
              Complete setup
            </button>
          </div>
        </div>
      </div>
      <SmallWithLogoLeft />
    </div>
  );
};

export default Content;
