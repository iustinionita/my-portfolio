function Nav({toggle}) {
  return (
    <nav style={toggle ? {right: '0', opacity: '1', pointerEvents: 'all'} : {}}>
      <ul>
        <li>
          <i className="fa-solid fa-user"></i>
          <span>About me</span>
        </li>
        <li>
          <i className="fa-solid fa-code"></i>
          <span>My-Work</span>
        </li>
        <li>
          <i className="fa-solid fa-at"></i>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
