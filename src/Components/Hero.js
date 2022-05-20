import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="hero main-container">
      <div className="d-wrapper">
        <p>Hi, my name is</p>
        <h1>
          <strong>Iustin Ionita</strong> <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString("I'm a self taught developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I can code in HTML")
                .pauseFor(1500)
                .deleteChars(4)
                .typeString("CSS / SCSS")
                .pauseFor(1500)
                .deleteChars(10)
                .typeString("JavaScript")
                .pauseFor(1500)
                .deleteChars(10)
                .typeString("React")
                .pauseFor(1500)
                .deleteAll()
                .typeString("..and this is just the beginning!")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Mark my words!")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I'm looking forward to meeting you!")
                .start();
            }}
            options={{
              autoStart: true,
              // loop: true
            }}
          />
        </h1>
        <button className="cta">Hire me</button>
      </div>
      <img src={require("../Images/qr.png")} alt="" />
    </div>
  );
}

export default Hero;
