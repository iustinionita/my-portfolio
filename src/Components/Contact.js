import { useRef } from "react";
import emailjs from "@emailjs/browser";
import useParallax from "./useParallax";

function Contact() {
  useParallax();
  const send = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x4n7bd4",
        "template_12f8qlp",
        e.target,
        "ZmJBE7eMVS8tVyJP5"
      )
      .then(
        (result) => {
          //success
          send.current.value = "Cheers!";
          send.current.style.backgroundColor = "#4BB543";
        },
        (error) => {
          //error
          alert(
            "Sorry, there's a technical error. Please contact me on social media!"
          );
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact main-container" id="contact">
      <div className="main-container-top">
      <h2 className="title">&lt; contact-me /&gt;</h2>
      <h4 className="subtitle">Have a question or want to work together?</h4>
      </div>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          id="c-subject"
          autoComplete="off"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          id="c-email"
          autoComplete="off"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          id="c-message"
          cols="40"
          rows="6"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Send" ref={send} />
      </form>
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/don.iustin"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/iustin_94"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/iustinionita"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
