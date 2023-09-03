import React from 'react';
import logo from "./photos/logo.svg";
import eclipse1 from "./photos/eclipse-1.svg";
import eclipse2 from "./photos/eclipse-2.svg";
import eclipse3 from "./photos/eclipse-3.svg";
import Footer from "./Footer";
import chatPreview from "./photos/chat-preview.svg";
import image1 from "./photos/image-1.png";
import image2 from "./photos/image-2.png";
import image3 from "./photos/image-3.png";
import image4 from "./photos/image-4.png";
import image5 from "./photos/image-5.png";
import image6 from "./photos/image-6.png";

function HeroText() {
  return (
    <div className="heroText">
      <h1>
        AI
        <font color="#FFFFFF"> Chatbot</font>
      </h1>
      <p>
        We`ve trained a model called ChatGPT which interacts<br></br> in a
        conversational way.
      </p>
      <a href="/chat">Continue</a>
    </div>
  );
}

function UpperFooter() {
  return (
    <div className="upperFooter">
      <h4>
        Let’s start experiencing the new internet{" "}
        <font color="#B6FBFF"> today.</font>
      </h4>
      <a href="/chat">Get started for free</a>
    </div>
  );
}

function StartChat() {

  return (
    <div className="startChat">
      <h2>
        Start chatting with<font color="#B6FBFF"> AI.</font>
      </h2>
      <p>
        Chat about any topic with ChatGPT in any time. It can<br></br> be your
        friend, tutor or therapist.
      </p>
      <a href="/chat">
        Let’s start chat
        <svg
          width="36"
          height="6"
          viewBox="0 0 36 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 3L31 0.113249V5.88675L36 3ZM0 3.5H31.5V2.5H0V3.5Z"
            fill="#B6FBFF"
          />
        </svg>
      </a>
      <br></br>
      <div className="chatPrevAnimation">
        <img
          src={chatPreview}
          
          alt="chatpreview"
        />
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div className="hero">
        <header className="App-header">
          <img src={logo} className="header" alt="logo" />
        </header>
        <HeroText />
      </div>
      <div className="circles">
        <img className="eclipse1" src={eclipse1} alt="eclipse1" />
        <div className="circles2">
          <img className='eclipse2' src={eclipse2} alt="eclipse2" />
          <img className='eclipse3' src={eclipse3} alt="eclipse3" />
        </div>
      </div>
      <StartChat />
      <div className="gallerySection">
        <div className="line"></div>
        <div className="row">
          <div className="leftSection">
            <h3>
              Chat with unique<br></br> characters
            </h3>
            <p>
              You can chat many different characters for a few set of topics and
              interests.
            </p>
            <a href="/chat">Let’s start chat</a>
            <div className="blankRectangle"></div>
          </div>
          <div className="rightSection">
            <div className="pictureText">
              <img src={image1} alt="image1" />
              <p>Hitachi Digital Brand Ecosystem.</p>
            </div>
            <div className="pictureText">
              <img src={image2} alt="image2" />
              <p>Stråbe</p>
            </div>
            <div className="pictureText">
              <img src={image3} alt="image3" />
              <p>Stråbe</p>
            </div>
            <div className="pictureText">
              <img src={image4} alt="image4" />
              <p>Aeizei</p>
            </div>
            <div className="pictureText">
              <img src={image5} alt="image5" />
              <p>Zvurçyk Fashion</p>
            </div>
            <div className="pictureText">
              <img src={image6} alt="image6" />
              <p>Lancome</p>
            </div>
          </div>
        </div>
      </div>
      <UpperFooter />
      <Footer />
    </div>
  );
};

export default Home;
