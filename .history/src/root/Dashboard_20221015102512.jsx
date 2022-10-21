import React, { useEffect, useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import CodeFace from '../features/common/CodeFace/CodeFace';
import ContactUs from '../features/common/ContactUs/ContactUs';
import Docs from '../features/common/docs/Docs';
import Explore from '../features/common/Explore/Explore';
import HireFreelancer from '../features/common/Hire/HireFreelancer';
import FindWork from '../features/common/Jobs/FindWork';
import FreelanceProjects from '../features/common/Jobs/FreelanceProjects';
import LeaderBoard from '../features/common/Leadership/LeaderBoard';
import CoursesDetail from '../features/common/Tutorials/CoursesDetail';
import Tutorials from '../features/common/Tutorials/Tutorials';
import MagicBall from '../features/magic/MagicBall';
import StartUp from '../features/startup/StartUp';
import ArticleList from './../features/common/More/ArticleList';
import NotFound from './../features/common/routingsError/NotFound';
import PasswordRecovery from './../features/Pages/PasswordRecovery';
import ResetPassword from './../features/Pages/ResetPassword';
import SignIn from './../features/Pages/SignIn';
import SignUp from './../features/Pages/SignUp';

import Content from './Content';
import ContentArena from './../features/ContentArena';
import ContentDashboad from './ContentDashboad';
import ContentLeaderBoard from './ContentLeaderBoard';
import ContentRandomCode from './ContentRandomCode';
import ContentTaskbar from './ContentTaskbar';
import ContentUITools from './ContentUITools';
import WokspaceDataFillForm from './WokspaceDataFillForm';

import CookiesPolicy from '../features/Legal/CookiesPolicy';
import LawEnforcement from '../features/Legal/LawEnforcement';
import PrivacyPolicy from '../features/Legal/PrivacyPolicy';
import TermsOfService from '../features/Legal/TermsOfService';
import CommunityGuidlines from '../features/Support/CommunityGuidlines';
import HelpCenter from '../features/Support/HelpCenter';
import SafetyCenter from '../features/Support/SafetyCenter';

import ChatAppReact from './../features/common/Chat/ChatAppReact';
import WorkSpace from './../features/workspace/WorkSpace';

const Dashboard = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navLight, setNavLight] = useState(false);

  const userDataSender = () => {
    return {
      user: {
        firstName,
        lastName,
        email,
        password,
      },
      setUser: {
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
      },
    };
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 123) {
        setNavLight(true);
      } else {
        setNavLight(false);
      }
    });
  }, []);

  return (
    <div className="dashboard">
      <MagicBall />
      <ChatAppReact />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<StartUp />} />
        {/* FORM REGISTER LOGIN RECOVER CONTACT US AND RESET */}
        <Route path="register" element={<SignIn userDataSender={userDataSender} navLight={navLight} />} />
        <Route path="login" element={<SignUp navLight={navLight} />} />
        <Route path="reset" element={<PasswordRecovery />} />
        <Route path="recover" element={<ResetPassword />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="documentation" element={<Docs />} />

        {/* AFTER SIGN IN USER PROFILE */}
        <Route path="workspace" element={<WorkSpace />}>
          <Route path="" element={<Content />} />
          <Route path="workspace-data-fill-form" element={<WokspaceDataFillForm />} />
          <Route path="content-ui-tools" element={<ContentUITools />} />
          <Route path="content-dashboard" element={<ContentDashboad />} />
          <Route path="content-taskbar" element={<ContentTaskbar />} />
          <Route path="content-leaderboard" element={<ContentLeaderBoard />} />
          <Route path="content-random-code" element={<ContentRandomCode />} />
          <Route path="content-arena" element={<ContentArena />} />
        </Route>

        {/* LEGAL */}
        <Route path="legal" element={<Outlet />}>
          <Route path="cookies" element={<CookiesPolicy />} />
          <Route path="law-enforcement" element={<LawEnforcement />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* SUPPORT */}
        <Route path="support" element={<Outlet />}>
          <Route path="community-guidlines" element={<CommunityGuidlines />} />
          <Route path="help-center" element={<HelpCenter />} />
          <Route path="safety-center" element={<SafetyCenter />} />
        </Route>

        {/* MORE */}
        <Route path="more" element={<Outlet />}>
          <Route path="articles" element={<ArticleList />} />
        </Route>

        {/* TUTORIALS */}
        <Route path="tutorials" element={<Tutorials />}>
          <Route path=":courseId" element={<CoursesDetail />} />
        </Route>

        {/* JOBS */}
        <Route path="jobs" element={<Outlet />}>
          <Route path="find-work" element={<FindWork />} />
          <Route path="freelance-projects" element={<FreelanceProjects />} />
        </Route>

        {/* HIRE */}
        <Route path="hire" element={<HireFreelancer />} />

        {/* LEADERSHIP */}
        <Route path="leadership" element={<LeaderBoard />} />

        {/* EXPLORE */}
        <Route path="explore" element={<Explore />} />

        {/* CODE FACE */}
        <Route path="code-face" element={<CodeFace />} />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
