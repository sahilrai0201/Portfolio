export const personalInfo = {
  name: "Sahil Rai",
  title: "Full-Stack Developer & Problem Solver",
  location: "Noida, India",
  availability: "Open to full-time roles & internships",
  email: "sahilatwork21@gmail.com",
  phone: "+91-9598747419",
  avatar: "https://github.com/sahilrai0201.png",
  socials: {
    github: "https://github.com/sahilrai0201",
    linkedin: "https://www.linkedin.com/in/sahilrai02/",
    leetcode: "https://leetcode.com/u/sahilrai02_/",
  },
  bio: [
    "I'm a final-year B.Tech student in Computer Science & Artificial Intelligence at GL Bajaj Institute of Technology & Management, Greater Noida (2023–2027).",
    "I enjoy building full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and integrating APIs like Google Gemini. On the problem-solving side, I regularly practice Data Structures & Algorithms in C++ and Java, and participate in LeetCode weekly contests.",
    "When I'm away from the keyboard, I'm usually playing chess online, analyzing games, or catching up on tech blogs."
  ],
  chessNote: {
    title: "Why Chess?",
    text: "Outside of coding, I spend free time playing rapid chess on Chess.com. I usually play the Sicilian Defense as Black and the Italian/Ruy Lopez as White. I find that thinking three moves ahead in a chess game feels a lot like anticipating edge cases in software or tracing state in dynamic programming."
  }
};

export const dsaStats = {
  totalSolved: "400+",
  contestRating: "1500+",
  platforms: [
    { name: "LeetCode", handle: "sahilrai02_", url: "https://leetcode.com/u/sahilrai02_/", count: "300+ Problems", badge: "1500+ Rating" },
    { name: "GeeksforGeeks", handle: "sahilrai", count: "100+ Problems", badge: "Daily Practice" },
  ],
  topics: [
    "Arrays & Hashing",
    "Two Pointers & Sliding Window",
    "Binary Search",
    "Trees & Binary Search Trees",
    "Graphs (BFS / DFS / Dijkstra)",
    "Dynamic Programming (1D & 2D)",
    "Recursion & Backtracking",
    "Object-Oriented Programming (OOP)",
    "Database Management (DBMS / SQL)",
    "Operating Systems & Computer Networks"
  ]
};

