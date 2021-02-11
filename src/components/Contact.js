import "../css/Contact.css";
import mail from "../assets/gmail.svg";
import github from "../assets/github.png";
import call from "../assets/phone.png"

const Contact = () => {
  return (
    <div className="contactPage">
      <h2>Contact</h2>
      <a href="mailto: sharma.chirag3737@gmail.com">
        <img src={mail} alt="mail Logo" width="20px" />
        sharma.chirag3737@gmail.com
      </a>
      <a href="https://github.com/scyther" target="blank">
        <img src={github} alt="github logo" height="20px" />
        scyther
      </a>
      <a href="tel:7018622142"><img src={call} alt="call Logo" height="20px"/>7018622142</a>
    </div>
  );
};

export default Contact;
