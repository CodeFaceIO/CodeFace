import React from "react";
import styles from "./code.module.css";

import FeaturItem from "./FeaturItem";
import { TbLayoutSidebar, TbTool } from "react-icons/tb";
import { GiArena } from "react-icons/gi";
import { AiOutlineSnippets } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";

const features = [
  {
    id: 1,
    header: "Javascript Code IDE",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <TbLayoutSidebar />,
  },
  {
    id: 2,
    header: "UI free Tools",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <TbTool />,
  },
  {
    id: 3,
    header: "Arena of Code",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <GiArena />,
  },
  {
    id: 4,
    header: "Task Manager",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <BsListTask />,
  },
  {
    id: 5,
    header: "Code Snippets",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <AiOutlineSnippets />,
  },
  {
    id: 6,
    header: "Free Support",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nihil mollitia possimus tempore perspiciatis soluta nisi harum velit eligendi assumenda, nesciunt sint rem quia autem similique dicta voluptates magnam deleniti?",
    icon: <BiSupport />,
  },
];

const Features = () => {
  return (
    <div
      className={`${styles.features_container} d-flex justify-content-between align-content-between flex-wrap`}
    >
      <h2 className={`${styles.code_section_header_away}`}>
        CodeFace features <br /> to make you a better programmer.
      </h2>

      {features.map((item, index) => {
        return <FeaturItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Features;
