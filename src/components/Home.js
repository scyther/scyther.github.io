import Card from './Card'
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home_body">
      <h1>CHIRAG SHARMA</h1>
      <h2>React Developer</h2>
      <a href="https://prod.store.digiboxx.com:9000/8104126eac054ac7/639578_Chirag_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=aazxcdklmnghfg%2F20210211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210211T161430Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1dee2bf21fb0a28702de02a44713d5e86314e9f32ce90d7c49bffd7517497ef7" target="blank"><button>Download Resume</button></a>
      <h3>Education</h3>
      <div className="cards">
        <Card
          header="MCA"
          subhead="(2020-2023)"
          desc="Central University of Himachal Pradesh"
        />
        <Card
          header="B.Sc (Hons) Computer Science"
          subhead="(2017-2020)"
          desc="University of Delhi"
        />
      </div>
    </div>
  );
};
export default Home;
