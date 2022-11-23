/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { ToastContainer } from 'react-toastify';
import styles from './workspace.module.css';
import routingObject from './../../routing';
import { useNavigate } from 'react-router-dom';

import logo from './../assets/svg/1.svg';

import {MdLeaderboard, MdOutlineAddTask} from 'react-icons/md';
import {FaReact} from 'react-icons/fa';
import {BiCodeAlt} from 'react-icons/bi';
import {GiHeartInside} from 'react-icons/gi'; 
import {RiHomeSmileLine} from 'react-icons/ri';
import {HiDocumentText} from 'react-icons/hi';
import {SiTutanota} from 'react-icons/si';

const allLinks = [
  {
    id: 1,
    name: 'Leader-board',
    isWorkspace: true,
    path: '/content-leaderboard',
    icon: <MdLeaderboard />,
  },

  {
    id: 2,
    name: 'React CMS',
    isWorkspace: true,
    path: '/content-ui-tools',
    icon: <FaReact />,
  },
  {
    id: 3,
    name: 'Taskbar',
    isWorkspace: true,
    path: '/content-taskbar',
    icon: <MdOutlineAddTask />,
  },
  {
    id: 4,
    name: 'Code explanation',
    isWorkspace: true,
    path: '/content-random-code',
    icon: <BiCodeAlt />,
  },
  {
    id: 5,
    name: 'Arena',
    isWorkspace: true,
    path: '/content-arena',
    icon: <GiHeartInside />,
  },
  {
    id: 6,
    name: 'Home',
    isWorkspace: false,
    path: '/',
    icon: <RiHomeSmileLine />,
  },
  {
    id: 7,
    name: 'Docs',
    isWorkspace: false,
    path: '/documentation',
    icon: <HiDocumentText />,
  },
  {
    id: 8,
    name: 'Tutorials',
    isWorkspace: false,
    path: '/tutorials',
    icon: <SiTutanota />,
  },
];

const AvatarMenuLinks = ['Home', 'Docs', 'Settings'];

const WorkspaceNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { dynamicRouting } = routingObject;

  const renderedLinks = allLinks.map((link) => {
    return (
      <li
        key={link.id}
        className={`${styles.workspace_navigation_items_css}`}
        onClick={() => dynamicRouting(navigate, `${link.isWorkspace ? '/workspace' : ''}${link.path}`)}
      >
        {link.name}
        {link.icon}
      </li>
    );
  });

  return (
    <>
      <Box backgroundColor="#1c1f26" borderBottom="1px solid #383d47" paddingRight="32px" overflow="hidden">
        <Flex height="32px" alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={4} alignItems={'center'}>
            {/* navigation bar menu */}
            <ul
              className="d-flex"
              style={{
                listStyleType: 'none',
              }}
            >
              {renderedLinks}
            </ul>
          </HStack>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {renderedLinks}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default WorkspaceNav;
