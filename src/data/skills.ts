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
    { name: "Python", level: 90 }, //Python, Java, Typescript, Dart, Bash, C, C++, PHP, SQL, JavaScript
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 85 },
    { name: "C++", level: 80 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 90 },
    { name: "Bash", level: 80 },
    { name: "Dart", level: 70 },
  ],
  frameworks: [
    { name: "React", level: 85 }, //React, Angular, Flask, Django, Spring Boot, Hibernate, JUnit, Mockito, Jest, Selenium, Pandas
    { name: "Angular", level: 70 },
    { name: "Flask", level: 90 },
    { name: "Django", level: 80 },
    { name: "Spring Boot", level: 70 },
    { name: "Hibernate", level: 70 },
    { name: "JUnit", level: 85 },
    { name: "Mockito", level: 85 },
    { name: "Jest", level: 90},
    { name: "Selenium", level: 85 },
    { name: "Pandas", level: 70 }
  ],
  tools: [ //Git, Linux, Docker, Jenkins, Jira, Snyk, SonarQube, AWS, Azure, GCP
    { name: "Git", level: 90 },
    { name: "Jenkins", level: 75 },
    { name: "Docker", level: 75 },
    { name: "Jira", level: 90 },
    { name: "AWS", level: 70 },
    { name: "Azure", level: 70 },
    { name: "GCP", level: 70 },
    { name: "SonarQube", level: 70 },
    { name: "Snyk", level: 70 },
  ],
};