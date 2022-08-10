import { useRef } from "react";

function Project(props) {
  const { title, description, img, github, live, tech, cta } = props;
  const imgElem = useRef();
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
          <p>{description}</p>
          <div className="p-cta">
            <a
              href={github}
              style={cta === "mono" ? { width: "100%", borderRight: "0" } : { width: "50%" }}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() =>
                (imgElem.current.style.background = "#6e549480")
              }
              onMouseLeave={() => (imgElem.current.style.background = "")}
            >
              <i className="fa-brands fa-github"></i>GitHub
            </a>
            <a
              href={live}
              style={
                cta === "mono" ? { display: "none" } : { display: "inline-block" }
              }
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() =>
                (imgElem.current.style.background = "#5aa839CC")
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
