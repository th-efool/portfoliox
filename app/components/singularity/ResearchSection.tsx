import React from "react";

/**
 * 04 Research — SEED Lab Cyber-Physical Twins and In-Vitro Immunology.
 */
const ResearchSection: React.FC = () => (
  <section className="sg-section sg-research-sec" data-ch id="ch4">
    <div className="sg-section-inner">
      <div className="sg-eyebrow sg-mono">
        04 &nbsp;
      </div>
      <h2 className="sg-h2">
        Cyber-Physical &amp; Bio <span className="sg-accent">Research</span>
      </h2>
      <p className="sg-section-note">
        Faculty-supervised academic laboratories spanning real-time tactile digital twins and cellular immunology.
      </p>

      <div className="sg-research-grid">
        <div className="sg-research-card" data-reveal>
          <div className="sg-research-header">
            <span className="sg-research-tag sg-mono">SEED Laboratory · IIT Roorkee</span>
            <span className="sg-research-status sg-mono">3 Papers in Pipeline (May &apos;26)</span>
          </div>

          <h3 className="sg-research-title">
            Hardware-in-the-Loop Digital Twins &amp; Haptic Simulators
          </h3>
          <div className="sg-research-advisor sg-mono">
            Advisor: Prof. Kaushik Parida · Soft Electronics &amp; Energy Devices Lab
          </div>

          <p className="sg-research-body">
            Bridging novel flexible piezoelectric smart materials with real-time 3D simulation environments. Built an <i>n × n</i> modular tap-matrix sensor surface capturing pressure profiles and temporal dynamics. Integrated physical robotic arms and surgical cannula penetration sensors streaming high-frequency UART telemetry into Unity and Unreal Engine 5, calibrated against porcine skin resistance tests.
          </p>

          <div className="sg-research-features">
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Tactile Intelligence Twin:</b> Sub-millisecond serial translation from physical piezos into virtual soft bodies.</span>
            </div>
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Surgical Tissue Simulation:</b> UE5 deformation dynamics for tissue penetration training.</span>
            </div>
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Teleoperation Sync:</b> Authoritative closed-loop hardware actuation via microcontroller state.</span>
            </div>
          </div>
        </div>

        <div className="sg-research-card" data-reveal>
          <div className="sg-research-header">
            <span className="sg-research-tag sg-mono">Cellular Biology Lab</span>
            <span className="sg-research-status sg-mono">Faculty Supervised</span>
          </div>

          <h3 className="sg-research-title">
            In-Vitro Derivation &amp; Functional Assays of Human Macrophages
          </h3>
          <div className="sg-research-advisor sg-mono">
            Collaborators: Prof. Pranita P. Sarangi, Dr. Prerna Sharma, Miss Divya Singh
          </div>

          <p className="sg-research-body">
            Conducted in-vitro isolation, differentiation, and characterization of human peripheral blood monocyte–derived macrophages. Isolated primary monocytes using density gradient centrifugation, followed by targeted cytokine-induced differentiation (M-CSF and IL-4). Evaluated morphology, phenotypic expression, and functional phagocytosis of ingested <i>Staphylococcus epidermidis</i> bacteria.
          </p>

          <div className="sg-research-features">
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Monocyte Centrifugation:</b> High-purity separation from whole human peripheral blood.</span>
            </div>
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Cytokine Differentiation:</b> Precise staging and phenotypic morphological tracking under M-CSF/IL-4.</span>
            </div>
            <div className="sg-res-feature">
              <span className="sg-res-bullet" aria-hidden />
              <span><b>Functional Phagocytosis:</b> Gram staining assays and quantitative flow cytometry evaluation.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResearchSection;
