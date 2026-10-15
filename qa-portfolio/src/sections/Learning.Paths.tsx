import {
  CircleCheck,
  Clock,
  Database,
  Group,
  Notebook,
  Rocket,
} from "lucide-react";
import CTA from "../components/CTA";

const lessons = [
  {
    category: "All Lessons",
    icon: <Group />,
  },
  {
    category: "Automation",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/selenium/43B02A"
      />
    ),
  },
  {
    category: "API Testing",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/postman/FF6C37"
      />
    ),
  },
  {
    category: "Databses",
    icon: <Database />,
  },
  {
    category: "Sitecore",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/sitecore/EB1F1F"
      />
    ),
  },
  {
    category: "CI/CD",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/jenkins/D24939"
      />
    ),
  },
  {
    category: "Agile & BDD",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/cucumber/23D96C"
      />
    ),
  },
  {
    category: "TestRail",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/testrail/65C179"
      />
    ),
  },
];

const Paths = () => {
  return (
    <div className="flex px-20 py-10">
      <div className="w-[20%]">
        <p>Learning Paths</p>
        <div className="flex flex-col gap-5">
          {lessons.map((lesson, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="scale-75">{lesson.icon}</span>
              <p>{lesson.category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[55%] flex flex-col gap-5">
        <p>Learning &gt; Automation</p>

        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Playwright & E2E2 Automation</p>
          <span className="flex items-center gap-3">
            <CircleCheck /> Completed
          </span>
        </div>
        <p>
          Learn how to setup Playwright, write reliable e2e tests with
          Typescript, and handle real world challenges like dynamic elements and
          reties.
        </p>

        <div className="flex gap-5">
          <p className="flex gap-3">
            <Clock></Clock> 42 minutes
          </p>
          <p className="flex gap-3">
            <Notebook /> 6 lessons
          </p>
          <div className="flex gap-10">
            <span>Playwright</span>
            <span>Typescript</span>
            <span>CI/CD</span>
          </div>
        </div>

        <iframe src="/video.mp4" className="w-full"></iframe>

        <div>
          <p>Lesson Breakdown</p>
          <div></div>
        </div>
      </div>
      <div className="flex items-center flex-col w-[25%] py-5">
        <div className="flex flex-col gap-5 w-full p-5">
          <div className="flex gap-5">
            <p>Notes</p>
            <p>Resources</p>
            <p>Project Link</p>
          </div>
          <div className="h-52"></div>
        </div>
        <div className="flex gap-10 flex-col items-center w-full p-5 px-10">
          <div className="flex gap-10 items-center">
            <Rocket className="scale-400" />
            <div className="flex flex-col">
              <p>Apply What Youve Learned</p>
              <p className="tracking-tighter">
                Check out the Bookcart project where I applied Playwright to
                automate end to end tests with Typescript and GitHub Actions
              </p>
            </div>
          </div>
          <CTA text="View Project"></CTA>
        </div>
      </div>
    </div>
  );
};

export default Paths;
