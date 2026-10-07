const projects = [
  {
    id: 1,
    title: "Multi-Tenant B2B Logistics Ledger SaaS",
    description:
      "A multi-tenant B2B logistics SaaS application being built with Spring Boot and MySQL, with a React frontend and broader multi-service architecture planned as the project evolves.",
    problem:
      "Designed a foundation for a B2B SaaS platform where multiple businesses can operate within isolated tenant contexts while sharing the same application.",
    features: [
      "Multi-tenant architecture foundation",
      "Tenant management",
      "Tenant status lifecycle",
      "User management",
      "Tenant-user relationship",
      "DTO-based API design",
      "Request validation",
      "Global exception handling",
      "BCrypt password hashing",
      "JWT authentication foundation",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Spring Security",
      "BCrypt",
      "JJWT",
    ],
    type: "Full Stack SaaS",
    status: "In Progress",
    liveDemo: "",
    github: "https://github.com/PosaKarthik/multi-tenant-logistics-ledger",
  },

  {
    id: 2,
    title: "Employee Management REST API",
    description:
      "A production-ready Spring Boot REST API featuring CRUD operations, DTO mapping, validation, global exception handling, pagination, sorting, logging, MySQL, and Swagger/OpenAPI documentation.",
    problem:
      "Built a structured REST API for managing employee data while applying production-oriented backend development practices.",
    features: [
      "CRUD operations",
      "DTO mapping",
      "Request validation",
      "Global exception handling",
      "Pagination and sorting",
      "Logging",
      "Swagger/OpenAPI documentation",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST API",
      "Spring Data JPA",
      "MySQL",
      "Swagger",
    ],
    type: "Backend Project",
    status: "Completed",
    liveDemo: "",
    github: "https://github.com/PosaKarthik/employee-management-api",
  },

  {
    id: 3,
    title: "Online Banking System",
    description:
      "A Java-based banking application for account management and transaction history, built using JDBC and MySQL.",
    problem:
      "Built a backend-focused banking application to practice account management, database connectivity, and transaction-related operations.",
    features: [
      "Account management",
      "Transaction history",
      "JDBC database integration",
      "MySQL persistence",
    ],
    technologies: ["Java", "JDBC", "MySQL"],
    type: "Backend Project",
    status: "Completed",
    liveDemo: "",
    github: "https://github.com/PosaKarthik/online-banking-system-java",
  },

  {
    id: 4,
    title: "DevLaunch",
    description:
      "A developer productivity dashboard built to organize learning goals, track progress, and present development statistics through an interactive interface.",
    problem:
      "Built a frontend dashboard to experiment with dynamic UI updates, progress tracking, responsive layouts, and practical JavaScript interactions.",
    features: [
      "Dynamic statistics",
      "Learning goal tracking",
      "Dynamic progress bars",
      "Interactive UI",
      "Responsive dashboard",
      "Sticky navigation",
      "Smooth section navigation",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Bootstrap Icons",
      "Font Awesome",
    ],
    type: "Frontend Project",
    status: "Completed",
    liveDemo: "https://posakarthik.github.io/devlaunch/",
    github: "https://github.com/PosaKarthik/devlaunch",
  },

  {
    id: 5,
    title: "Brew Haven",
    description:
      "A responsive coffee shop website built with HTML and CSS, featuring a modern layout for showcasing products, services, and customer-focused sections.",
    problem:
      "Built a responsive website to strengthen my fundamentals in semantic HTML, CSS layouts, responsive design, and visual presentation.",
    features: [
      "Responsive layout",
      "Hero section",
      "About section",
      "Menu section",
      "Features section",
      "Gallery",
      "Reservation preview",
      "Responsive navigation",
    ],
    technologies: ["HTML5", "CSS3", "Responsive Design"],
    type: "Frontend Project",
    status: "Completed",
    liveDemo: "https://posakarthik.github.io/brew-haven-coffe-shop/",
    github: "https://github.com/PosaKarthik/brew-haven-coffe-shop",
  },
];

export default projects;
