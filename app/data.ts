/**
 * Content for the Singularity scroll.
 *
 * Every string a visitor reads lives here so copy edits never mean touching layout or scroll code.
 */

export const EMAIL = "agrim_s@cy.iitr.ac.in";

export const RESUME_URL = "";

/** Bottom stage bar. `short` is used on phones, where the cells are ~70px wide. */
export const chapters = [
  { id: "ch1", long: "01 Horizon", short: "01 Bio" },
  { id: "ch2", long: "02 Projects", short: "02 Work" },
  { id: "ch3", long: "03 Experience", short: "03 Roles" },
  { id: "ch4", long: "04 Honors", short: "04 Honors" },
  { id: "ch5", long: "05 Courses", short: "05 Certs" },
  { id: "ch6", long: "06 Skills", short: "06 Skills" },
  { id: "ch7", long: "07 Research", short: "07 Lab" },
  { id: "ch8", long: "08 Contact", short: "08 Core" },
];

/** Phase readout in the stage bar, indexed by the active chapter. */
export const phaseNames = [
  "Event horizon",
  "Featured projects",
  "Leadership & roles",
  "Honors & achievements",
  "Courses & certifications",
  "Technical skills",
  "Research work",
  "Get in touch",
];

export const copy = {
  introDesktop:
    "I am a Pre-final Year Systems Engineer at IIT Roorkee, building Distributed Multi-Agent Systems, low-level graphics engines, XR simulation, and Quantitative Infrastructure.",
  introMobile:
    "Pre-final Year Systems Engineer at IIT Roorkee. Building Multi-Agent Systems, XR engines, and Quant infra.",
  timelineNote: "Where I've built, researched, and shipped systems, most recent first.",
};

export const projects = [
  {
    id: 1,
    title: "9-Agent Conference Engine",
    tag: "Distributed AI",
    img: "/p1.webp",
    des: "A directed typed state machine where 9 discrete agents collaborate over shared, immutable state deltas in under 3 minutes (1st Runner-Up Pinch Hackathon).",
    iconLists: ["/py.svg", "/next.svg"],
    link: "https://github.com/th-efool",
  },
  {
    id: 2,
    title: "Mirrors & Butterfly Effect",
    tag: "UE5 Game",
    img: "/p2.webp",
    des: "A non-Euclidean causality engine and psychological narrative loop game exploring dynamic environment restructuring (2nd Runner-Up GDAI Hackathon).",
    iconLists: ["/three.svg"],
    link: "https://github.com/th-efool/UE5-FrostOfEndlessTommorows",
  },
  {
    id: 3,
    title: "PullO-Showcase",
    tag: "Systems Gateway",
    img: "/p3.webp",
    des: "A distributed gateway that securely exposes local Ollama, LM Studio, and llama.cpp instances across teams via unified APIs without port exposure.",
    iconLists: ["/py.svg"],
    link: "https://github.com/th-efool/PullO-Showcase",
  },
  {
    id: 4,
    title: "GuardAi (GovGuard)",
    tag: "AI Governance",
    img: "/p4.webp",
    des: "A comprehensive AI governance platform providing real-time monitoring, analysis, and enforcement of AI safety policies across multiple regulatory frameworks.",
    iconLists: ["/ts.svg"],
    link: "https://github.com/th-efool",
  },
  {
    id: 5,
    title: "Enterprise POS System",
    tag: "Infra & DB",
    img: "/p1.webp",
    des: "Modern, enterprise-grade POS architecture built with Golang, React, TypeScript, and PostgreSQL featuring role-based access and high-throughput query pipelines.",
    iconLists: ["/ts.svg", "/postgres.svg"],
    link: "https://github.com/th-efool",
  },
  {
    id: 6,
    title: "QuestCameraKit",
    tag: "XR / Mixed Reality",
    img: "/p2.webp",
    des: "Template and reference projects demonstrating Meta Quest's Passthrough Camera API for advanced AR/VR computer vision, spatial tracking, and custom HLSL shader effects.",
    iconLists: ["/three.svg"],
    link: "https://github.com/th-efool",
  }
];

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  category: "podium" | "olympiad" | "leadership";
  badge: string;
  metric: string;
  metricLabel: string;
  summary: string;
  highlight?: string;
  tags: string[];
  colSpan?: "wide" | "compact" | "full";
}

