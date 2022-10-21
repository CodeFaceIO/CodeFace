import React, { useState } from "react";
import styles from "./code.module.css";
import instagram from "./../assets/teamins.png";
import google from "./../assets/teamgoog.png";
import github from "./../assets/teamgit.png";

const StupidItem = ({ team }) => {
  const [visible, setVisible] = useState({
    visibility: false,
    name: "",
  });

  return (
    <div className={styles.teamCard}>
      <div className={`${styles.team_card_leftSide}`}>
        <div className={`${styles.leftSide_inside}`}>
          <div
            onMouseEnter={() =>
              setVisible((preData) => {
                let { visibility, name } = preData;
                name = team.name;
                visibility = visibility === false ? true : true;
                return {
                  name,
                  visibility,
                };
              })
            }
          >
            <img src={team.image} alt="team member" />
          </div>
        </div>

        <div
          className={`${
            visible.visibility && visible.name === team.name
              ? styles.stupid_member_view
              : styles.stupid_member_view_none
          }`}
        >
          {/* {team.name}&nbsp;
              {team.surname} */}
        </div>
        <div className={`${styles.rightSide_inside}`}>
          <img src={instagram} alt="team-social-media-links" width="36" />
          <img src={google} alt="team-social-media-links" width="36" />
          <img src={github} alt="team-social-media-links" width="36" />
        </div>
      </div>
    </div>
  );
};

export default StupidItem;
