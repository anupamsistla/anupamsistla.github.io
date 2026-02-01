import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Protegrity USA, Inc.",
    duration: "Jun 2025 - Present",
    description: "Developing a production browser extension that securely controls access to sensitive data for enterprise users",
    responsibilities: [
      "Developed a Chrome extension in React and TypeScript that integrates with Protegrity’s cloud data-protection solution to enable role-based encryption and decryption of sensitive data (PII, PHI) using OAuth2 and JWT for authorized users",
      "Deployed the solution across AWS, Azure, and GCP to test cross-cloud compatibility and designed a weighted heuristic algorithm to suggest user actions based on historical interactions and DOM context of selected webpage elements",
      "Built Jenkins CI/CD pipelines with Bash for standard and escrow builds, integrating Snyk and SonarQube, and using Webpack and Babel to bundle and transpile TS code in a Docker container to deliver versioned images to Artifactory",
      "Achieved 100% unit test coverage using Jest and implemented an automated PyTest and Selenium test suite to validate critical user workflows; logged and tracked defects in Jira; contributed within Agile Scrum and Kanban workflows"
    ],
    technologies: ["React", "Typescript", "Bash", "Jest", "Selenium", "Cloud Platforms"]
  },
  {
    title: "Teaching Assistant - Data Structures",
    company: "University of Illinois Chicago",
    duration: "Jan 2024 - May 2025",
    description: "Served as a Data Structures Teaching Assistant for a 400-student course across three semesters",
    responsibilities: [
      "Mentored and instructed 800+ students in Data Structures (C++) by leading labs and office hours to reinforce concepts",
      "Provided hands-on debugging support using GDB and AddressSanitizer to diagnose and resolve complex runtime issues",
      "Evaluated students through oral exams and contributed to starter code and autograded test suites for course projects"
    ],
    technologies: ["C++", "GoogleTest", "GDB", "Valgrind", "ASan", "MOSS"]
  },
  {
    title: "Software Engineer Intern",
    company: "IPage Unmanned Services",
    duration: "Jun 2024 - Jul 2024",
    description: "Developed timelapse system to monitor construction progress across active commercial real estate projects",
    responsibilities: [
      "Built and deployed a timelapse system across active construction sites to track construction progress for large commercial projects, integrating on-device image capture, cloud delivery, centralized processing, and customization via a web portal",
      "Implemented on-device image capture and batch upload pipelines on Raspberry Pi using gPhoto2, capturing ~1920 images over 24-hour intervals and uploading them to AWS S3 for centralized processing",
      "Built a multi-threaded Python Flask backend on AWS EC2 to process image batches from S3 in parallel, render branded timelapse videos using FFmpeg, stitch outputs into one final video, and expose results via REST API to a React portal",
      "Built CI/CD pipelines that packaged application code into Docker images and remotely deployed updates across 30+ Raspberry Pi devices via a centralized fleet management workflow, reducing operational overhead by 10×"
    ],

    technologies: ["Python", "Flask", "AWS", "RestAPI", "Raspberry Pi"]
  },

  {
    title: "Software Engineer Intern",
    company: "Zillion Holidays",
    duration: "June 2023 - August 2023",
    description: "Developed backend services and internal tools to support core workflows in a all-in-one travel agency platform",
    responsibilities: [
      "Developed Angular data entry interfaces for sales representatives within an all-in-one travel agency product suite",
      "Built Spring Boot REST services with Hibernate to support full CRUD workflows for venue data across product features",
      "Implemented unit and integration tests using JUnit, Mockito and Selenium, and collaborated within Agile Scrum workflows across sprint planning, stand-ups, and retrospectives",
    ],

    technologies: ["Angular", "Spring Boot", "Hibernate", "JUnit", "Mockito", "Selenium"]
  }
];