export const achievements: AchievementItem[] = [
  {
    id: "pinch",
    title: "1st Runner-Up — Pinch Hackathon 2026",
    event: "Srishti 2026 · IIT Roorkee × Pinch",
    category: "podium",
    badge: "🥈 Hackathon Podium",
    metric: "1st Runner-Up",
    metricLabel: "National Hackathon",
    summary:
      "Engineered a distributed 9-agent conference intelligence engine utilizing LangGraph, FastAPI, Groq LLaMA-3.3-70B, and NumPy in-memory vector RAG to synthesize conference roadmaps in under 3 minutes.",
    highlight: "< 3 Min Multi-Agent Synthesis",
    tags: ["LangGraph", "Multi-Agent", "FastAPI", "Groq LLaMA", "In-Memory RAG"],
    colSpan: "wide",
  },
  {
    id: "pancake",
    title: "1st Runner-Up — PancakeSwap Hackathon 2026",
    event: "Srishti 2026 · IIT Roorkee × PancakeSwap",
    category: "podium",
    badge: "🥈 Hackathon Podium",
    metric: "1st Runner-Up",
    metricLabel: "DeFi / Algorithmic Trading",
    summary:
      "Solo build of a continuous-regime autonomous trading agent centered on 'Intelligent Abstention', continuous hypothesis ranking by expected value (EV), and an autonomous risk veto layer.",
    highlight: "Autonomous Risk Veto Layer",
    tags: ["TypeScript", "Algorithmic Trading", "State Machine", "Railway"],
    colSpan: "compact",
  },
  {
    id: "gdai",
    title: "2nd Runner-Up — GDAI Hackathon 2025",
    event: "Game Dev & AI Guild",
    category: "podium",
    badge: "🥉 Game Dev & AI",
    metric: "2nd Runner-Up",
    metricLabel: "Spatial & Engine Architecture",
    summary:
      "Engineered 'Mirrors & Butterfly Effect' in Unreal Engine 5—a non-Euclidean causality engine and psychological narrative loop exploring dynamic room deformation and time dilation.",
    highlight: "Non-Euclidean Causality Loop",
    tags: ["Unreal Engine 5", "HLSL Shaders", "Causality Engine", "C++"],
    colSpan: "compact",
  },
  {
    id: "imo",
    title: "International Mathematics Olympiad (IMO)",
    event: "Science Olympiad Foundation (SOF)",
    category: "olympiad",
    badge: "📐 Mathematical Foundation",
    metric: "AIR 477",
    metricLabel: "Zonal Rank 203",
    summary:
      "All India Rank 477, Zonal Rank 203. Demonstrates proven foundation in combinatorics, discrete mathematics, and algorithmic problem solving.",
    highlight: "Top National Percentile",
    tags: ["Competitive Math", "SOF", "Zonal Rank 203"],
    colSpan: "compact",
  },
  {
    id: "nso",
    title: "National Science Olympiad (NSO)",
    event: "Science Olympiad Foundation (SOF)",
    category: "olympiad",
    badge: "🔬 Physical Sciences",
    metric: "AIR 375",
    metricLabel: "Zonal Rank 150",
    summary:
      "All India Rank 375, Zonal Rank 150 across competitive physics, thermodynamics, and physical sciences.",
    highlight: "Top National Percentile",
    tags: ["Physics", "Chemistry", "Zonal Rank 150"],
    colSpan: "compact",
  },
  {
    id: "sih",
    title: "Student Coordinator — Smart India Hackathon 2025",
    event: "Ministry of Education & AICTE, Government of India",
    category: "leadership",
    badge: "🎖️ National Leadership",
    metric: "Grand Finale",
    metricLabel: "National Evaluation Centre",
    summary:
      "Appointed Student Coordinator for the national Grand Finale held at the IIT Roorkee Centre. Directed multi-tier evaluation cohorts, cross-institutional infrastructure, and problem-statement logistics for finalist teams nationwide.",
    highlight: "IIT Roorkee Nodal Centre Operations",
    tags: ["National Leadership", "Logistics Operations", "Ministry of Education", "IIT Roorkee"],
    colSpan: "full",
  },
];

