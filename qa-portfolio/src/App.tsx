import Summary from "./sections/Home.Summary";
import Topbar from "./sections/Topbar";
import Metrics from "./sections/Home.Metrics";
import Tools from "./sections/Home.Tools";
import Projects from "./sections/Home.Projects";
import Footer from "./sections/Footer";
import Journey from "./sections/Home.Journey";

function App() {
  return (
    <div className="bg-[#021020] min-h-screen text-text-primary">
      <Topbar></Topbar>
      <Summary></Summary>
      <Metrics></Metrics>
      <Tools></Tools>
      <Projects></Projects>
      <Journey></Journey>
      <Footer></Footer>
    </div>
  );
}

export default App;
