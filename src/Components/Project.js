import { useRef } from "react";
// import useParallax from "./useParallax";

function Project(props) {
  const { title, description, img, github, live, tech } = props;
  const imgElem = useRef();
  // const [screenWidth, setScreenWidth] = useState();

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     setScreenWidth(window.screen.width);
  //   });
  // }, []);

  return (
    <div className="project">
      <img src={img} className="p-img" alt={img} ref={imgElem} />
      <div className="p-body">
        <h3 className="p-title">{title}</h3>
        <h5 className="p-tech">
          {tech.map((elem) => (
            <span key={elem}>{elem}</span>
          ))}
        </h5>
        <div className="p-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            pariatur dolorem illo vitae numquam facere, modi nemo id omnis non?
          </p>
          <div className="p-cta">
            <a
              href={github}
              className="github"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() =>
                (imgElem.current.style.background = "#6e5494")
              }
              onMouseLeave={() => (imgElem.current.style.background = "")}
            >
              <i className="fa-brands fa-github"></i>GitHub
            </a>
            <a
              href={live}
              className="github"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() =>
                (imgElem.current.style.background = "#5aa839")
              }
              onMouseLeave={() => (imgElem.current.style.background = "")}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
