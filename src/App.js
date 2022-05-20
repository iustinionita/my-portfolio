import { useState } from "react";
import AboutMe from "./Components/About-me";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import MyWork from "./Components/MyWork";
import Nav from "./Components/Nav";
import { Sling as Hamburger } from "hamburger-react";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div>
      <div id="hamburger">
        <div className="logo">
          <img src={require("./Images/logo_invert.png")} alt="" />
          <p>Iustin Ionita</p>
        </div>
        <Hamburger
          onToggle={() => {
            setMenuToggle(!menuToggle);
          }}
        />
      </div>
      <Nav toggle={menuToggle} />
      <Hero />
      <AboutMe />
      <MyWork />
      <Contact />
    </div>
  );
}

export default App;
