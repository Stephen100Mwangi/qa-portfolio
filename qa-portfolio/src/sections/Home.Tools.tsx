import {
  BotMessageSquare,
  Cloud,
  Cog,
  DatabaseCheck,
  Lightbulb,
  Search,
  Workflow,
} from "lucide-react";

const tools = [
  {
    name: "Playwright",
    icon: <img height="32" width="32" src="././public/playwright.svg" />,
  },
  {
    name: "Cypress",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/cypress/69D3A7"
      />
    ),
  },
  {
    name: "Selenium",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/selenium/43B02A"
      />
    ),
  },
  {
    name: "Jest",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/jest/C21325"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/typescript/3178C6"
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/javascript/F7DF1E"
      />
    ),
  },
  {
    name: "Postman",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/postman/FF6C37"
      />
    ),
  },
  {
    name: "AWS",
    icon: <img height="32" width="32" src="././public/aws.svg" />,
  },
  {
    name: "GraphQL",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/graphql/E10098"
      />
    ),
  },
  {
    name: "SQL",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/sqlite/003B57"
      />
    ),
  },
  {
    name: "Jira",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/jira/0052CC"
      />
    ),
  },
  {
    name: "TestRail",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/testrail/69D3A7"
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/github/FFFFFF"
      />
    ),
  },
  {
    name: "GitHub Actions",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/githubactions/2088FF"
      />
    ),
  },
  {
    name: "Sitecore",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/sitecore/EB1F1F"
      />
    ),
  },
  {
    name: "Docker",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/docker/2496ED"
      />
    ),
  },
  {
    name: "Cucumber",
    icon: (
      <img
        height="32"
        width="32"
        src="https://cdn.simpleicons.org/cucumber/23D96C"
      />
    ),
  },
  {
    name: "k6",
    icon: (
      <img height="32" width="32" src="https://cdn.simpleicons.org/k6/7D64FF" />
    ),
  },
];

const whatIDo = [
  {
    name: "Manual & Exploratory Testing",
    description: "Finds issues, improve user experience",
    icon: <Search />,
  },
  {
    name: "Test Automation",
    description: "Reliable, maintainable, scalable tests",
    icon: <Cog />,
  },
  {
    name: "API & Integration Testing",
    description: "Validate data, services and integrations",
    icon: <Workflow />,
  },
  {
    name: "CI/CD & Cloud Testing",
    description: "Automate and test in real environments",
    icon: <Cloud />,
  },
  {
    name: "AI-Assisted Testing",
    description: "Leverage AI tools for faster, smarter testing",
    icon: <BotMessageSquare />,
  },
  {
    name: "Database Testing",
    description: "Ensure data integrity and performance",
    icon: <DatabaseCheck />,
  },
];

const Tools = () => {
  return (
    <div className="tools flex justify-between gap-10 items-start px-10 py-5 pt-10">
      <div className="left w-[40%] pb-10">
        <p className="font-bold text-lg">What I Do</p>
        <div className="service-items flex flex-col gap-5 mt-5">
          {whatIDo.map((item, index) => (
            <div key={index} className="service-item flex items-center gap-5">
              <span className="service-icon">{item.icon}</span>
              <div className="service-copy ">
                <p>{item.name}</p>
                <span className="service-description text-sm font-light">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="middle w-[40%]">
        <p className="font-bold text-lg">Testing Tools</p>
        <div className="tools-list flex flex-wrap gap-10 mt-5">
          {tools.map((tool, index) => (
            <div key={index} className="tool flex items-center gap-5  w-28">
              <span className="icon scale-100">{tool.icon}</span>
              <span className="name text-base">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right w-[20%] flex flex-col gap-3">
        <Lightbulb className="scale-125" />
        <p className="font-bold text-lg">My Testing Philosophy</p>

        <blockquote className="quote">
          “Quality isn’t just about finding bugs. It’s about understanding how
          users, systems and requirements interact - and finding the gaps before
          production does.”
        </blockquote>
      </div>
    </div>
  );
};

export default Tools;
