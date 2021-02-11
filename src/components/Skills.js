import "../css/Skills.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skillPage">
      <h2>Skills</h2>
      <div className="cards">
        <SkillCard skillName="Git/GitHub" />
        <SkillCard skillName="JavaScript" />
        <SkillCard skillName="Node.js" />
        <SkillCard skillName="React-JS" />
        <SkillCard skillName="React-Native" />
        <SkillCard skillName="Redux" />
        <SkillCard skillName="Context-Api" />
        <SkillCard skillName="Mongo-DB" />
        <SkillCard skillName="MySQL" />
        <SkillCard skillName="FireBase" />
        <SkillCard skillName="Express.js" />
        <SkillCard skillName="AdobeXD" />
      </div>
    </div>
  );
};

export default Skills;
