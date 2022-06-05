import { Link } from "react-scroll";

function Nav({ toggle }) {
  return (
    <nav
      style={toggle ? { right: "0", opacity: "1", pointerEvents: "all" } : {}}
    >
      <ul>
        <li>
          <Link to="about-me">
            <i className="fa-solid fa-user"></i>
            <span>About me</span>
          </Link>
        </li>
        <li>
          <Link to="my-work">
            <i className="fa-solid fa-code"></i>
            <span>My-Work</span>
          </Link>
        </li>
        <li>
          <Link to="contact">
            <i className="fa-solid fa-at"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
