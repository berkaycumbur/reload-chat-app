import React from "react";
import logo from "./photos/logo.svg";
import chatEclipse1 from "./photos/chatEclipse-1.svg";
import chatEclipse2 from "./photos/chatEclipse-2.svg";
import chatEclipse3 from "./photos/chatEclipse-3.svg";
import chatEclipse4 from "./photos/chatEclipse-4.svg";

const Chat = () => {
  return (
    <div className="chat">
      <div className="banner">
        <div className="back">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="#B6FBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 7L5 12"
              stroke="#B6FBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 17L5 12"
              stroke="#B6FBFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{"    "}
          <a href="/">  Back</a>
        </div>

        <h1>
          AI<font color="#FFFFFF"> Chatbot</font>
        </h1>
        <p>
          We’ve trained a model called<br></br>ChatGPT which interacts in a<br></br>
          conversational way.
        </p>
        <div className="chatCircles">
            <img src={chatEclipse1} alt="circle"/>
            <img src={chatEclipse2} alt="circle"/>
            <img src={chatEclipse3} alt="circle"/>
            <img src={chatEclipse4} alt="circle"/>
        </div>
      </div>
      <div className="mainChat">
        <img src={logo} alt="logo"></img>
      </div>
    </div> 
  );
};

export default Chat;
