export interface Skill {
  name: string;
  level: number;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}

export const skills: Skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "TypeScript/JavaScript", level: 85 },
    { name: "Bash", level: 80 },
    { name: "C++", level: 80 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 90 },
  ],
  frameworks: [
    { name: "React", level: 85 },
    { name: "Angular", level: 70 },
    { name: "Flutter", level: 70 },
    { name: "Flask", level: 90 },
    { name: "Spring Boot", level: 70 },
    { name: "Hibernate", level: 70 },
    { name: "Jest", level: 90 },
    { name: "PyTest", level: 85 },
    { name: "Selenium", level: 85 },
    { name: "JUnit", level: 85 },
    { name: "Mockito", level: 85 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Linux", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Jenkins", level: 75 },
    { name: "Jira", level: 90 },
    { name: "Snyk", level: 70 },
    { name: "SonarQube", level: 70 },
    { name: "AWS", level: 70 },
    { name: "Azure", level: 70 },
    { name: "GCP", level: 70 },
  ],
};