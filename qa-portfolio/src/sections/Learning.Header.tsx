import {
  BookOpenCheck,
  Dot,
  LaptopMinimalCheck,
  ShieldCogCorner,
} from "lucide-react";

const lessons = [
  {
    value: "20",
    lessonText: "Learning Modules",
    icon: <BookOpenCheck />,
  },
  {
    value: "100%",
    lessonText: "Handson Focus",
    icon: <ShieldCogCorner />,
  },
  {
    value: "Real World Projects",
    lessonText: "Project Applications",
    icon: <LaptopMinimalCheck />,
  },
];
const Header = () => {
  return (
    <div className="flex px-20 py-5 pt-10 border-b">
      <div className="flex flex-col gap-3 w-1/2">
        <div className="flex items-center jusify-center font-mono gap-2">
          <p>Learn</p>
          <Dot />
          <p>Build</p>
          <Dot />
          <p>Grow</p>
        </div>
        <p className="font-bold text-2xl">Self Paced Learning</p>
        <p className="font-medium text-lg">Turning Curiosity into Expertise</p>
        <p className="font-light text-base">
          I&apos;m committed to continuous learning. Here you&apos;ll find video
          lessons, notes and resources that help me build on my QA and
          automation skills. Each lesson includes practical examples and, where
          applicable, how I apply the concepts in real projects.
        </p>

        <div className="flex gap-10 mt-10">
          {lessons.map((lesson, index) => (
            <div key={index} className="flex items-center justify-center gap-5">
              <span className="scale-125">{lesson.icon}</span>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{lesson.value}</p>
                <p className="text-xs">{lesson.lessonText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          src="./learning.png"
          alt=""
          className="w-96 h-auto bg-transparent"
        />
      </div>
    </div>
  );
};

export default Header;