export const certifications = [
  {
    id: "hpc-spec",
    title: "High-Performance and Parallel Computing Specialization",
    issuer: "University of Colorado Boulder",
    logo: "/cu-boulder.svg",
    issued: "Feb 2026",
    idCode: "3MRUAG61EZDQ",
    link: "https://www.coursera.org/account/accomplishments/specialization/3MRUAG61EZDQ",
    skills: ["High Performance Computing (HPC)", "MPI", "Parallel Computing"],
  },
  {
    id: "efficient-prog",
    title: "Efficient Programming",
    issuer: "University of Colorado Boulder",
    logo: "/cu-boulder.svg",
    issued: "Feb 2026",
    idCode: "55SD4D2RF02D",
    link: "https://www.coursera.org/account/accomplishments/records/55SD4D2RF02D",
    skills: ["Memory Optimization", "Performance Profiling"],
  },
  {
    id: "parallel-mpi",
    title: "Parallel Computing with MPI",
    issuer: "University of Colorado Boulder",
    logo: "/cu-boulder.svg",
    issued: "Feb 2026",
    idCode: "YM1RQ21P101A",
    link: "https://www.coursera.org/account/accomplishments/records/YM1RQ21P101A",
    skills: ["MPI Primitives", "Distributed Clusters"],
  },
  {
    id: "linux-dev",
    title: "Open Source Software Development Methods",
    issuer: "The Linux Foundation",
    logo: "/linux-foundation.svg",
    issued: "Feb 2026",
    idCode: "UWI1HFZ7DVNN",
    link: "https://www.coursera.org/account/accomplishments/records/UWI1HFZ7DVNN",
    skills: ["Linux", "Open Source", "Git Governance"],
  },
  {
    id: "ibm-multimodal",
    title: "Build Multimodal Generative AI Applications",
    issuer: "IBM",
    logo: "/ibm.svg",
    issued: "Jun 2026",
    idCode: "TNGER73ZP88H",
    link: "https://www.coursera.org/account/accomplishments/records/TNGER73ZP88H",
    skills: ["Multimodal AI", "LLMs", "Generative AI"],
  },
  {
    id: "ibm-adv-rag",
    title: "Advanced RAG with Vector Databases and Retrievers",
    issuer: "IBM",
    logo: "/ibm.svg",
    issued: "May 2026",
    idCode: "YGCXNOUKA5K1",
    link: "https://www.coursera.org/account/accomplishments/records/YGCXNOUKA5K1",
    skills: ["Vector DBs", "RAG Pipelines", "Retrievers"],
  },
  {
    id: "ibm-vector-intro",
    title: "Vector Databases for RAG: An Introduction",
    issuer: "IBM",
    logo: "/ibm.svg",
    issued: "May 2026",
    idCode: "GRXPA5NYNGWF",
    link: "https://www.coursera.org/account/accomplishments/records/GRXPA5NYNGWF",
    skills: ["Vector Search", "Embeddings"],
  },
  {
    id: "ibm-rag-started",
    title: "Build RAG Applications: Get Started",
    issuer: "IBM",
    logo: "/ibm.svg",
    issued: "Apr 2026",
    idCode: "JBOEHHI86RLX",
    link: "https://www.coursera.org/account/accomplishments/records/JBOEHHI86RLX",
    skills: ["RAG Architecture", "Prompting"],
  },
  {
    id: "ibm-genai-started",
    title: "Develop Generative AI Applications: Get Started",
    issuer: "IBM",
    logo: "/ibm.svg",
    issued: "Apr 2026",
    idCode: "QK5VN19JVY2A",
    link: "https://www.coursera.org/account/accomplishments/records/QK5VN19JVY2A",
    skills: ["Generative AI", "Application Dev"],
  },
  {
    id: "packt-docker",
    title: "Docker Fundamentals - Understanding Containers and Images",
    issuer: "Packt",
    logo: "/packt.svg",
    issued: "Feb 2026",
    idCode: "3UYZYJVPRI9O",
    link: "https://www.coursera.org/account/accomplishments/records/3UYZYJVPRI9O",
    skills: ["Docker", "Containers", "Images"],
  },
];

export interface TechSkill {
  name: string;
  logo: string;
  tag: string;
}

