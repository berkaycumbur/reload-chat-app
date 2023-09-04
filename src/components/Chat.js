import React, { useState } from "react";
import logo from "./photos/logo.svg";
import chatEclipse1 from "./photos/chatEclipse-1.svg";
import chatEclipse2 from "./photos/chatEclipse-2.svg";
import chatEclipse3 from "./photos/chatEclipse-3.svg";
import chatEclipse4 from "./photos/chatEclipse-4.svg";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
const API_KEY = "deneme";

//I tried to work on the solutşon on the internet i seached most of it tried to understand
//this one is the working one i think bu i could not make the chatbot container to try and as you know
//chatgpt api is priced over queries so you can examine the code and look for it.


const Chat = () => {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

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
          </svg>
          {"    "}
          <a href="/"> Back</a>
        </div>

        <h1>
          AI<font color="#FFFFFF"> Chatbot</font>
        </h1>
        <p>
          We’ve trained a model called<br></br>ChatGPT which interacts in a
          <br></br>
          conversational way.
        </p>
        <div className="chatCircles">
          <img src={chatEclipse1} alt="circle" />
          <img src={chatEclipse2} alt="circle" />
          <img src={chatEclipse3} alt="circle" />
          <img src={chatEclipse4} alt="circle" />
        </div>
      </div>
      <div className="mainChat">
        <img src={logo} alt="logo"></img>
        <div className="chatContainer">
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="ChatGPT is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message key={i} model={message} />;
                })}
              </MessageList>
              <MessageInput
                placeholder="Send a Message"
                onSend={handleSendRequest}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Chat;
