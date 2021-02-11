const SkillCard = ({ skillName }) => {
  const colors = ["#DE4839", "#23C4ED", "#38CC77", "#EDC126", "#03C6C7"];

  const myStyle = {
    background: colors[Math.floor(Math.random() * colors.length)],
    border: "1px solid grey",
    padding: "9px",
    "border-radius": "25px",
    margin: "5px",
  };

  return (
    <div className="skillcard" style={myStyle}>
      <h4>{skillName}</h4>
    </div>
  );
};

export default SkillCard;
