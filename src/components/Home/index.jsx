import "./home.css";
import close from "./Img/close.svg";
import menu from "./Img/menu.svg";
import kle from "./Img/ColgEntrance.jpeg";
import chatbot from "./Img/chatbot.png";
import { Link } from "react-router-dom";

function main() {
  return (
    <div className="App">
      <div class="nav-bar">
        <div class="container">
          <a class="logo-nav" href="">
            KLE<span>ChatBot</span>
          </a>
          <img
            id="mobile-cta"
            class="mobile-menu"
            src={menu}
            alt="navigation"
          />
          <nav>
            <img
              id="mobile-exit"
              class="mobile-menu-exit"
              src={close}
              alt="close navigation"
            />
            <ul class="primary-nav">
              <li class="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#feed">FeedBack</a>
              </li>
              <li>
                <Link to='/chat'>ChatBot</Link>
              </li>
            </ul>

            <ul class="second-nav">
              <li class="go-premium-cta">
                <Link to="/login">LogIn</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section class="hero" id="homo">
        <div class="container">
          <div class="left-col">
            <p class="sub-head">WelCome to KLE ChatBot</p>
            <h1>Meet our intelligent assistant ready to assist you with any questions.</h1>
            <div class="hero-cta">
              <Link to="/login" class="primery-cta">
                LogIn
              </Link>
              <Link to="/Signup" class="primery-cta">
                Signup
              </Link>
            </div>
          </div>
          <img src={chatbot} alt="chat" class="chat" />
        </div>
      </section>
      <section class="test-monials-section" id="about">
        <div class="container">
          <ul>
            <li>
              <img src={kle} alt="Person 1" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Harshavardhan</cite>
            </li>
            <li>
              <img src={kle} alt="Person 2" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Nikhil</cite>
            </li>
            <li>
              <img src={kle} alt="Person 3" />
              <blockquote>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore"
              </blockquote>
              <cite> &mdash; Gulsan</cite>
            </li>
          </ul>
        </div>
      </section>
      <section class="contact-section" id="feed">
        <div class="container">
          <div class="contact-left">
            <h2>FeedBack    </h2>
            <form action="#" method="post">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="send message" class="send-message" />
            </form>
          </div>
        </div>
</section>
    </div>
    
  );
};

export default main;
