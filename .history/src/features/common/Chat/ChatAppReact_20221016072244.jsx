import { HubConnectionBuilder } from "@microsoft/signalr";
import Picker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { AiFillRobot, AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { BiDislike, BiLike } from "react-icons/bi";
import { GoMute, GoUnmute } from "react-icons/go";
import { ImAttachment } from "react-icons/im";
import { MdMinimize, MdOutlineExitToApp, MdSupportAgent } from "react-icons/md";
import { TiTimesOutline } from "react-icons/ti";
import chatImg from "./../../assets/chat.png";
import Message from "./Message";
import Typebot from "typebot-js";

const chatEmojiGroup = {
  smileys_people: "yellow faces",
  animals_nature: "cute dogs and also trees",
  food_drink: "milkshakes and more",
  travel_places: "I love trains",
  activities: "lets play a game",
  objects: "stuff",
  symbols: "more stuff",
  flags: "fun with flags",
  recently_used: "did I really use those?!",
};

const reviews = [
  {
    title: "Why do you want to end chat",
    options: ["helped me", "not helped me"],
  },
  {
    title: "do you have any suggestion for better customer service ?  ",
    options: ["yes", "no"],
  },
];

const ChatWindow = (props) => {
  const chat = props.chat.map((m) => (
    <Message
      key={Date.now() * Math.random()}
      user={m.user}
      message={m.message}
    />
  ));

  return <div>{chat}</div>;
};

const ChatAppReact = () => {
  const [chatView, setChatView] = useState(false);
  const [toggle, onToggle] = useState(false);
  const [toggleMute, setToggleMute] = useState(false);
  // Bot or Agent
  const [botOrAgent, setBotOrAgent] = useState(false);

  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [emojiView, setEmojiView] = useState(false);

  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);

  const [quit, setQuit] = useState(false);
  const [review, setReview] = useState(false);

  const renderedOptionsForReview = reviews.map((opt) => {
    return (
      <div>
        <h3 className="path-clip path-margin">
          {opt.title}
          <span
            style={{
              fontSize: "11px",
              fontWeight: "700",
              textAlign: "end",
              display: "block",
              marginTop: "10px",
              marginRight: "7px",
            }}
          >
            {new Date().toLocaleTimeString({ hour24: true })}
          </span>
        </h3>
        <div className="d-flex">
          {opt.options.map((radio, index) => {
            return (
              <div key={index} className="path-margin d-flex">
                <input
                  type="radio"
                  id="your-view"
                  name="your-view"
                  className="me-2"
                />
                <label htmlFor="your-view">{radio}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  const latestChat = useRef(null);

  latestChat.current = chat;

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMessage((pre) => (pre += emojiObject.emoji));
  };

  const sendMessage = async (user, message) => {
    const chatMessage = {
      user: user,
      message: message,
    };

    if (connection.connectionStarted) {
      try {
        await connection.send("SendMessage", chatMessage);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("No connection to server yet.");
    }
  };

  const handleClickSubmit = () => {
    const isUserProvided = user && user !== "";
    const isMessageProvided = message && message !== "";

    if (isUserProvided && isMessageProvided) {
      sendMessage(user, message);
    } else {
      setError("Please insert an user and a message.");
    }
  };

  const onUserUpdate = (e) => {
    setUser(e.target.value);
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };

  const handleReviewReturner = () => {
    setQuit(!quit);
    setReview(!review);
  };

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/hubs/chat")
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  return (
    <div>
      {!chatView ? (
        <div className="chat-custom-view">
          <img
            src={chatImg}
            alt="chat logo view"
            onClick={() => setChatView(!chatView)}
          />
        </div>
      ) : (
        <div className="view-container-chat">
          <div
            className={`${quit ? "modal-inside" : "modal-inside-none-dock"}`}
          >
            {quit && (
              <div>
                <div className="d-flex justify-content-end">
                  <TiTimesOutline onClick={() => setQuit(!quit)} />
                </div>
                <div className="icon-round-container">
                  <MdOutlineExitToApp />
                </div>
                <h2 className="mt-3 text-center">
                  Do you really want to leave current chat?
                </h2>
                <button onClick={() => handleReviewReturner()}>
                  Stop chat
                </button>
              </div>
            )}
          </div>
          <div className="chat-top-icons-container">
            <>
              <BsThreeDots onClick={() => onToggle(!toggle)} />

              <div
                className={`${
                  toggle
                    ? "chat-top-icons-container-dropdown"
                    : "chat-top-icons-container-dropdown-none"
                }`}
              >
                <ul className="chat-options">
                  <li
                    onClick={() => {
                      onToggle(!toggle);
                      setBotOrAgent(false);
                    }}
                  >
                    <AiFillRobot /> Chat with bot
                  </li>
                  <li
                    onClick={() => {
                      setBotOrAgent(true);
                      onToggle(!toggle);
                    }}
                  >
                    <MdSupportAgent /> Chat with agent
                  </li>
                  <li onClick={() => setToggleMute(!toggleMute)}>
                    {!toggleMute ? (
                      <>
                        <GoUnmute /> Mute chat
                      </>
                    ) : (
                      <>
                        <GoMute /> Unmute chat
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </>
            <p>Chat with us!</p>
            <div>
              {!quit ? (
                <>
                  <MdMinimize onClick={() => setChatView(!chatView)} />
                  <TiTimesOutline onClick={() => setQuit(!quit)} />
                </>
              ) : (
                <div style={{ width: "64px", height: "37px" }}></div>
              )}
            </div>
          </div>

          <div className="chat-container-header">
            <div className="chat-header-view">
              <div>
                {!botOrAgent ? (
                  <AiFillRobot
                    style={{ fontSize: "2rem", marginLeft: "16px" }}
                  />
                ) : (
                  <MdSupportAgent
                    style={{ fontSize: "2rem", marginLeft: "16px" }}
                  />
                )}
              </div>

              <div className="chat-header-right">
                {botOrAgent === false ? (
                  <div>
                    <h4>Support Bot</h4>
                    <h5>Chat with bot</h5>
                  </div>
                ) : (
                  <div>
                    <h4>Support Agent</h4>
                    <h5>Chat with Agent</h5>
                  </div>
                )}

                <div className="like-disLike">
                  <BiLike className="reactions" />
                  <BiDislike className="reactions" />
                </div>
              </div>
            </div>
          </div>

          {/* CHAT BODY STARTS HERE */}
          <div className="chat-container-body">
            <div className="chat-messages-container">
              <ChatWindow chat={latestChat.current} />
              {review && renderedOptionsForReview}
            </div>
            <div className="chat-textarea-container">
              {emojiView && (
                <div
                  style={{
                    position: "absolute",
                    top: "-324px",
                    left: "88px",
                  }}
                >
                  <Picker
                    groupNames={chatEmojiGroup}
                    disableSearchBar={true}
                    preload={true}
                    onEmojiClick={onEmojiClick}
                  />
                </div>
              )}

              <div className="text-area-tools">
                <label htmlFor="file">
                  <ImAttachment />
                </label>
                <input
                  type="file"
                  id="file"
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                  accept=".docx,.pdf,.png,.jpg,.gif,.md"
                  style={{ display: "none" }}
                />
                <BsEmojiSmile
                  className="emoji-icon-container-class"
                  onClick={() => setEmojiView(!emojiView)}
                />
                <AiOutlineSend onClick={handleClickSubmit} />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder={
                  error && error.length > 0 ? error : "Your message..."
                }
                disabled={toggleMute ? true : false}
              ></textarea>
            </div>
          </div>
          {/* CHAT BODY END HERE */}

          <div className="chat-container-footer">
            <p>powered by CodeFace</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAppReact;
