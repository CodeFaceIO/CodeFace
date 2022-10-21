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

const allLinks = [
  {
    id: 1,
    name: 'Leader-board',
    isWorkspace: true,
    path: '/content-leaderboard',
  },

  {
    id: 2,
    name: 'React CMS',
    isWorkspace: true,
    path: '/content-ui-tools',
  },
  {
    id: 3,
    name: 'Taskbar',
    isWorkspace: true,
    path: '/content-taskbar',
  },
  {
    id: 4,
    name: 'Code explanation',
    isWorkspace: true,
    path: '/content-random-code',
  },
  {
    id: 5,
    name: 'Arena',
    isWorkspace: true,
    path: '/content-arena',
  },
  {
    id: 6,
    name: 'Home',
    isWorkspace: false,
    path: '/',
  },
  {
    id: 7,
    name: 'Docs',
    isWorkspace: false,
    path: '/documentation',
  },
  {
    id: 8,
    name: 'Tutorials',
    isWorkspace: false,
    path: '/tutorials',
  },
];

const AvatarMenuLinks = ['Home', 'Docs', 'Settings'];

const WorkspaceNav = ({ }) => {
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
      </li>
    );
  });

  return (
    <>
      <Box backgroundColor="#0e1217" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} borderBottom="1px solid #383d47">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
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
          <Flex alignItems={'center'}>
            <Button aria-label="Toggle Color Mode" onClick={toggleColorMode} _focus={{ boxShadow: 'none' }} w="fit-content">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} ml={5}>
                <Avatar
                  size={'md'}
                  //   ml={5}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList backgroundColor="#0e1217">
                {AvatarMenuLinks.map((link, index) => (
                  <MenuItem border="none" key={index}>
                    {link}
                  </MenuItem>
                ))}
                <MenuDivider />
                <MenuItem border="none">Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
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
