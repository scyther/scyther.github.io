import "../css/ProjectCard.css";

const ProjectCard = ({
  src,
  name,
  desc,
  download = false,
  dlink,
  code = true,
  clink,
}) => {
  return (
    <div className="project_card">
      <div class="left">
        <img src={src} width={100} alt="Graphic missing" />
        <h3>{name}</h3>
      </div>
      <div className="right">
        <p>{desc}</p>
        <div class="buttons">
          {download ? (
            <a href={dlink}>
              <button>Download apk</button>
            </a>
          ) : (
            <a href={dlink} target="blank">
              <button>View Demo</button>
            </a>
          )}
          {code ? (
            <a href={clink} target="blank">
              <button>View Code</button>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
