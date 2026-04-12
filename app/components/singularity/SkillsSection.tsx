import React from "react";

const SkillsSection: React.FC = () => (
  <section className="sg-ch3" data-ch id="ch3">
    <div className="sg-ch3-inner">
      <div className="sg-eyebrow sg-eyebrow-blue sg-mono">
        03 &nbsp;
      </div>
      <h2 className="sg-h2">
        Technical <span className="sg-accent">Moat</span>
      </h2>
      <p className="sg-ch3-note">Low-level systems, multi-agent orchestrations, and immersive engines.</p>

      <div className="sg-tl-list" style={{ marginTop: '3rem' }}>
        <div className="sg-tl" data-reveal>
          <span className="sg-tl-dot sg-tl-dot-active" aria-hidden style={{ background: 'var(--sg-gold)' }} />
          <div className="sg-tl-when sg-mono">Graphics & XR</div>
          <div className="sg-tl-body">
            <h3>DirectX 11, HLSL, Unreal Engine 5, Unity</h3>
            <p>Building non-Euclidean rendering engines, compute shaders, and spatial digital twins utilizing Meta Quest Passthrough and OpenXR.</p>
          </div>
        </div>

        <div className="sg-tl" data-reveal>
          <span className="sg-tl-dot sg-tl-dot-active" aria-hidden style={{ background: 'var(--sg-gold)' }} />
          <div className="sg-tl-when sg-mono">AI Systems</div>
          <div className="sg-tl-body">
            <h3>LangGraph, LLaMA, Groq, Ollama</h3>
            <p>Architecting multi-agent deterministic state machines and low-latency API gateways for local AI execution.</p>
          </div>
        </div>

        <div className="sg-tl" data-reveal>
          <span className="sg-tl-dot sg-tl-dot-active" aria-hidden style={{ background: 'var(--sg-gold)' }} />
          <div className="sg-tl-when sg-mono">Core Engineering</div>
          <div className="sg-tl-body">
            <h3>C++, Golang, TypeScript, Next.js, PostgreSQL</h3>
            <p>From deterministic game networking (client-side prediction) to enterprise scalable POS systems and quantitative data pipelines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
