import React, { useState } from 'react';
import WorkspaceNav from './WorkspaceNav';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './workspace.module.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const hours = [
  '12:00 AM',
  '1:00 AM',
  '2:00 AM',
  '3:00 AM',
  '4:00 AM',
  '5:00 AM',
  '6:00 AM',
  '7:00 AM',
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
  '10:00 PM',
  '11:00 PM',
];

const dashboardMenus = [
  {
    id: 1,
    name: 'Tasks',
  },
  {
    id: 2,
    name: 'Projects',
  },
  {
    id: 3,
    name: 'Followers',
  },
  {
    id: 4,
    name: 'Following',
  },
  {
    id: 5,
    name: 'Message',
  },
  {
    id: 6,
    name: 'Github',
  },
];

const ContentTaskbar = () => {
  const [value, onChange] = useState(new Date());

  const renderedHours = hours.map((hour, index) => {
    return (
      <li key={index} className={styles.hour}>
        <p>{hour}</p>
        <div></div>
      </li>
    );
  });

  const renderedDashboardMenus = dashboardMenus.map((menu, index) => {
    return (
      <li key={index} className={styles.dashboard_menu}>
        <p>{menu.name}</p>
      </li>
    );
  });

  

  return (
    <div>
      <WorkspaceNav />
      <div className={`${styles.taskbar_container}`}>
        <div className={`${styles.hello_user_taskbar}`}>
          <h1>Hello Abishek</h1>
          <div>
            <p>Welcome! Manage your all tasks & daily work here.</p>
            <p>
              Your Score <span>A+</span>{' '}
            </p>
          </div>
        </div>
        <div className={`${styles.calendar_user}`}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div className={`${styles.dashboard_details}`}>
          <ul>{renderedDashboardMenus}</ul>
        </div>
        <div className={`${styles.task_line}`}>
          <div className={`${styles.header_section_task_line}`}>
            <h1>Task Line</h1>
            <p>{months[new Date().getMonth()] + ' ' + new Date().getDate() + '  ' + new Date().getFullYear()}</p>
          </div>
          <ul className={`${styles.tasks_lists_container}`}>{renderedHours}</ul>
        </div>
      </div>
    </div>
  );
};

export default ContentTaskbar;
