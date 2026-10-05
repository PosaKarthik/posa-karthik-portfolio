const projects = [
  {
    id: 1,
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
    title: "Multi-Tenant B2B Logistics Ledger SaaS",

    description:
      "A multi-tenant B2B logistics SaaS backend built with Spring Boot and MySQL, currently evolving from a secure monolith toward a larger multi-service architecture.",

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
];

export default projects;
