import React from "react";
import styles from "./code.module.css";
import "react-alice-carousel/lib/alice-carousel.css";
import StupidItem from "./StupidItem";

const ourTeam = [
  {
    name: "Ibrahim",
    surname: "Ibrahimli",
    username: "@ibrahim",
    projects: "4",
    
    image: "https://picsum.photos/160/160"
  },
  {
    name: "Ugurlu",
    surname: "Murquzov",
    username: "@ugurlu",
    projects: "8",
    
    image: "https://picsum.photos/160/160"
  },
  {
    name: "Nail",
    surname: "Ismayilov",
    username: "@nail",
    projects: "3",
    
    image: "https://picsum.photos/160/160"
  },
  {
    name: "Mehemmed",
    surname: "Serkerli",
    username: "@mehemmed",
    projects: "1",
    image: "https://picsum.photos/160/160"
  },
  {
    name: "Yusif",
    surname: "Hesenov",
    username: "@yusif",
    projects: "5",
    
    image: "https://picsum.photos/160/160"
  },
  {
    name: "Nabi",
    surname: "Huseynov",
    username: "@nabi",
    projects: "6",
    
    image: "https://picsum.photos/160/160"
  }
];

const StupidTeam = () => {
  return (
    <div className={`${styles.stupid_container}`}>
      <h2 className={`${styles.code_section_header_away_team}`}>
        CodeFace team <br /> support you in every condition
      </h2>
      <div>
        {ourTeam.map((team) => {
          return <StupidItem team={team} />;
        })}
      </div>
    </div>
  );
};

export default StupidTeam;
