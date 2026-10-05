import React from "react";

/**
 * 03 Technical Moat — Systems Architecture and Core Capabilities.
 */
const SkillsSection: React.FC = () => (
  <section className="sg-section sg-skills-sec" data-ch id="ch3">
    <div className="sg-section-inner">
      <div className="sg-eyebrow sg-mono">
        03 &nbsp;
      </div>
      <h2 className="sg-h2">
        Technical <span className="sg-accent">Architecture</span> &amp; Moat
      </h2>
      <p className="sg-section-note">
        Engineered across the hardware-software continuum: from GPU shaders and MPI clusters to deterministic multi-agent state machines.
      </p>

      <div className="sg-pillars-grid">
        <div className="sg-pillar-card" data-reveal>
          <div className="sg-pillar-head">
            <span className="sg-pillar-num sg-mono">01</span>
            <span className="sg-pillar-badge sg-mono">Graphics &amp; XR</span>
          </div>
          <h3 className="sg-pillar-title">DirectX 11, HLSL, UE5 &amp; Unity</h3>
          <p className="sg-pillar-desc">
            Non-Euclidean rendering engines, HLSL vertex/pixel shaders, GPU draw-call batching, frustum culling, and spatial digital twins utilizing Meta Quest Passthrough and OpenXR.
          </p>
          <div className="sg-pillar-tags sg-mono">
            <span>DirectX 11</span>
            <span>HLSL</span>
            <span>Unreal Engine 5</span>
            <span>Unity URP</span>
            <span>OpenXR</span>
          </div>
        </div>

        <div className="sg-pillar-card" data-reveal>
          <div className="sg-pillar-head">
            <span className="sg-pillar-num sg-mono">02</span>
            <span className="sg-pillar-badge sg-mono">Distributed AI</span>
          </div>
          <h3 className="sg-pillar-title">LangGraph &amp; Multi-Agent State Machines</h3>
          <p className="sg-pillar-desc">
            Probabilistic LLM inference structured inside deterministic typed state machines. Multi-tier real-time moderation pipelines, autonomous critics, and unified local AI gateways (Ollama/llama.cpp).
          </p>
          <div className="sg-pillar-tags sg-mono">
            <span>LangGraph</span>
            <span>LLaMA-3.3-70B</span>
            <span>Groq</span>
            <span>In-Memory RAG</span>
            <span>FastAPI</span>
          </div>
        </div>

        <div className="sg-pillar-card" data-reveal>
          <div className="sg-pillar-head">
            <span className="sg-pillar-num sg-mono">03</span>
            <span className="sg-pillar-badge sg-mono">HPC &amp; Quant</span>
          </div>
          <h3 className="sg-pillar-title">MPI Clusters &amp; Fast Event Loops</h3>
          <p className="sg-pillar-desc">
            Distributed-memory parallel programming via MPI, cache-aware data structures, thread concurrency, and modular quantitative research engines with deterministic signal backtesting pipelines.
          </p>
          <div className="sg-pillar-tags sg-mono">
            <span>MPI</span>
            <span>Parallel C++</span>
            <span>Cache Profiling</span>
            <span>Quant Engine</span>
            <span>State Synchrony</span>
          </div>
        </div>

        <div className="sg-pillar-card" data-reveal>
          <div className="sg-pillar-head">
            <span className="sg-pillar-num sg-mono">04</span>
            <span className="sg-pillar-badge sg-mono">Core Infrastructure</span>
          </div>
          <h3 className="sg-pillar-title">C++, Go, TypeScript &amp; PostgreSQL</h3>
          <p className="sg-pillar-desc">
            Low-latency network synchronization with client-side prediction, high-concurrency microservices, role-based PostgreSQL enterprise databases, and reproducible Docker containerization.
          </p>
          <div className="sg-pillar-tags sg-mono">
            <span>C++20</span>
            <span>Golang</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
