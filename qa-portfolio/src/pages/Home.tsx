import Journey from "../sections/Home.Journey";
import Metrics from "../sections/Home.Metrics";
import Projects from "../sections/Home.Projects";
import Summary from "../sections/Home.Summary";
import Tools from "../sections/Home.Tools";

const Home = () => {
  return (
    <div>
      <Summary></Summary>
      <Metrics></Metrics>
      <Tools></Tools>
      <Projects></Projects>
      <Journey></Journey>
    </div>
  );
};

export default Home;
