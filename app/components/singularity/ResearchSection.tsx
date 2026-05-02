import React from "react";

const ResearchSection: React.FC = () => (
  <section className="sg-ch3" data-ch id="ch4">
    <div className="sg-ch3-inner">
      <div className="sg-eyebrow sg-eyebrow-blue sg-mono">
        04 &nbsp;
      </div>
      <h2 className="sg-h2">
        Lab <span className="sg-accent">Research</span>
      </h2>
      <p className="sg-ch3-note">Academic pursuits traversing physical biology and digital simulation.</p>

      <div className="sg-tl-list" style={{ marginTop: '3rem' }}>
        <div className="sg-tl" data-reveal>
          <span className="sg-tl-dot sg-tl-dot-active" aria-hidden style={{ background: 'oklch(0.88 0.12 74)' }} />
          <div className="sg-tl-when sg-mono">In-Vitro Immunology</div>
          <div className="sg-tl-body">
            <h3>Peripheral Blood Monocyte Derived Macrophages</h3>
            <p>Collaborated with Prof. Pranita P. Sarangi & Dr. Prerna Sharma to isolate monocytes via density gradient centrifugation, inducing targeted differentiation using M-CSF/IL-4, and studying phagocytosis of <i>S. epidermidis</i>.</p>
          </div>
        </div>

        <div className="sg-tl" data-reveal>
          <span className="sg-tl-dot sg-tl-dot-active" aria-hidden style={{ background: 'oklch(0.88 0.12 74)' }} />
          <div className="sg-tl-when sg-mono">SEED Lab, IITR</div>
          <div className="sg-tl-body">
            <h3>Hardware-in-the-Loop Digital Twins</h3>
            <p>Under Prof. Kaushik Parida, coupled physical hardware (Arduino, piezo-sensors) with real-time UE5/Unity environments via UART telemetry. Targeting 3 academic publications on Haptic Medical Simulators (May 2026).</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