export const projects = [
  {
    id: "bizpulse",
    title: "BizPulse",
    subtitle: "AI-Powered Business & Invoicing Dashboard",
    category: "Full-Stack + AI",
    description: "A full-stack business dashboard for managing inventory, customers, invoices, and sales metrics in one place.",
    story: "I wanted to see how practical generative AI could be for everyday business admin tasks. In BizPulse, users can upload invoice receipt photos, and Google's Gemini API extracts line items and totals through OCR automatically. I also built an in-memory database fallback so the app continues working with demo seed data even if the free MongoDB Atlas cluster disconnects.",
    longDescription: "BizPulse is an end-to-end business operations portal designed to streamline inventory tracking, invoice generation, and financial reporting for growing enterprises. Built with a decoupled MERN architecture, the frontend delivers instant invoice PDF rendering and reactive metrics. On the backend, Google's Gemini API is integrated to parse unstructured scanned receipts into validated JSON schema. To ensure zero downtime during recruiter walkthroughs, an automated fallback mechanism serves seed data from an in-memory store if the cloud database experiences cold-start latency.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Tailwind CSS", "JWT"],
    bullets: [
      "Integrated Gemini API to automate receipt OCR and generate contextual payment reminder drafts.",
      "Protected REST APIs with JWT authentication, HTTP-only cookie tokens, and Axios request interceptors.",
      "Implemented an in-memory database fallback to ensure the live demo stays online even if cloud DB latency spikes.",
      "Added real-time revenue analytics charts and instant invoice PDF downloads."
    ],
    highlights: [
      "Multimodal AI Receipt Parsing: Automated OCR extraction of vendor, total amount, taxes, and itemized rows via Google Gemini.",
      "Resilient Data Layer: In-memory fallback layer to maintain uninterrupted uptime during cloud database cold starts.",
      "JWT Authentication & Security: HTTP-only cookies, token expiration guards, and protected API endpoints.",
      "Dynamic Business Intelligence: Interactive client-side analytics for revenue trends, inventory stock, and invoice payment statuses."
    ],
    thumbnail: "/projects/bizpulse/bizpulse-overview.png",
    screenshots: [
      {
        id: "overview",
        title: "Overview Dashboard",
        shortTitle: "Overview",
        url: "/projects/bizpulse/bizpulse-overview.png",
        route: "bizpulse-1.onrender.com/overview",
        caption: "Executive Dashboard & Real-Time Metrics",
        description: "Real-time key performance indicators tracking Total Sales ($479.87), Customer count, Product catalog size, and 12.5% Conversion Rate alongside responsive sales trend lines and category distribution pie charts."
      },
      {
        id: "invoices",
        title: "Invoice Management",
        shortTitle: "Invoices",
        url: "/projects/bizpulse/bizpulse-invoices.png",
        route: "bizpulse-1.onrender.com/invoice",
        caption: "Saved Invoices & Automated Billing",
        description: "Comprehensive billing ledger with search, quick preview, email triggers, AI prompt actions, and instant PDF invoice downloads."
      },
      {
        id: "products",
        title: "Product Inventory",
        shortTitle: "Products",
        url: "/projects/bizpulse/bizpulse-products.png",
        route: "bizpulse-1.onrender.com/products",
        caption: "Inventory Valuation & Stock Alerts",
        description: "Catalog management tracking total items, top-selling inventory (Wireless Earbuds), low-stock thresholds, and total calculated inventory valuation (₹15,247.25)."
      },
      {
        id: "sales",
        title: "Sales Analytics",
        shortTitle: "Sales",
        url: "/projects/bizpulse/bizpulse-sales.png",
        route: "bizpulse-1.onrender.com/sales",
        caption: "Sales Velocity & Growth Trends",
        description: "Deep revenue analytics displaying total revenue trajectory ($1.23M), average order value ($78.90), and monthly sales wave graphs."
      },
      {
        id: "orders",
        title: "Order Pipeline",
        shortTitle: "Orders",
        url: "/projects/bizpulse/bizpulse-orders.png",
        route: "bizpulse-1.onrender.com/orders",
        caption: "Daily Orders & Status Distribution",
        description: "Operational fulfillment pipeline breaking down 1,234+ orders across Pending (12%), Processing (18%), Shipped (24%), and Delivered (47%) states."
      },
      {
        id: "analytics",
        title: "Revenue vs Target",
        shortTitle: "Analytics",
        url: "/projects/bizpulse/bizpulse-analytics.png",
        route: "bizpulse-1.onrender.com/analytics",
        caption: "Target Tracking & Traffic Insights",
        description: "Visual financial intelligence comparing actual revenue streams against growth targets, alongside user traffic and page view trends."
      },
      {
        id: "users",
        title: "Client Directory",
        shortTitle: "Clients",
        url: "/projects/bizpulse/bizpulse-users.png",
        route: "bizpulse-1.onrender.com/users",
        caption: "B2B Clients, GST & Customer Ledgers",
        description: "Enterprise customer directory with 152k+ users, active daily users, churn tracking (2.4%), GST identification records, and client ledger accounts."
      },
      {
        id: "auth",
        title: "Secure Authentication",
        shortTitle: "Sign In",
        url: "/projects/bizpulse/bizpulse-login.png",
        route: "bizpulse-1.onrender.com",
        caption: "JWT Auth Gate & Cloudflare Protection",
        description: "Polished sign-in portal featuring JWT token handling, HTTP-only session cookies, and integrated Cloudflare Turnstile anti-bot verification."
      }
    ],
    github: "https://github.com/sahilrai0201/BizPulse",
    live: "https://bizpulse-1.onrender.com/"
  },
  {
    id: "campushub",
    title: "CampusHub",
    subtitle: "College Management System",
    category: "Full-Stack System",
    description: "An academic portal with separate dashboards for Admins, Faculty, and Students to manage notices, notes, and assignments.",
    story: "We built this as a 4-member group project because college notices and notes were scattered across WhatsApp chats and lost email threads. I served as the team lead, designed the MongoDB schemas, wrote the Express API routes, and handled file uploads for lecture notes and student assignments.",
    longDescription: "CampusHub consolidates fragmented college communication channels into a unified, secure portal serving three distinct user personas: Administrators, Faculty, and Students. The architecture enforces strict Role-Based Access Control (RBAC) with cryptographic JWT tokens and route-level authorization middleware. The file handling subsystem uses Multer with mime-type verification and cloud streaming to handle syllabus documents, homework PDFs, and administrative circulars safely.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "JWT", "Multer"],
    bullets: [
      "Led a 4-person student team; set up Git workflow, assigned tasks, and reviewed pull requests.",
      "Created role-based access control (RBAC) so Students, Teachers, and Admins only see what they have permission to access.",
      "Handled secure file uploads for assignment PDFs and profile images using Multer and cloud storage.",
      "Built clean React interfaces with responsive tables, attendance logs, and notice board feeds."
    ],
    highlights: [
      "Granular Role-Based Access Control: Decoupled permissions for Admins, Teachers, and Students across 18+ endpoints.",
      "High-Throughput File Ingestion: Multer pipeline for streaming PDFs and study material directly to persistent storage.",
      "Full Team Leadership: Mentored a 4-engineer team, defined REST schema contracts, and coordinated Git branching workflows.",
      "Responsive Academic Feeds: Notice board feeds with real-time category filtering and search."
    ],
    github: "https://github.com/sahilrai0201/CampusHub",
    live: "https://campushub-fcw0.onrender.com/"
  },
  {
    id: "dsa-repo",
    title: "DSA & Problem Solving",
    subtitle: "400+ Algorithmic Solutions in C++ & Java",
    category: "Competitive Programming",
    description: "A structured collection of 400+ solved problems from LeetCode, GeeksforGeeks, and weekly programming contests.",
    story: "Consistent practice has been my favorite way to sharpen analytical thinking. I focus on understanding underlying patterns—like Monotonic Stacks, Fast & Slow Pointers, and DP memoization—rather than memorizing solutions.",
    longDescription: "A comprehensive, pattern-oriented algorithmic repository containing 400+ tested implementations across LeetCode, GeeksforGeeks, and contest platforms in C++ and Java. Emphasizes clean code, time/space optimality, and problem decomposition patterns (Two Pointers, Sliding Window, Monotonic Stacks, Dynamic Programming, and Graph Traversals) rather than rote memorization.",
    tags: ["C++", "Java", "Python", "Data Structures", "Algorithms", "LeetCode 1500+"],
    bullets: [
      "Over 400 problems solved across LeetCode and GeeksforGeeks.",
      "LeetCode Contest Rating: 1500+ with active participation in weekly timed rounds.",
      "Covered classic problem lists including Blind 75 and Striver's SDE Sheet.",
      "Includes clean notes on time/space complexity trade-offs and edge case handling."
    ],
    highlights: [
      "1500+ LeetCode Contest Rating with regular participation in bi-weekly and weekly competitive rounds.",
      "400+ algorithmic problems solved with optimal Big-O asymptotic complexity analysis.",
      "Mastery across Core Patterns: Monotonic Stacks, Fast & Slow Pointers, DFS/BFS, 1D/2D DP, and Topological Sort.",
      "Strong foundation in Core CS: Operating Systems, Computer Networks, and DBMS normalization."
    ],
    github: "https://github.com/sahilrai0201",
    live: "https://leetcode.com/u/sahilrai02_/"
  }
];

