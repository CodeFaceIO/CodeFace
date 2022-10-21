/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Typebot from 'typebot-js';

const ChatTypeBot = () => {
  useEffect(() => {
    var typebotCommands = Typebot.initBubble({
      url: 'https://viewer.typebot.io/customer-support-copy-9sq7b5w',
      proactiveMessage: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/58683199?v=4',
        textContent: 'I have a question for you!',
        delay: 2000,
      },
      button: { color: '#0000ff', iconColor: '#264653' },
    });
  }, []);
  return (
    <>
    </>
  );
};

export default ChatTypeBot;
