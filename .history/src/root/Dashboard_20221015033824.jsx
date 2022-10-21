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

import CookiesPolicy from '../features/Legal/CookiesPolicy';
import LawEnforcement from '../features/Legal/LawEnforcement';
import PrivacyPolicy from '../features/Legal/PrivacyPolicy';
import TermsOfService from '../features/Legal/TermsOfService';
import CommunityGuidlines from '../features/Support/CommunityGuidlines';
import HelpCenter from '../features/Support/HelpCenter';
import SafetyCenter from '../features/Support/SafetyCenter';

import ChatAppReact from './../features/common/Chat/ChatAppReact';

import Content from './../features/workspace/Content';
import ContentArena from './../features/workspace/ContentArena';
import ContentDashboard from './../features/workspace/ContentDashboad';
import ContentLeaderBoard from './../features/workspace/ContentLeaderBoard';
import ContentRandomCode from './../features/workspace/ContentRandomCode';
import ContentTaskbar from './../features/workspace/ContentTaskbar';
import ContentUITools from './../features/workspace/ContentUITools';
import WorkspaceDataFillForm from './../features/workspace/WokspaceDataFillForm';
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
        <Route path="/" element={<StartUp />}>
          {/* FORM REGISTER LOGIN RECOVER CONTACT US AND RESET */}
          <Route path="register" element={<SignIn userDataSender={userDataSender} navLight={navLight} />} />
          <Route path="login" element={<SignUp navLight={navLight} />} />
          <Route path="reset" element={<PasswordRecovery />} />
          <Route path="recover" element={<ResetPassword />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="documentation" element={<Docs />} />

          {/* AFTER SIGN IN USER PROFILE */}
          <Route path="workspace" element={<WorkSpace />}>
            <Route path="workspace-data-fill-form" element={<WorkspaceDataFillForm />} />
            <Route path="content-ui-tools" element={<ContentUITools />} />
            <Route path="content-dashboard" element={<ContentDashboard />} />
            <Route path="content-taskbar" element={<ContentTaskbar />} />
            <Route path="content-leaderboard" element={<ContentLeaderBoard />} />
            <Route path="content-random-code" element={<ContentRandomCode />} />
            <Route path="content-arena" element={<ContentArena />} />
            <Route path="content" element={<Content />} />
          </Route>

          {/* ROUTING FROM NAVIGATION BAR */}
          <Route path="findwork" element={<FindWork />} />
          <Route path="freelance" element={<FreelanceProjects />} />
          <Route path="ranking" element={<LeaderBoard />} />
          <Route path="tutorials" element={<Tutorials navLight={navLight} />} />
          <Route path="tutorials/detail" element={<CoursesDetail />} />
          <Route path="hireprogrammer" element={<HireFreelancer />} />
          <Route path="aboutus" element={<CodeFace />} />
          <Route path="explore" element={<Explore />} />

          {/* GET STARTED */}
          {/* LEARN MORE */}
          <Route path="more" element={<ArticleList navLight={navLight} />} />

          {/* LEGAL */}
          <Route path="cookiespolicy" element={<CookiesPolicy />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsofservices" element={<TermsOfService />} />
          <Route path="lawenforcement" element={<LawEnforcement />} />

          {/* SUPPORT */}
          <Route path="communityguidlines" element={<CommunityGuidlines />} />
          <Route path="helpcenter" element={<HelpCenter />} />
          <Route path="safetycenter" element={<SafetyCenter />} />
          <Route path="*" element={<NotFound />} />

          <>
          <Outlet />
        </>
        </Route>
       
      </Routes>
    </div>
  );
};

export default Dashboard;