export const skillsList = {
  "Languages": ["C++", "JavaScript (ES6+)", "Java", "Python", "SQL", "HTML5", "CSS3"],
  "Frontend": ["React.js", "Tailwind CSS", "Vite", "Axios", "Responsive Design", "State Management"],
  "Backend & APIs": ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Mongoose", "Multer"],
  "Databases": ["MongoDB Atlas", "MySQL"],
  "AI & Tools": ["Google Gemini API", "Prompt Engineering", "Git & GitHub", "Postman", "VS Code", "Render"]
};

export const educationList = [
  {
    role: "B.Tech in Computer Science & Artificial Intelligence (Final Year)",
    place: "GL Bajaj Institute of Technology & Management, Greater Noida",
    period: "2023 – 2027",
    meta: "CGPA: 7.5 / 10",
    note: "Coursework in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and AI fundamentals."
  },
  {
    role: "Senior Secondary (Class XII)",
    place: "Sunbeam School, Ballia",
    period: "2021 – 2022",
    meta: "80.0%",
    note: "Science stream with Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    role: "Secondary Education (Class X)",
    place: "Devasthaly Vidyapeeth, Ballia",
    period: "2019 – 2020",
    meta: "71.2%",
    note: "General sciences, mathematics, and fundamentals of computer applications."
  }
];

export const certifications = [
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    desc: "Foundations of modern AI, machine learning concepts, and basic generative models."
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Cisco Networking Academy",
    desc: "Network safety principles, encryption, authentication basics, and security best practices."
  }
];
