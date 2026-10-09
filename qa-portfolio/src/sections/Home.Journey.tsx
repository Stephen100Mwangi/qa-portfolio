import { FiGithub } from "react-icons/fi";
import { CiLinkedin, CiMail } from "react-icons/ci";
import {
  BadgeCheck,
  BugOff,
  Code,
  GraduationCap,
  MoveRight,
} from "lucide-react";

const qaJourney = [
  {
    role: "Software Engineer",
    years: "2 yrs",
    period: "2021 - 2023",
    location: "",
    icon: <Code />,
  },
  {
    role: "QA/QE Intern",
    years: "3 months",
    period: "Sep - Dec 2024",
    location: "TEACH2GIVE",
    icon: <GraduationCap />,
  },
  {
    role: "Quality Analyst",
    years: "1 yr",
    period: "Jan 2025 - Present",
    location: "Griffin Global Technologies",
    icon: <BugOff />,
  },
];

const certifications = [
  { name: "ISTQB CTFL (ASTQB)", detail: "Sep 2025" },
  { name: "TestRail (Multiple Certifications)", detail: "" },
  { name: "API Testing (AT-SQA)", detail: "" },
  { name: "Agile & Scrum (IBM / Coursera)", detail: "" },
  { name: "AI Testing (In Progress)", detail: "" },
];

const MyLinks = [
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    url: "https://www.linkedin.com/in/stephen-wahome-a89440373/",
  },
  {
    name: "GitHub",
    icon: <FiGithub />,
    url: "https://github.com/Stephen100Mwangi",
  },
  {
    name: "Email",
    icon: <CiMail />,
    url: "mailto:mwangiwahome70@gmail.com",
  },
  //   {
  //     name: "Location",
  //     icon: <CiLocationOn />,
  //     url: "Nairobi, Kenya",
  //   },
];

const Journey = () => {
  return (
    <div className="flex justify-between items-start px-10 py-5 gap-10 my-10">
      <div className="w-[45%] border-r pr-5">
        <p className="font-bold text-xl text-white">My QA Journey</p>
        <div className="mt-5 w-full justify-between flex flex-nowrap overflow-clip gap-5">
          {qaJourney.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 text-sm text-slate-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-white">{item.role}</p>
                <p className="text-slate-400">{item.period}</p>
                <p className="text-slate-400">{item.location}</p>
              </div>
              <div className="text-right text-slate-400">
                <span>{item.years}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[30%]">
        <p className="font-bold text-xl text-white">Certifications</p>
        <div className="mt-5 flex flex-col gap-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <BadgeCheck />
              <p className="font-medium text-white">
                {cert.name}
                {cert.detail ? (
                  <span className="text-slate-400"> - {cert.detail}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-5 rounded-lg border border-sky-500/60 px-4 py-2 text-sm font-medium cursor-pointer w-fit flex items-center gap-2">
          View All Certifications <MoveRight size={16} />
        </button>
      </div>

      <div className="w-[25%] border-l pl-5">
        <p className="font-bold text-xl text-white">Let&apos;s Connect</p>
        <p className="mt-4 text-sm text-slate-300">
          Looking for a QA Engineer who can test beyond the happy path?
        </p>
        <div className="mt-5 flex flex-col gap-3">
          {MyLinks.map((link, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="scale-150">{link.icon}</span>
              {link.url.startsWith("http") || link.url.startsWith("mailto:") ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-sky-300 hover:underline"
                >
                  {link.url}
                </a>
              ) : (
                <span className="text-slate-300">{link.url}</span>
              )}
            </div>
          ))}

          <div className="mt-5 flex items-center gap-2 text-base font-medium text-blue-400 hover:text-blue-300 cursor-pointer">
            Get in Touch <MoveRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
