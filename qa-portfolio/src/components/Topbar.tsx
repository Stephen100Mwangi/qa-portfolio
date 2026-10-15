import { Download } from "lucide-react";
import CTA from "./CTA";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  return (
    <div className="bg-[#03172B] text-text-primary flex items-center justify-between px-20 py-5 shadow-md">
      <Logo></Logo>

      <div className="navitems flex gap-3">
        {Object.values(NavbarOptions).map((option) => (
          <Link
            to={option === NavbarOptions.home ? "/" : option.toLowerCase()}
            key={option}
            className={`navitem cursor-pointer hover:text-primary-bright transition-all duration-300 ${location.pathname.replace("/", "") == option.toLowerCase() ? "underline text-primary" : ""}`}
          >
            {option}
          </Link>
        ))}
      </div>
      <CTA text="Download Resume" icon={<Download />} />
    </div>
  );
};

export default Topbar;
