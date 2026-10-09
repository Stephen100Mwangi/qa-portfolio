import Logo from "../components/Logo";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-[#03172B] shadow-md">
      <div className="flex items-center gap-2">
        <div className="scale-75 flex justify-center items-center">
          <Logo />
        </div>
        <p className="text-xs">Quality Assurance Engineer | Nairobi, Kenya</p>
      </div>

      <div className="flex gap-10 items-center justify-between">
        <div className="flex gap-3 items-center scale-125">
          <FaLinkedin />
          <FaGithub />
          <CiMail />
        </div>
        <div className="flex gap-3 text-sm">
          <p>Build</p>
          <p>Test</p>
          <p>Improve</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
