import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Learning from "./pages/Learning";
import Home from "./pages/Home";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <div className="bg-[#021020] min-h-screen text-text-primary">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
