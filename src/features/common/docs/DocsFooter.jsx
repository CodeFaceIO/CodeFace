import React from "react";
import styles from "./docs.module.css";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaFighterJet } from "react-icons/fa";

const footerLinks = [
  { id: 1, title: "© 2022 CodeFace" },
  { id: 2, title: "Terms" },
  { id: 3, title: "Privacy" },
  { id: 4, title: "Security" },
  { id: 5, title: "Status" },
  { id: 6, title: "Help" },
  { id: 7, title: "Home" },
  { id: 8, title: "Contact" },
  { id: 9, title: "Pricing" },
  { id: 10, title: "Developer Api" },
  { id: 11, title: "Training" },
  { id: 12, title: "Blog" },
];

const DocsFooter = () => {
  const renderedLinks = footerLinks.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });

  return (
    <div className={styles.docs_footer}>
      <div>
        <div className={`${styles.docs_footer_help}`}>
          <h2>Did this doc help you?</h2>
          <div>
            <button>
              <AiOutlineLike />
            </button>
            <button>
              <AiOutlineDislike />
            </button>
          </div>
          <p>Privacy policy</p>
        </div>

        <div className={`${styles.docs_footer_change}`}>
          <h2>Help us make these docs great!</h2>
          <div>
            <button>
              Help us
              <FaFighterJet />
            </button>
            <p>All CodeFace docs are open source.</p>
          </div>
        </div>

        <div className={`${styles.docs_footer_still}`}>
          <h2>Need Community help ?</h2>
          <div>
            <p>Ask CodeFace Community</p>
            <p>Contact support</p>
          </div>
        </div>
      </div>

      <footer className={`${styles.footer_footer_footer}`}>
        <ul>{renderedLinks}</ul>
      </footer>
    </div>
  );
};

export default DocsFooter;
