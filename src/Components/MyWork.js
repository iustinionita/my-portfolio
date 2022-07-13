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
          description="Easy to use app that allows you to mint NFTs on Binance Smart Chain in 3 easy steps. Upload your image, set a title and a description and click MINT. All you need is MetaMask and some BNB to pay for the fees."
          github="https://github.com/iustinionita/react-nft-minter"
          live="https://iustinionita.github.io/react-nft-minter/"
          tech={["HTML", "SCSS", "React", "JavaScript", "Web3"]}
        />
        <Project
          title="Presentation"
          img={require("../Images/safulock_pres.png")}
          description="This is the presentation Website for my Crypto Locker App. Find out what this project is all about, how does it work and check the Roadmap to see what's coming up. You can also see the latest transactions and locks from the smart contract in a easy-to-read way. (Please bear in mind this is not a geniune project, it's simply built for fun)"
          github="https://github.com/iustinionita/safu-lock"
          live="https://iustinionita.github.io/safu-lock/"
          tech={["HTML", "SCSS", "JavaScript"]}
        />
        <Project
          title="Crypto Locker App"
          img={require("../Images/safulock_lock.png")}
          description="This app will allow you to lock any crypto token from Binance Smart Chain into a smart contract for a defined period of time. Are you a crypto project CEO? Proove to your community that you can be trusted by showing them your funds are locked - you choose for how long - and you're not running away with their money. Or are you simply looking to hold your tokens for a day, a month or, why not, few years? I'll take care of them, just come back at the agreed date and claim everything back. (Please bear in mind this is not a geniune project, it's simply built for fun)"
          github="https://github.com/iustinionita/app-safu-lock"
          live="https://iustinionita.github.io/app-safu-lock/"
          tech={["HTML", "SCSS", "JavaScript", "Web3", "Solidity"]}
        />
        <Project
          title="Air Quality"
          img={require("../Images/air_pollution.png")}
          description="Check the air quality in your area by searching for your location. Find the NO₂, O₃, PM10 and PM2.5 levels or, if you don't want anything more than a simple rating for the air quality this app will rate the air pollution level from Very Poor to Good."
          github="https://github.com/iustinionita/air-quality-web"
          live="http://air-pollution.ddns.net/"
          tech={["HTML", "SCSS", "React", "JavaScript", "Express"]}
        />
        <Project
          title="Dex App"
          img={require("../Images/dex.png")}
          description="A NodeJS app that will set a Limit Order on PancakeSwap Decentralized Exchange so you won't miss a trade again. It's really easy to use, just start the script, input all the necessary information and the app will do the rest for you. Aw, by the way, you can use Docker for a smoother experience."
          github="https://github.com/iustinionita/Dex_limit_order"
          live="#"
          tech={["JavaScript", "Node JS", "Web3", "Docker"]}
          cta="mono"
        />
        <Project
          title="My Portofolio"
          img={require("../Images/my_cv.png")}
          description="You're already looking at it! I tought that a CV without any projects I've done may not be enough so this Website will give you a brief idea of the things I can currently do. But this is just the beginning, mark my words!"
          github="https://github.com/iustinionita/my-portofolio"
          live="#"
          tech={["HTML", "SCSS", "JavaScript", "React"]}
          cta="mono"
        />
      </div>
    </div>
  );
}

export default MyWork;
