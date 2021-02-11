import "../css/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="project_page">
      <h2>Projects</h2>
      <div className="cards">
        <ProjectCard
          src="https://scx2.b-cdn.net/gfx/news/hires/2019/instagram.jpg"
          name="InstaClone"
          desc="A React-Native clone of Instagram to share photos. "
          download={true}
          dlink="https://github.com/scyther/instaClone/raw/main/preview/app-arm64-v8a-release.apk"
          clink="https://github.com/scyther/InstaClone"
        />
        <ProjectCard
          src="https://img.favpng.com/8/14/24/3d-tic-tac-toe-tic-tac-toe-png-favpng-xzNT32BhZYkMVgtA4Qu8gxvhW.jpg"
          name="Tic-Tac-Toe"
          desc="A Tic-Tac-Toe game in React-JS"
          dlink="https://scyther.github.io/TicTacToe/"
          clink="https://github.com/scyther/TicTacToe"
        />
        <ProjectCard
          src="https://cdn.iconscout.com/icon/free/png-512/b-characters-character-alphabet-letter-36044.png"
          name="BGChanger"
          desc="A React-Native app to change background to random color "
          download={true}
          dlink="https://github.com/scyther/BGChanger/raw/main/BgChanger-app-arm64-v8a-release.apk"
          clink="https://github.com/scyther/BGChanger"
        />
      </div>
      <h2>Work</h2>
      <ProjectCard
        src="https://www.chaitnya.online/logo192.png"
        name="SchoolWebsite"
        desc="Website of a School with login and Student DashBoard"
        dlink="https://www.chaitnya.online/"
        code={false}
      />
    </div>
  );
};
export default Projects;
