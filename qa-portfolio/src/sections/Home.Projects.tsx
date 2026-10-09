import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "BookCart E2E Automation",
    description:
      "End-to-end automation framework covering authentication, search, cart and checkout workflows.",
    tech: ["Playwright", "TypeScript", "Cucumber"],
    github: "#",
    demo: "#",
    image: "././public/ecommerce.jpg",
  },
  {
    title: "MealTier Web App",
    description:
      "Full-stack application with automated UI and API tests, Dockerized setup and CI/CD pipeline.",
    tech: ["React", "Node.js", "PostgreSQL", "Playwright"],
    github: "#",
    demo: "#",
    image: "././public/mealter.jpg",
  },
  {
    title: "Weather AI Explorer",
    description:
      "AI-powered weather app with location search, forecast and insights. OpenAI testing and data validation.",
    tech: ["React", "TypeScript", "OpenWeather API"],
    github: "#",
    demo: "#",
    image: "././public/weather.jpg",
  },
  {
    title: "Playwright CI Setup",
    description:
      "GitHub Actions workflow with allure reports for automated test execution and reporting.",
    tech: ["Playwright", "TypeScript", "GitHub Actions"],
    github: "#",
    demo: "#",
    image: "././public/playwright.jpg",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 items-start px-10 py-5 pt-10">
      <div className="flex justify-between items-center w-full">
        <p className="font-bold text-lg">Featured Projects</p>
        <p className="text-blue-500 hover:underline cursor-pointer text-base tracking-tight font-light">
          View all projects
        </p>
      </div>

      <div className="projects flex gap-5 justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
