import React, { useState } from "react";
import styles from "./tutorials.module.css";
import { FaOpencart } from "react-icons/fa";
import { BsFillBookmarksFill } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const CourseItem = (props) => {
  const { title } = props;

  const [toggle, onToggle] = useState(false);

  return (
    <div className={`${styles.courses_item}`}>
      <FiMoreVertical onClick={() => onToggle(!toggle)} />
      <div
        className={`${toggle ? styles.more_details : styles.more_details_none}`}
      >
        <ul className={`${styles.more_details_list_container}`}>
          <li>More</li>
          <li>Wishlist</li>
          <li>Reviews</li>
        </ul>
      </div>

      <div className={`${styles.course_image_container}`}></div>

      <div>
        <button>
          <FaOpencart />
        </button>
        <button>
          <AiOutlineComment />
        </button>
        <button>
          <BsFillBookmarksFill />
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