export interface SkillCategory {
  id: string;
  num: string;
  title: string;
  description: string;
  skills: TechSkill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    num: "01",
    title: "Programming Languages",
    description: "Core low-level and high-level languages for systems, scripting, and applications.",
    skills: [
      { name: "C++", logo: "/cpp.svg", tag: "Systems & Engines" },
      { name: "Python", logo: "/py.svg", tag: "AI & Distributed Systems" },
      { name: "TypeScript", logo: "/ts.svg", tag: "Type-Safe Full Stack" },
      { name: "C#", logo: "/csharp.svg", tag: "Unity & XR Development" },
    ],
  },
  {
    id: "systems-hpc",
    num: "02",
    title: "Systems & High-Performance Computing",
    description: "Hardware acceleration, parallel computation, and containerized runtime environments.",
    skills: [
      { name: "CUDA", logo: "/cuda.svg", tag: "GPU Parallel Computing" },
      { name: "MPI", logo: "/mpi.svg", tag: "Distributed Clusters" },
      { name: "Linux", logo: "/linux.svg", tag: "POSIX & Kernel Workflows" },
      { name: "Docker", logo: "/docker.svg", tag: "Containerization" },
      { name: "CMake", logo: "/cmake.svg", tag: "Native Build Systems" },
      { name: "Git", logo: "/git.svg", tag: "Version Control" },
    ],
  },
  {
    id: "ai-ml",
    num: "03",
    title: "AI & Multi-Agent Architecture",
    description: "Stateful agentic graphs, vector databases, and LLM orchestration frameworks.",
    skills: [
      { name: "LangGraph", logo: "/langgraph.svg", tag: "Agentic State Machines" },
      { name: "LangChain", logo: "/langchain.svg", tag: "LLM Orchestration" },
      { name: "Pinecone", logo: "/pinecone.svg", tag: "Vector DB & RAG" },
      { name: "PyTorch", logo: "/pytorch.svg", tag: "Deep Learning & Tensors" },
      { name: "Ollama", logo: "/ollama.svg", tag: "Local Model Clusters" },
      { name: "Hugging Face", logo: "/huggingface.svg", tag: "Transformers Hub" },
      { name: "FastAPI", logo: "/fastapi.svg", tag: "Asynchronous APIs" },
    ],
  },
  {
    id: "graphics-xr",
    num: "04",
    title: "Graphics & Spatial Simulation",
    description: "Interactive real-time 3D simulation, custom shader programming, and XR headsets.",
    skills: [
      { name: "Unreal Engine 5", logo: "/ue5.svg", tag: "Photoreal XR & C++" },
      { name: "Unity", logo: "/unity.svg", tag: "Interactive Spatial Computing" },
      { name: "DirectX 11", logo: "/directx.svg", tag: "HLSL Shaders & Pipelines" },
      { name: "OpenXR", logo: "/openxr.svg", tag: "Meta Quest & Haptics" },
      { name: "Three.js", logo: "/three.svg", tag: "WebGL Interactive 3D" },
    ],
  },
  {
    id: "fullstack-infra",
    num: "05",
    title: "Full-Stack & Data Infrastructure",
    description: "Production web applications, reactive user interfaces, and robust database layers.",
    skills: [
      { name: "Next.js", logo: "/next.svg", tag: "App Router & SSR" },
      { name: "React", logo: "/re.svg", tag: "Reactive Component Trees" },
      { name: "Express", logo: "/express.svg", tag: "REST & Middleware Engine" },
      { name: "Prisma", logo: "/prisma.svg", tag: "Type-Safe ORM" },
      { name: "Mongoose", logo: "/mongoose.svg", tag: "MongoDB Object Modeling" },
      { name: "PostgreSQL", logo: "/postgres.svg", tag: "Relational Persistence" },
      { name: "Tailwind CSS", logo: "/tail.svg", tag: "Modern Design Tokens" },
    ],
  },
];

export interface TimelineSubRole {
  title: string;
  period: string;
  bullets: string[];
}

export interface TimelineItem {
  org: string;
  logo: string;
  url?: string;
  type: string;
  location: string;
  when: string;
  roles: TimelineSubRole[];
  skills: string[];
}

