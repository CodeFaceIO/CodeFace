/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./tutorials.module.css";
import StartUpNavigation from "../../startup/StartUpNavigation";
import Footer from "./../Footer/SmallWithLogoLeft";
import CourseItem from "./CourseItem";
import MiniCourseItem from "./MiniCourseItem";
import ide from "./../../../features/assets/codespaces-vscode-2.png";
import { FiSliders } from "react-icons/fi";
import Modal from "./Modal";

const courses = [
  {
    name: "Javascript",
    title: "Javascript Course for beginners (100 hours)",
    price: "$100",
    image: "https://picsum.photos/140/140",
  },
  {
    name: "Python",
    title: "Python Course for beginners (96 hours)",
    price: "$96",
    image: "https://picsum.photos/140/140",
  },
  {
    name: "Java",
    title: "Java Course for beginners (250 hours)",
    price: "$250",
    image: "https://picsum.photos/140/140",
  },
  {
    name: "Kotlin",
    title: "Kotlin Course for beginners (100 hours)",
    price: "$100",
    image: "https://picsum.photos/140/140",
  },
  {
    name: "React",
    title: "React Course for beginners (96 hours)",
    price: "$96",
    image: "https://picsum.photos/140/140",
  },
  {
    name: "Angular",
    title: "Angular Course for beginners (250 hours)",
    price: "$250",
    image: "https://picsum.photos/140/140",
  },
];

const Tutorials = ({ navLight }) => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const [visible, setVisible] = useState({
    visibility: false,
    name: "",
  });

  const handleClick = () => {
    setToggle((pre) => {
      setToggle2(!pre);
      return !pre;
    });
  };

  const renderedCourses = courses.map((course, index) => {
    return (
      <MiniCourseItem
        visible={visible}
        setVisible={setVisible}
        key={index}
        course={course}
      />
    );
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 123) {
      setToggle(false);
    } else {
      if (Boolean(toggle2)) {
        setToggle(true);
      }
    }
  });

  useEffect(() => {
    setToggle(false);
    setToggle2(false);
  }, []);

  return (
    <div className={`${styles.tutorials_container}`}>
      {toggle && toggle2 && <Modal />}
      <div className={`${styles.bg_image}`}>
        <StartUpNavigation navLight={navLight} />
        <h1>
          Listen Practice Learn For <span>FREE</span>
        </h1>
        <button>Explore now!</button>
        <div className={`${styles.tutorials_header_ide_container}`}>
          <img src={ide} alt="" width="1100" />
        </div>
      </div>
      <div className={`${styles.explore_our_courses_container}`}>
        <div className={`${styles.courses_features_ui_control}`}>
          <h2>Explore Our Popular Courses</h2>
        </div>
        <div className={styles.filter_container_not_modal}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for anything"
            aria-labelledby="search"
          />
          <FiSliders onClick={handleClick} />
        </div>
        <div className={`${styles.courses_card_container}`}>
          <CourseItem title="Javascript Course for beginners (100 hours)" />
          <CourseItem title="Javascript Course for beginners (96 hours)" />
          <CourseItem title="Javascript Course for beginners (250 hours)" />
          <CourseItem title="Javascript Course for beginners (100 hours)" />
          <CourseItem title="Javascript Course for beginners (96 hours)" />
          <CourseItem title="Javascript Course for beginners (250 hours)" />
          <CourseItem title="Javascript Course for beginners (100 hours)" />
          <CourseItem title="Javascript Course for beginners (96 hours)" />
          <CourseItem title="Javascript Course for beginners (250 hours)" />
          <CourseItem title="Javascript Course for beginners (100 hours)" />
          <CourseItem title="Javascript Course for beginners (96 hours)" />
          <CourseItem title="Javascript Course for beginners (250 hours)" />
          <CourseItem title="Javascript Course for beginners (100 hours)" />
          <CourseItem title="Javascript Course for beginners (96 hours)" />
          <CourseItem title="Javascript Course for beginners (250 hours)" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
