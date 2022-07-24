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
            "Sorry, there's a technical error. Please email me: ionita.iustin@gmail.com"
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
      <div className="d-wrapper">
        <div className="contact-details">
          <ul>
            <li>
              <a
                href="https://goo.gl/maps/uuUuiRy7fEKRWe58A"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>8 Northville Road,
                Filton, Bristol, BS7 0RG
              </a>
            </li>
            <li
              onClick={() =>
                window.open(
                  "mailto:ionita.iustin@gmail.com?subject=Let's%20have%20a%20chat!"
                )
              }
            >
              <i className="fa-solid fa-envelope"></i>ionita.iustin@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone"></i><a href="tel:07902843634">0790 284 3634</a>
            </li>
          </ul>
          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/iustinionita/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
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
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="c-subject"
            placeholder="Name"
            autoComplete="off"
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
      </div>
      <p>Made with ❤️ by Iustin Ionita - {new Date().getFullYear()}</p>
    </div>
  );
}

export default Contact;
