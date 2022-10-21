import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import styles from './workspace.module.css';
import daily from './../assets/daily.png';
import routingObject from './../../routing';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const codeFaceContent = '';

const codeFaceContent2 =
  'MORE ABOUT FEATURES\n' +
  'Welcome, CodeFace next generation workspace. This workspace is \n' +
  'specially designed for junior developers to help them to learn and grow their skills. This workspace is a combination of different features which will help you learn and code everyday without a lack of self-confidence and motivation. for more information about features click on the button below and you will be redirected to the documentation page of CodeFace. Our open-source documentation is available on GitHub. and if you see any bug or want to contribute to the documentation you can do that by clicking contribute documentation on the documentation page. if you read the documentation and still have any questions you can ask us on our live chat support. our live chat support is available 24/7. else you fill yourself ok about CodeFace features click the MyWorkspace button below and you will be redirected to your workspace. Good Luck CodeFace warrior';

// className={`${styles.support_cart_icon}`}
// className={`${styles.support_us_button}`}

const ContentDashboard = ({ ref, handleWorkspaceComponentClick }) => {
  const { backward, dynamicRouting } = routingObject;
  const navigate = useNavigate();

  return (
    <div className={`${styles.content_area_main_bg}`}>
      <div className={`${styles.workspace_aside}`}>
        <div>
          <div className={`${styles.profile_img}`}></div>
          <h3>FullName</h3>
          <h4>Workspace username</h4>
          <button className={`${styles.edit_profile_button}`}>Edit profile</button>
          <h3 className={`${styles.badges_header}`}>Social links</h3>

          <ul className={`${styles.social_links_list}`}>
            <li>
              <AiFillGithub /> githubUsername
            </li>
            <li>
              <AiFillLinkedin /> linkedinUsername
            </li>
            <li>
              <AiFillTwitterCircle /> twitterUsername
            </li>
            <li>
              <SiHashnode /> hashnodeUsername
            </li>
            <li>
              <img src={daily} alt="daily.dev icon" /> dailyUsername
            </li>
          </ul>
          <h3 className={`${styles.badges_header}`}>Badges</h3>
          <div className={`${styles.badges_container}`}>
            <div className={`${styles.badge_item}`}></div>
            <div className={`${styles.badge_item}`}></div>
            <div className={`${styles.badge_item}`}></div>
          </div>
        </div>
      </div>

      <div className={`${styles.workspace_IDE} ${styles.feature_explanation_IDE}`}>
        <div>
          <div className={`${styles.hash_score_side}`}>
            <h1 onClick={() => dynamicRouting(navigate, '/documentation')}>More about features</h1>
            <p>{codeFaceContent2}</p>
            <div className={`${styles.card_github_buttons_container}`}>
              <div className={`${styles.support_us_cart_item}`}></div>
              <div className={`${styles.support_us_cart_item}`}></div>
              <div className={`${styles.support_us_cart_item}`}></div>
              <div className={`${styles.support_us_cart_item_buttons}`}>
                <Button className={`${styles.support_direction}`} onClick={() => dynamicRouting(navigate,'/')}>
                  {' '}
                  Home{' '}
                </Button>
                <Button className={`${styles.support_direction}`} onClick={() => dynamicRouting(,'/documentation')}>
                  Docs
                </Button>
                <Button className={`${styles.support_direction}`} onClick={() => dynamicRouting('/tutorials')}>
                  Tutorials
                </Button>
                <Button
                  className={`${styles.support_direction}`}
                  onClick={() => dynamicRouting(navigate,'content-arena')}
                >
                  Arena
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDashboard;
