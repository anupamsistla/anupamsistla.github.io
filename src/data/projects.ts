import { Project } from '../types';

export const projects: Project[] = [
  {
    name: "Autonomous Debris Clearing Rover",
    description: "Autonomous Debris Clearing Robot utilizing computer vision to detect and remove obstacles autonomously in real-time",
    technologies: ["Python", "Dart", "OpenCV", "NumPy", "GraphQL"],
    highlights: [
      "Built an autonomous rover capable of detecting and clearing debris within a predefined perimeter using real-time computer vision with OpenCV, NumPy, and YOLOv3",
      "Implemented a GraphQL telemetry and control API over Wi-Fi/LTE to stream rover state, object detections, and navigation status to a Dart mobile application with live video streaming"
    ],
    videoUrl: "https://www.youtube.com/embed/4Ge4vw6to4c"
  },
  {
    name: "Medicine Scheduling Application",
    description: "Medicine scheduling application to replace traditional pill boxes with automated reminders and tracking functionality",
    technologies: ["PHP", "HTML5", "CSS", "JavaScript", "AJAX", "PostgreSQL", "Cron", "PHPMailer"],
    highlights: [
      "Developed a PHP-based medicine scheduling application with a PostgreSQL backend to log and track daily medication intake, with adherence records downloadable in Excel and PDF formats",
      "Implemented automated reminders using Cron and PHPMailer, and leveraged AJAX to support real-time medication updates without page reloads"
    ],
    videoUrl: "https://www.youtube.com/embed/IjCYR82PbI4"
  },
  {
    name: "Restockd",
    description: "Food Bank Donation Scheduling Platform connecting donors with local food banks to streamline donation logistics",
    technologies: ["Python", "Django", "PostgreSQL", "Supabase"],
    highlights: [
      "Built a community food bank donation platform connecting donors and food banks in real time, enabling discovery of nearby needs, scheduled drop-offs, urgency-based requests, flexible rescheduling, and end-to-end donation tracking through a React web interface with search, dashboards, and impact leaderboards",
      "Implemented a Django backend with REST APIs to manage donation requests, scheduling, rescheduling, and completion workflows, backed by relational PostgreSQL schemas via Supabase"
    ],
    videoUrl: "https://www.youtube.com/embed/O09bCqtwLHE"
  }
];