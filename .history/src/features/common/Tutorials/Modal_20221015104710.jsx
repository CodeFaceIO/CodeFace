import React, { useState } from 'react';
import { MdOutlineContentCopy, MdSecurity } from 'react-icons/md';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import whatsapp from './assets/whatsapp.png';
import times from './../../../features/assets/times.png';
import TypeAnimation from 'react-type-animation';
import MiniCourseItem from './MiniCourseItem';
import styles from './tutorials.module.css';
import { useNavigate } from 'react-router-dom';
import { GiTrophyCup } from 'react-icons/gi';
import { AiTwotoneStar } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';

const categories = ['Web Development', 'App Development', 'UI/UX', 'Photoshop'];

const Modal = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [author, setAuthor] = useState('');
  const isDisabled = [name, price, author].every(Boolean);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tutorials/detail');
  };

  const renderedCategories = categories.map((category, index) => {
    return (
      <option value={category} key={index}>
        {category}
      </option>
    );
  });

  return (
    <>
      <div className={`${styles.module_main_container}`}>
        <div className={`${styles.module_main_container_left}`}>
          <TypeAnimation
            cursor={false}
            sequence={[
              'Choose your best course',
              5000,
              'Secure payment system',
              5000,
              '14 days money-back warranty',
              5000,
              'Learn and build on CodeFace',
              5000,
            ]}
            wrapper="h2"
            repeat={1}
          />
          <form>
            <div className={`${styles.input_container_with_label}`}>
              <select type="select" id="name">
                <option value="">Choose</option>
                {renderedCategories}
              </select>
            </div>
            <div className={`${styles.input_container_with_label}`}>
              <input type="text" id="name" name="name" placeholder="Name" aria-label="name" />
            </div>
            <div className={`${styles.input_container_with_label}`}>
              <input type="text" id="price" name="price" placeholder="Price" aria-label="price" />
            </div>
            <div className={`${styles.input_container_with_label}`}>
              <input type="text" id="author" name="author" placeholder="Author" aria-label="author" />
            </div>
            <button disabled={!isDisabled}>Search Course</button>
          </form>
          <h3>Our Bestseller's</h3>
          <div>
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
            <MiniCourseItem />
          </div>
        </div>
        <div className={`${styles.module_main_container_right}`}>
          <button>Subscribe</button>
          <img src={times} alt="remove from modal" onClick={handleClick} />
          <div className={`${styles.recommended_container}`}>
            <p>Would you recommend this course ?</p>
            <div>
              <MdOutlineContentCopy />
              <im src={whatsapp} alt="social media icons" width="24" height="24" />
              <img src={instagram} alt="social media icons" />
              <img src={twitter} alt="social media icons" />
              <img src={facebook} alt="social media icons" />
            </div>
          </div>

          <div className={`${styles.might_like}`}>
            <div>
              <h3>
                Best Course
                <span>
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </span>
              </h3>
            </div>
            <div></div>
            <div>
              <h3 onClick={handleClick}>View more</h3>
              <button>Share</button>
            </div>
          </div>
          <h2>
            Top categories <GiTrophyCup />
          </h2>
          <ul className={`${styles.categories_list}`}>
            <li>
              React <FaReact />{' '}
            </li>
            <li>
              Flutter <RiFlutterFill />{' '}
            </li>
            <li>
              Security <MdSecurity />{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
