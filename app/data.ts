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
    iconLists: ["/ts.svg", "/sql.svg"],
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

export const achievements = [
  {
    id: "pinch",
    title: "1st Runner-Up — Pinch Hackathon",
    event: "Srishti 2026 · IIT Roorkee × Pinch",
    badge: "🥈 Podiums",
    metric: "1st Runner-Up",
    summary:
      "Engineered a 9-agent conference intelligence engine utilizing LangGraph, FastAPI, Groq LLaMA-3.3-70B, and NumPy vector RAG to synthesize conference roadmaps in < 3 minutes.",
    tags: ["LangGraph", "Multi-Agent", "FastAPI", "Groq LLaMA"],
  },
  {
    id: "pancake",
    title: "1st Runner-Up — PancakeSwap Hackathon",
    event: "Srishti 2026 · IIT Roorkee × PancakeSwap",
    badge: "🥈 Podiums",
    metric: "1st Runner-Up",
    summary:
      "Solo build of a continuous-regime autonomous trading agent centered on 'Intelligent Abstention', continuous hypothesis ranking by expected value (EV), and an autonomous risk veto layer.",
    tags: ["TypeScript", "Algorithmic Trading", "State Machine", "Railway"],
  },
  {
    id: "gdai",
    title: "2nd Runner-Up — GDAI Hackathon 2025",
    event: "Game Dev & AI Guild",
    badge: "🥉 Podiums",
    metric: "2nd Runner-Up",
    summary:
      "Engineered 'Mirrors & Butterfly Effect' in Unreal Engine 5—a non-Euclidean causality engine and psychological narrative loop exploring dynamic room deformation and time dilation.",
    tags: ["Unreal Engine 5", "HLSL Shaders", "Causality Engine", "C++"],
  },
  {
    id: "imo",
    title: "International Mathematics Olympiad (IMO)",
    event: "Science Olympiad Foundation",
    badge: "🌐 Global Rank",
    metric: "AIR 477",
    summary:
      "All India Rank 477, Zonal Rank 203. Demonstrates proven foundation in combinatorics, discrete mathematics, and algorithmic problem solving.",
    tags: ["Competitive Math", "SOF", "Zonal Rank 203"],
  },
  {
    id: "nso",
    title: "National Science Olympiad (NSO)",
    event: "Science Olympiad Foundation",
    badge: "🌐 Global Rank",
    metric: "AIR 375",
    summary:
      "All India Rank 375, Zonal Rank 150 across competitive physics and chemical sciences.",
    tags: ["Physics", "Chemistry", "Zonal Rank 150"],
  },
  {
    id: "sih",
    title: "Student Coordinator — Smart India Hackathon 2025",
    event: "Ministry of Education, Government of India",
    badge: "🎖️ Leadership",
    metric: "Grand Finale",
    summary:
      "Appointed Student Coordinator for the national Grand Finale held at the IIT Roorkee Centre, managing multi-tier logistics and technical evaluation cohorts.",
    tags: ["Leadership", "Operations", "National Level"],
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
      { name: "Go", logo: "/go.svg", tag: "Concurrency & Microservices" },
      { name: "C#", logo: "/csharp.svg", tag: "Unity & XR Development" },
      { name: "SQL", logo: "/sql.svg", tag: "Relational Modeling" },
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
    description: "Stateful agentic graphs, local inference clusters, and transformer model serving.",
    skills: [
      { name: "PyTorch", logo: "/pytorch.svg", tag: "Deep Learning & Tensors" },
      { name: "LangGraph", logo: "/langgraph.svg", tag: "Agentic State Machines" },
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
    description: "Production web applications, reactive user interfaces, and real-time streaming protocols.",
    skills: [
      { name: "Next.js", logo: "/next.svg", tag: "App Router & SSR" },
      { name: "React", logo: "/re.svg", tag: "Reactive Component Trees" },
      { name: "Tailwind CSS", logo: "/tail.svg", tag: "Modern Design Tokens" },
      { name: "PostgreSQL", logo: "/postgres.svg", tag: "Relational Persistence" },
      { name: "WebSockets", logo: "/websockets.svg", tag: "Bi-directional Real-Time" },
    ],
  },
];

/** Chapter 03. Roles and builds, most recent first. */
export const timeline = [
  {
    when: "Mar 2026 — Present",
    title: "Project Lead — Tinkering Lab, IIT Roorkee",
    body: "Leading engineering cohorts across rapid prototyping, embedded systems, and spatial software. Architecting real-time multi-agent moderation pipelines (Detector → Validator → Analyzer → Action Engine) and a GIS rendering plugin for Unity and Unreal Engine.",
  },
  {
    when: "Sept 2025 — Present",
    title: "Research Collaborator — SEED Lab, IIT Roorkee",
    body: "Developing real-time virtual representations of novel smart materials and sensor-instrumented medical tools under Prof. Kaushik Parida. Co-authoring 3 academic papers on digital twin teleoperation and haptic medical simulators.",
  },
  {
    when: "Feb 2025 — Present",
    title: "Software & Game Systems Developer — ArIES",
    body: "Architected a modular quantitative research engine executing deterministic pipelines (data → indicators → strategies → signals → rendering). Engineered 'UE5-TheHollowPact'—a third-person multiplayer action demo in UE5 with client-side prediction and server reconciliation.",
  },
  {
    when: "Oct 2025 — Jan 2026",
    title: "Technical Consultant & Developer — Grades Buddy",
    body: "Engineered a synthetic-data generation pipeline using Unity Perception and YOLOv8 to synthesize edge-case frames for object detection. Audited client rendering pipelines to slash draw calls for VR frame budgets.",
  },
  {
    when: "2024 — 2028 / Expected 2029",
    title: "B.Tech Computer Science — IIT Roorkee",
    body: "Pre-final Year Student. Appointed student mentor for freshman engineering courses (TMI102) teaching Augmented Reality interior design; active volunteer for WASH Cell (NSS); Student Coordinator for Smart India Hackathon Grand Finale.",
  }
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
