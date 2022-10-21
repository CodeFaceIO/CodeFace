import React from 'react';
import styles from './tutorials.module.css';
import StartUpNavigation from '../../startup/StartUpNavigation';
import Footer from './../Footer/SmallWithLogoLeft';
import play from './assets/play.png';
import arrow_down from './assets/arrowDown.svg';
import TestimonialsTutorial from './TestimonialsTutorial';

const handleDragStart = (e) => e.preventDefault();

const newLocal = (
  <div className={`${styles.what_will_learn}`}>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
    <div className={`${styles.will_learn_box}`}></div>
  </div>
);
const CoursesDetail = () => (
  <>
    <StartUpNavigation />
    <div className={`${styles.courses_detail_header}`}>
      <h2>
        Learn <span>Web Design</span> by Vako Shvili
      </h2>
      <p>
        Learn the basics of why things are funny, to joke writing, and performing live and how to navigate the comedy
        circuit & build your career.
      </p>
      <div className={`${styles.content_container}`}>
        <div className={`${styles.content_details}`}>
          <div className={`${styles.line_content_top}`}>
            <div className={`${styles.lines_top_item}`}></div>
            <div className={`${styles.lines_top_item}`}></div>
            <div className={`${styles.lines_top_item}`}></div>
            <div className={`${styles.lines_top_item}`}></div>
          </div>
          <div className={`${styles.line_content_bottom}`}>
            <div className={`${styles.lines_bottom_content}`}></div>
            <button>
              {' '}
              <img src={play} alt="Play" /> Watch Trailer
            </button>
          </div>
        </div>
        <div className={`${styles.content_video}`}>
          <div></div>
        </div>
      </div>
      <div className={`${styles.course_highlight}`}>
        <h2>Course Highlights</h2>
        <div className={`${styles.course_highlight_boxes}`}>
          <div className={`${styles.course_highlight_box}`}></div>
          <div className={`${styles.course_highlight_box}`}></div>
          <div className={`${styles.course_highlight_box}`}></div>
        </div>
        <h2>What will you learn?</h2>
      </div>
      {newLocal}
      <button>Buy Now for $499 $1199</button>
      <h2>Frequently asked questions</h2>
      <div className={`${styles.questions}`}>
        <div className={`${styles.question}`}>
          <p>Who is this course for?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Is the course theoretical?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Will Vako Shvili be teaching this course?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>For how long will the course be accessible?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Is there any recurring charge that I need to pay to access the videos?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Can I watch this course offline?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Which language is the course in?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>

        <div className={`${styles.question}`}>
          <p>Can I watch the course on my phone or my laptop?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>
        <div className={`${styles.question}`}>
          <p>How long is the course?</p>
          <div className={`${styles.arrow_down}`}>
            <img src={arrow_down} alt="arrow bottom " />
          </div>
        </div>
      </div>
      <h2>You may not believe us, but you can believe them</h2>
      <div className={`${styles.course_comments}`}>
        <p>Experiences shared by people who previously attended this workshop</p>
        <TestimonialsTutorial />
      </div>
    </div>
    <Footer />
  </>
);

export default CoursesDetail;
