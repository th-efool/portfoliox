/**
 * Content for the Singularity scroll.
 *
 * The page is four chapters plus the black-hole intro; every string a visitor
 * reads lives here so copy edits never mean touching layout or scroll code.
 */

export const EMAIL = "agrim_s@cy.iitr.ac.in";

export const RESUME_URL = "";

/** Bottom stage bar. `short` is used on phones, where the cells are ~80px wide. */
export const chapters = [
  { id: "ch1", long: "01 Horizon", short: "01 Horizon" },
  { id: "ch2", long: "02 Disk", short: "02 Disk" },
  { id: "ch3", long: "03 Capabilities", short: "03 Capabilities" },
  { id: "ch4", long: "04 Research", short: "04 Research" },
  { id: "ch5", long: "05 Dilation", short: "05 Dilation" },
  { id: "ch6", long: "06 Singularity", short: "06 Core" },
];

/** Phase readout in the stage bar, indexed by the active chapter. */
export const phaseNames = [
  "Event horizon",
  "Accretion disk",
  "Technical Moat",
  "Lab Research",
  "Time dilation",
  "Singularity",
];

export const copy = {
  // The hero paragraph is tightened on phones — the desktop sentence wraps to
  // five lines at 402px and pushes the buttons under the fold.
  introDesktop:
    "I am a Sophomore Systems Engineer at IIT Roorkee, focused on Multi-Agent Systems, low-level graphics, XR simulation, and Quantitative Infrastructure.",
  introMobile:
    "Sophomore Systems Engineer at IIT Roorkee, building Multi-Agent Systems, XR engines, and Quant infrastructure.",
  timelineNote: "Where I've been and what I shipped there, most recent first.",
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
    img: "/p1.webp", // Reusing p1
    des: "Modern, enterprise-grade POS system built with Golang, React, TypeScript, and PostgreSQL featuring role-based access and professional UI/UX.",
    iconLists: ["/ts.svg", "/sql.svg"],
    link: "https://github.com/th-efool",
  },
  {
    id: 6,
    title: "QuestCameraKit_WIP",
    tag: "XR / Mixed Reality",
    img: "/p2.webp", // Reusing p2
    des: "Template and reference projects demonstrating how to use Meta Quest's Passthrough Camera API for advanced AR/VR vision, tracking, and shader effects.",
    iconLists: ["/three.svg"],
    link: "https://github.com/th-efool",
  }
];

/** Chapter 05. Roles and builds, most recent first. */
export const timeline = [
  {
    when: "Mar 2026 — Present",
    title: "Project Lead — Tinkering Lab, IIT Roorkee",
    body: "Leading engineering cohorts across rapid prototyping, embedded systems, and spatial software. Architecting real-time multi-agent moderation pipelines and a GIS rendering plugin for Unity and Unreal Engine.",
  },
  {
    when: "Sept 2025 — Present",
    title: "Research Collaborator — SEED Lab, IIT Roorkee",
    body: "Developing real-time virtual representations of novel smart materials and sensor-instrumented medical tools under Prof. Kaushik Parida. Co-authoring 3 academic papers on digital twin teleoperation and haptic medical simulators.",
  },
  {
    when: "Feb 2025 — Present (Active)",
    title: "Software & Game Systems Developer — ArIES",
    body: "Architected a modular quantitative research engine executing deterministic pipelines. Engineered 'UE5-TheHollowPact'—a third-person multiplayer action demo in UE5 with client-side prediction and server reconciliation.",
  },
  {
    when: "Oct 2025 — Jan 2026",
    title: "Technical Consultant & Developer — Grades Buddy",
    body: "Engineered a synthetic-data generation pipeline using Unity Perception and YOLOv8 to synthesize edge-case frames for object detection. Audited client rendering pipelines to slash draw calls for VR frame budgets.",
  },
  {
    when: "Expected Spring 2029",
    title: "B.Tech Computer Science — IIT Roorkee",
    body: "Sophomore. Active volunteer for WASH Cell (NSS) and appointed mentor for incoming students in building AR interior-design applications.",
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
