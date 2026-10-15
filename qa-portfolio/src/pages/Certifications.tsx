import { useState } from "react";

const myCertifications = [
  [
    {
      id: "CTFL",
      name: "Certified Tester Foundation Level - ISTQB",
      issuedBy: "ASTQB",
      issuedOn: "September 2025",
      logo: "/istqb.png",
    },
  ],
  [
    {
      id: "API.AT*SQA1",
      name: "API Testing: Introduction and Testing Planning and Design Micro-Credential",
      issuedBy: "AT*SQA",
      issuedOn: "April 2026",
      logo: "/atsqa.png",
    },
    {
      id: "API.AT*SQA2",
      name: "API Testing: Environments, Tools, and Future Proofing",
      issuedBy: "AT*SQA",
      issuedOn: "April 2026",
      logo: "/atsqa.png",
    },
    {
      id: "Automation.AT*SQA1",
      name: "Test Automation Tools and Solutions",
      issuedBy: "AT*SQA",
      issuedOn: "May 2026",
      logo: "/atsqa.png",
    },
    {
      id: "Automation.AT*SQA2",
      name: "Test Automation Transitions",
      issuedBy: "AT*SQA",
      issuedOn: "May 2026",
      logo: "/atsqa.png",
    },
    {
      id: "Automation.AT*SQA3",
      name: "AT*SQA Test Automation Implementation",
      issuedBy: "AT*SQA",
      issuedOn: "May 2026",
      logo: "/atsqa.png",
    },
    {
      id: "Automation.AT*SQA2",
      name: "Test Automation Overview",
      issuedBy: "AT*SQA",
      issuedOn: "May 2026",
      logo: "/atsqa.png",
    },
  ],
  [
    {
      id: "Scrum.01",
      name: "Introduction to Scrum Master Profession",
      issuedBy: "SkillUp Online",
      issuedOn: "October 2025",
      logo: "/coursera.png",
    },
    {
      id: "Scrum.02",
      name: "Introduction to Agile Development and Scrum",
      issuedBy: "IBM",
      issuedOn: "October 2025",
      logo: "/ibm.png",
    },
  ],
  [
    {
      id: "TestRail.01",
      name: "Fundamentals of Testing with TestRail",
      issuedBy: "TestRail",
      issuedOn: "May 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.02",
      name: "Agile Testing with TestRail",
      issuedBy: "TestRail",
      issuedOn: "May 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.03",
      name: "Test Automation & TestRail",
      issuedBy: "TestRail",
      issuedOn: "May 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.04",
      name: "TestRail Reports & Analytics",
      issuedBy: "TestRail",
      issuedOn: "May 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.05",
      name: "Advanced Testing with TestRail Enterprise",
      issuedBy: "TestRail",
      issuedOn: "June 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.06",
      name: "Performance Testing & TestRail",
      issuedBy: "TestRail",
      issuedOn: "June 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.07",
      name: "Testing In Regulated Industries",
      issuedBy: "TestRail",
      issuedOn: "June 2025",
      logo: "/testrail.png",
    },
    {
      id: "TestRail.08",
      name: "Integration with TestRail CLI",
      issuedBy: "TestRail",
      issuedOn: "June 2025",
      logo: "/testrail.png",
    },
  ],
];

const cardBackgrounds = [
  "#0B1F33",
  "#1D4ED8",
  "#312E81",
  "#115E59",
  "#9A3412",
  "#3F6212",
  "#18181B",
  "#065F46",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * cardBackgrounds.length);
  return cardBackgrounds[randomIndex];
};

const Certifications = () => {
  const [categoryBackgrounds] = useState(() =>
    myCertifications.map(() => getRandomColor()),
  );

  return (
    <div className="px-20 py-10 flex flex-col gap-10">
      <div>
        <p className="text-2xl font-bold">Certifications & Learning</p>
        <p>
          I believe in continued learning. Here are the key certifications and
          courses that have shaped my QA journey
        </p>
      </div>
      <div>
        {myCertifications.map((certificationCategory, categoryIndex) => (
          <div
            key={categoryIndex}
            className="flex gap-5 mt-5 flex-wrap w-full p-5"
            style={{ backgroundColor: categoryBackgrounds[categoryIndex] }}
          >
            {certificationCategory.map((certification, certificationIndex) => (
              <div
                key={`${certification.id}-${certificationIndex}`}
                className="w-96 flex gap-5 p-3 rounded-md border border-white shadow-md"
              >
                <img
                  className="rounded-full size-12"
                  src={certification.logo}
                ></img>
                <div>
                  <p>{certification.name} </p>
                  <span className="font-light text-sm">
                    {certification.issuedBy}
                  </span>
                  <p className="font-light text-xs">
                    Issued: {certification.issuedOn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
