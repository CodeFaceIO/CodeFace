import React, { useState } from 'react';
import styles from './workspace.module.css';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';
import daily from './../assets/daily.png';
import routingObject from './../../routing';
import { useNavigate } from 'react-router-dom';

const WorkspaceDataFillForm = ({}) => {
  const [userArena, setUserArena] = useState({
    username: '',
    email: '',
    bio: '',
    company: '',
    jobTitle: '',
    experience: '',
    favouriteLanguage: '',
    socialMediaUrl: {
      github: '',
      linkedin: '',
      twitter: '',
      hashnode: '',
      dailyDev: '',
    },
  });



  const navigate = useNavigate();

  const { dynamicRouting } = routingObject;

  const ObjArrayNotation = Object.keys(userArena)
    .map((key) => {
      return userArena[key];
    })
    .filter((item) => typeof item === 'string')
    .every((item) => item.length > 0);

  const handleSubmit = (event) => {
    if (ObjArrayNotation) {
    }

    dynamicRouting(navigate, '/workspace/content-dashboard');
    event.preventDefault();
  };

  return (
    <div className={`${styles.user_profile_body}`}>
      <div>
        <h1>CodeFace workspace account</h1>
        <div>
          <div className={`${styles.wrkspc_form_left_side}`}>
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
          <div className={`${styles.wrkspc_form_right_side}`}>
            <div className={`${styles.right_form_header}`}>
              <p>
                Additional information about you is important for us to fairly select your competitors and set difficulty
                algorithms that match your experience
              </p>
            </div>
            <div className={`${styles.form_container}`}>
              <form onSubmit={handleSubmit}>
                <h5 className={`${styles.section_title}`}>About</h5>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" id="username" defaultValue={userArena.username} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" defaultValue={userArena.email} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="bio">Bio</label>
                  <input type="text" name="bio" id="bio" value={userArena.bio} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" id="company" value={userArena.company} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="jobTitle">Job title</label>
                  <input type="text" name="jobTitle" id="jobTitle" value={userArena.jobTitle} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="experience">Experience</label>
                  <input type="text" name="experience" id="experience" value={userArena.experience} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="language">Favourite language</label>
                  <input type="text" name="language" id="language" value={userArena.favouriteLanguage} />
                </div>
                <h5 className={`${styles.section_title}`}>Social media links</h5>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="github">Github</label>
                  <input type="text" name="github" id="github" value={userArena.socialMediaUrl.github} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="linkedin">Linkedin</label>
                  <input type="text" name="linkedin" id="linkedin" value={userArena.socialMediaUrl.linkedin} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="twitter">Twitter</label>
                  <input type="text" name="twitter" id="twitter" value={userArena.socialMediaUrl.twitter} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="hashnode">Hashnode</label>
                  <input type="text" name="hashnode" id="hashnode" value={userArena.socialMediaUrl.hashnode} />
                </div>
                <div className={`${styles.form_group}`}>
                  <label htmlFor="daily">Daily.dev</label>
                  <input type="text" name="daily" id="daily" value={userArena.socialMediaUrl.dailyDev} />
                </div>
                <button
                  type="submit"
                  // disabled={!ObjArrayNotation}
                  className={`${styles.workspace_form_submit_button}`}
                >
                  Save profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDataFillForm;
