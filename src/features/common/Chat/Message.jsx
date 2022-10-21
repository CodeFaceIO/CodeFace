import React from "react";

const Message = ({ chat }) => {
  const { user, message } = chat;
  
  return (
    <div>
      <p>
        <strong>{user}</strong> says:
      </p>
      <p>{message}</p>
    </div>
  );
};

export default Message;
