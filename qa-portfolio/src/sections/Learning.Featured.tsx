import LessonCard, { type LessonProps } from "../components/LessonCard";

const lessons: LessonProps[] = [
  {
    category: "Test Fundamentals",
    status: false,
    image: "/learn.png",
    title: "Software Testing Fundamentals",
    description:
      "Learn testing principles, test levels, and how QA supports the software development lifecycle.",
    duration: "3 hours",
    noOfLessons: 6,
    stack: ["QA basics", "Test levels", "STLC"],
    link: "https://www.istqb.org/certifications/certified-tester-foundation-level",
  },
  {
    category: "Test Design",
    status: false,
    image: "/QAE.png",
    title: "Test Case Design Techniques",
    description:
      "Practice equivalence partitioning, boundary-value analysis, and decision-table testing.",
    duration: "2.5 hours",
    noOfLessons: 5,
    stack: ["Test cases", "Coverage", "Bug reports"],
    link: "https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing",
  },
  {
    category: "Automation",
    status: false,
    image: "/playwright.jpg",
    title: "End-to-End Testing with Playwright",
    description:
      "Build reliable browser tests with locators, assertions, fixtures, and test reports.",
    duration: "4 hours",
    noOfLessons: 8,
    stack: ["Playwright", "TypeScript", "E2E"],
    link: "https://playwright.dev/docs/intro",
  },
  {
    category: "API Testing",
    status: false,
    image: "/QAE.png",
    title: "API Testing with Postman",
    description:
      "Explore HTTP methods, validate responses, and organize reusable API test collections.",
    duration: "3 hours",
    noOfLessons: 6,
    stack: ["REST APIs", "Postman", "Assertions"],
    link: "https://learning.postman.com/docs/getting-started/introduction/",
  },
];

const Featured = () => {
  return (
    <section className="flex flex-col gap-8 px-20 py-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-start">
          <p className="text-lg font-bold">Featured Learning Paths</p>
          <p className="text-text-secondary">
            Curated topics I&apos;m actively learning, with video lessons, key
            notes and real world applications.
          </p>
        </div>
        <p className="cursor-pointer text-primary hover:underline">
          View All Lessons &gt;
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.title} {...lesson} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
