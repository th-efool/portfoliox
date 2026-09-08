# 🚀 AGRIM SINGH — COMPREHENSIVE PROJECTS TRACKER

This document serves as an aggregated master-list of all notable projects, systems architectures, games, and research initiatives developed by Agrim Singh. 

---

## 🤖 1. MULTI-AGENT & DISTRIBUTED AI SYSTEMS

### **9-Agent Conference Intelligence Engine**
* **Context:** Pinch Hackathon (Srishti 2026) — 🥈 **1st Runner-Up**
* **Tech Stack:** `LangGraph`, `FastAPI`, `Next.js`, `Groq LLaMA-3.3-70B`, in-memory vector RAG.
* **Description:** A directed typed state machine where 9 discrete agents collaborate to orchestrate high-stakes conference planning. Agents (Sponsor, Speaker, Venue, Pricing) read/write strict deltas to a centralized state in under 3 minutes, governed by an autonomous Critic Agent that forces re-execution on low-quality outputs.

### **Real-Time Social Media Moderation Pipeline**
* **Context:** Tinkering Lab, IIT Roorkee
* **Tech Stack:** Multi-Agent Systems, High-Frequency Processing, APIs.
* **Description:** A deterministic pipelined multi-agent system (`Detector -> Validator -> Analyzer -> Action Engine`) with sub-millisecond in-memory routing to sanitize token streams and execute automated moderation (rate-limiting, shadow-banning) autonomously.

### **GuardAi (GovGuard)**
* **Context:** Open Source (`@th-efool`)
* **Tech Stack:** AI Governance, Monitoring, APIs.
* **Description:** A comprehensive AI governance platform designed to ensure safe, compliant, and ethical AI interactions in enterprise environments. Provides real-time monitoring, analysis, and enforcement of AI safety policies across multiple regulatory frameworks.

### **PullO-Showcase (Distributed Local AI Cluster)**
* **Context:** Open Source (`@th-efool`)
* **Tech Stack:** `Python`, Systems Gateway, Local LLMs.
* **Description:** A distributed gateway that securely exposes local Ollama, LM Studio, and llama.cpp instances across teams via unified OpenAI-compatible APIs without requiring open ports.

---

## 🕹️ 2. XR, DIGITAL TWINS & HARDWARE SIMULATION

### **Hardware-in-the-Loop Digital Twins & Haptics**
* **Context:** SEED Lab Research under Prof. Kaushik Parida
* **Tech Stack:** `Unreal Engine 5`, `Unity`, C++, Arduino, UART telemetry.
* **Description:** Cyber-physical digital twins coupling physical hardware with real-time simulation. Projects include a modular piezo-sensor tap matrix, an Arduino-streamed Kinematic Arm Digital Twin in Unity, and a Surgical Tissue Cannulation Simulator in UE5 using calibrated soft-body physics. (Targeting 3 research publications in May 2026).

### **GIS Rendering Engine**
* **Context:** Tinkering Lab, IIT Roorkee
* **Tech Stack:** `Unity`, `Unreal Engine`, GIS Data Pipelines.
* **Description:** An extensible GIS rendering plugin for visualizing high-resolution digital elevation models (DEM), satellite imagery tiles, and layered geospatial data dynamically inside game engines.

### **Unity-QuestConversationalAI**
* **Context:** Open Source (`@th-efool`)
* **Tech Stack:** C#, `Unity`, Meta Quest SDK, OpenAI API, ElevenLabs.
* **Description:** Low-latency, speech-to-speech conversational AI voice agent deployed directly onto Meta Quest headsets with direct endpoint streaming.

### **VR Stage-Fear Training App**
* **Context:** Tinkering Lab, IIT Roorkee
* **Description:** A virtual reality exposure therapy and training environment utilizing multi-agent RAG to provide dynamic, real-time speech and behavioral feedback to users practicing public speaking.

---

## 🧬 3. BIOLOGICAL SYSTEMS & QUANTITATIVE INFRASTRUCTURE

### **In-Vitro Immunology Research (Peripheral Blood Monocyte Derived Macrophages)**
* **Context:** Academic Lab Research under Prof. Pranita P. Sarangi, Dr. Prerna Sharma, Miss Divya Singh.
* **Description:** Generated and characterized human peripheral blood monocyte-derived macrophages in vitro. Work involved isolating monocytes via density gradient centrifugation, inducing targeted differentiation using M-CSF and IL-4, and assessing phenotypic/functional characteristics through flow cytometry and Gram staining (e.g., studying macrophages with ingested *S. epidermidis*).

### **Autonomous Market Regime Trading Agent**
* **Context:** PancakeSwap Hackathon (Srishti 2026) — 🥈 **1st Runner-Up (Solo)**
* **Tech Stack:** `Node.js`, `TypeScript`, `Next.js`, EV Hypothesis Ranking.
* **Description:** Built an adaptive 5-stage continuous decision loop centered on "Intelligent Abstention", dynamically classifying market regimes and using an autonomous risk veto agent to guard execution based on orderbook telemetry.

### **Quantitative Research Engine**
* **Context:** ArIES, IIT Roorkee
* **Tech Stack:** Data processing pipelines, real-time rendering.
* **Description:** Engineered a modular, deterministic quantitative pipeline that separates pure math calculation from stateful trade signal dispatch, complete with a real-time rendering harness to visualize alpha decay and max drawdown curves.

---

## 🎮 4. GAMES & REAL-TIME MULTIPLAYER

### **Mirrors & Butterfly Effect (UE5 Game)**
* **Context:** GDAI Hackathon 2025 — 🥉 **2nd Runner-Up**
* **Tech Stack:** `Unreal Engine 5`, C++, HLSL Shaders.
* **Description:** A non-Euclidean causality engine and psychological narrative loop game exploring dynamic environment restructuring based on a player-driven memory engine.

### **UE5-TheHollowPact**
* **Context:** Open Source (`@th-efool`), ArIES
* **Tech Stack:** `Unreal Engine 5`, C++, Networked Multiplayer.
* **Description:** An authoritative third-person multiplayer action RPG featuring advanced client-side prediction, server reconciliation, replicated character movement, and decoupled gameplay ability components.

### **Kuldhara-Themed Multiplayer Horror Game**
* **Context:** ArIES, IIT Roorkee
* **Tech Stack:** Game Engine, Network synchronization.
* **Description:** A commercial Android horror game leveraging local folklore (Kuldhara) with synchronized multiplayer co-op networking.

### **VR Fitness / Boxing Simulator**
* **Context:** ArIES (Srishti Technical Exhibition)
* **Tech Stack:** `Unity`, VR Headsets.
* **Description:** Built a high-frequency VR boxing simulator prioritizing tight input loops and frame-budget discipline for physical exhibition.

---

## 🏗️ 5. DEVELOPER TOOLING, INFRASTRUCTURE & DATA

### **Synthetic Data Pipeline for Object Detection**
* **Context:** Grades Buddy
* **Tech Stack:** `Unity Perception`, `YOLOv8`, Python.
* **Description:** Engineered a synthetic-data generation pipeline synthesizing millions of labeled edge-case frames, measurably boosting object detection precision on under-represented classes.

### **Developer Tooling (SideQuestHQ)**
* **Context:** SideQuestHQ (`#BuildX` Cohort)
* **Tech Stack:** Build infrastructure.
* **Description:** Architected developer-first infrastructure (`buildbank-sidequesthq`, `undone-site`) to accelerate autonomous agent integration for software teams.

### **domshift**
* **Context:** Open Source (`@th-efool`)
* **Tech Stack:** `TypeScript`.
* **Description:** A high-performance DOM transformation and reactive layout utility library.
