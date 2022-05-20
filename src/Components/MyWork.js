import Project from "./Project";

function MyWork() {
  return (
    <div className="my-work main-container">
      <div className="main-container-top">
        <h2 className="title">
          &lt; my-work /&gt;
          <span
            className="title-frame parallax"
            data-rate="0.05"
            data-start="1000"
            data-end="1400"
            data-direction="horizontal"
          >
            Projects
          </span>
        </h2>
        <h4 className="subtitle">Some things I've built</h4>
      </div>
      <div className="d-wrapper">
        <Project
          title="NFT Minter"
          img={require("../Images/nftminter.png")}
          github="https://github.com/iustinionita/nft-minter"
          live="https://github.com/iustinionita/nft-minter"
          tech={["HTML", "SCSS", "React", "JavaScript", "Web3"]}
          // rate="-0.1"
          // start="1200"
          // end="1600"
          // direction="horizontal"
        />
        <Project
          title="Presentation"
          img={require("../Images/safulock_pres.png")}
          github="https://safu-lock.com/"
          live="https://safu-lock.com/"
          tech={["HTML", "SCSS", "JavaScript"]}
          // rate="-0.1"
          // start="1400"
          // end="1800"
          // direction="horizontal"
        />
        <Project
          title="Crypto App"
          img={require("../Images/safulock_lock.png")}
          github="https://safu-lock.com/"
          live="https://safu-lock.com/"
          tech={["HTML", "SCSS", "JavaScript", "Web3", "Solidity"]}
          // rate="-0.1"
          // start="1600"
          // end="2000"
          // direction="horizontal"
        />
        <Project
          title="Dex App"
          img={require("../Images/dex.png")}
          github="https://safu-lock.com/"
          live="https://safu-lock.com/"
          tech={["JavaScript", "Node JS", "Web3", "Docker"]}
          // rate="-0.1"
          // start="1800"
          // end="2200"
          // direction="horizontal"
        />
        <Project
          title="Air Quality"
          img={require("../Images/air_pollution.png")}
          github="https://safu-lock.com/"
          live="https://safu-lock.com/"
          tech={["HTML", "SCSS", "React", "JavaScript", "Express"]}
          // rate="-0.1"
          // start="2000"
          // end="2400"
          // direction="horizontal"
        />
      </div>
    </div>
  );
}

export default MyWork;

// onMouseOver={() => document.querySelector("body").classList.add("body-bg")}
// onMouseLeave={() => document.querySelector("body").classList.remove("body-bg")}