/** Chapter 03. Leadership & Roles, most recent first. */
export const timeline: TimelineItem[] = [
  {
    org: "Tinkering Lab, IIT Roorkee",
    logo: "/tinkering-lab.png",
    url: "https://www.linkedin.com/company/18374685/",
    type: "Full-time · 1 yr 9 mos · On-site",
    location: "Roorkee, Uttarakhand, India",
    when: "Feb 2025 — Present",
    roles: [
      {
        title: "Project Lead",
        period: "Mar 2026 — Present · 8 mos",
        bullets: [
          "Leading multi-disciplinary engineering cohorts across rapid prototyping, embedded systems, and spatial computing.",
          "Architecting real-time multi-agent moderation pipelines (Detector → Validator → Analyzer → Action Engine) and VR behavioral feedback engines.",
        ],
      },
      {
        title: "XR Developer",
        period: "Feb 2025 — Feb 2026 · 1 yr 1 mo",
        bullets: [
          "Designing a GIS rendering plugin module for Unity/Unreal to visualize terrain elevation, satellite imagery, and geospatial datasets from multiple sources.",
          "Developed a VR zombie-shooter experience in Unity, including custom interaction systems and gameplay flow.",
          "Implemented an AR prototype for animating virtual characters in physical space.",
        ],
      },
    ],
    skills: ["Project Leadership", "Unity", "Unreal Engine", "GIS", "Spatial Computing", "XR Prototyping"],
  },
  {
    org: "Soft Electronics And Energy Devices Laboratory (SEED Lab)",
    logo: "/seed-lab.png",
    type: "Research · 1 yr 2 mos · Hybrid",
    location: "Saharanpur, Uttar Pradesh, India",
    when: "Sep 2025 — Present",
    roles: [
      {
        title: "Research Collaborator (Digital Twinning)",
        period: "Sep 2025 — Present · 1 yr 2 mos",
        bullets: [
          "Modular piezo-sensor tap-interface system: an expandable n×n soft-input grid capturing tap-intensity patterns for structured signal encoding and robotic control within a Digital Twin environment, including Morse-style patterned interactions.",
          "Digital Twin of a robotic arm in Unity, driven by real-time sensor streams using Arduino-based signal encoding and serial communication.",
          "Unreal Engine medical-procedure simulator integrating pig-skin cannulation data through piezo-based force and deformation sensing.",
          "Co-authoring three academic papers based on these three tactile intelligence and simulator projects.",
        ],
      },
    ],
    skills: ["Digital Twinning", "Haptics", "Unity", "Unreal Engine 5", "Arduino", "Serial Telemetry"],
  },
  {
    org: "ArIES - Artificial Intelligence and Electronics Section",
    logo: "/aries.png",
    type: "Full-time · 1 yr 9 mos · On-site",
    location: "Roorkee, Uttarakhand, India",
    when: "Feb 2025 — Present",
    roles: [
      {
        title: "Software Developer",
        period: "Feb 2025 — Present · 1 yr 9 mos",
        bullets: [
          "Developing a Kuldhara-themed Android horror game with multiplayer co-op, planned for a December 2025 release.",
          "Developed a VR fitness/boxing prototype in Unity for the Srishti Technical Exhibition.",
          "Built a post-apocalyptic multiplayer third-person shooter demo in Unreal Engine (UE5-TheHollowPact) with client prediction and server reconciliation.",
          "Architected a modular quantitative research engine executing deterministic pipelines (data → indicators → strategies → signals → rendering).",
        ],
      },
    ],
    skills: ["Multiplayer Networking", "Unreal Engine 5", "Unity", "Game Systems", "Quant Infra"],
  },
  {
    org: "Grades Buddy",
    logo: "/grades-buddy.png",
    type: "Part-time · 4 mos · Remote",
    location: "Remote",
    when: "Oct 2025 — Jan 2026",
    roles: [
      {
        title: "Technical Consultant",
        period: "Oct 2025 — Jan 2026 · 4 mos",
        bullets: [
          "Engineered a full-scale synthetic-data augmentation pipeline using Unity Perception and YOLOv8, delivering reproducible workflows and measurable performance gains on minority object classes in real-world datasets.",
          "Engineered an interactive VR forest-walk simulation with dynamic fauna and performance-optimized vegetation, while guiding optimization and rendering improvements.",
          "Provided mentorship on scene optimization techniques, draw-call reductions, and rendering pipeline improvements, elevating project outcomes.",
        ],
      },
    ],
    skills: ["Unity Perception", "YOLOv8", "Synthetic Data", "Performance Profiling", "VR Optimization"],
  },
  {
    org: "Indian Institute of Technology Roorkee (IIT Roorkee)",
    logo: "/iitr.svg",
    type: "Pre-final Year B.Tech · Campus Leadership",
    location: "Roorkee, Uttarakhand, India",
    when: "2024 — Expected 2029",
    roles: [
      {
        title: "Student Mentor & Grand Finale Coordinator",
        period: "2024 — Present",
        bullets: [
          "Appointed Student Mentor for freshman engineering course TMI102, teaching Augmented Reality interior design applications.",
          "Appointed Student Coordinator for the national Smart India Hackathon (SIH) 2025 Grand Finale at IIT Roorkee.",
          "Conducted faculty-supervised in-vitro immunology lab research on generating and characterizing human peripheral blood monocyte–derived macrophages under Prof. Pranita P. Sarangi.",
          "Active Volunteer for WASH Cell, National Service Scheme (NSS IIT Roorkee).",
        ],
      },
    ],
    skills: ["IIT Roorkee", "TMI102 Mentorship", "SIH Coordination", "Immunology Research", "NSS"],
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    platform: "github",
    img: "/git.svg",
    link: "https://github.com/th-efool",
  },
  {
    id: 2,
    name: "X",
    platform: "twitter",
    img: "/x.svg",
    link: "https://x.com/agrimsinghx",
  },
  {
    id: 3,
    name: "LinkedIn",
    platform: "linkedin",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/agrimsinghx/",
  },
];
