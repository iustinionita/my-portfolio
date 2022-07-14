function AboutMe() {
  return (
    <div className="about-me main-container">
      <div className="main-container-top">
        <h2 className="title">
          &lt; about me /&gt;
          <span
            className="title-frame parallax"
            data-rate="0.05"
            data-start="400"
            data-end="800"
            data-direction="horizontal"
          >
            Get to know
          </span>
        </h2>
        <h4 className="subtitle">
          My main focus these days is building intuitive, user-friendly websites
          / apps that can be easily used by anyone.
        </h4>
      </div>
      <div className="d-wrapper">
        <div className="profile-photo">
          <div className="img-border"></div>
          <img src={require("../Images/profile_photo.jpeg")} alt="profile" />
        </div>
        <div className="about-me-content">
          <p>
            Hi there! My name is Iustin and
            <span> I enjoy creating things that live on the internet.</span>
            <br /> <br /> My interest in Front End Development started back in
            2011 when
            <span> I made my first website for a game server</span> - this
            thought me a lot about HTML and CSS! <br />
            <br /> Fast-forward to today, after the experience I've had creating
            <span> my first crypto-token</span> and launching it live on the
            main-net with an <span>
              initial liquidity of $24k raised in the first 8 minutes
            </span> of the presale phase I can proudly say that I understood the power
            of <span>HTML, CSS and JavaScript</span> as the basic presentation
            website I've done for this crypto-token represented 90% of the
            entire project.
          </p>
          <div className="cta">
            <button>Download My CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
