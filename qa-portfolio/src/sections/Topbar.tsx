import { Download } from "lucide-react";
import CTA from "../components/CTA";
import Logo from "../components/Logo";

const NavbarOptions = {
  home: "Home",
  about: "About",
  projects: "Projects",
  Skills: "Skills",
  learning: "Learning",
  certifications: "Certifications",
  contact: "Contact",
};

const Topbar = () => {
  return (
    <div className="bg-[#03172B] text-text-primary flex items-center justify-between px-10 py-5 shadow-md">
      <Logo></Logo>

      <div className="navitems flex gap-3">
        {Object.values(NavbarOptions).map((option) => (
          <div
            key={option}
            className="navitem cursor-pointer hover:text-primary-bright transition-all duration-300"
          >
            {option}
          </div>
        ))}
      </div>
      <CTA text="Download Resume" icon={<Download />} />
    </div>
  );
};

export default Topbar;
