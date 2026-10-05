import React from "react";
import { skillCategories } from "@/app/data";

/**
 * 07 Technical Skills — Verified Technical Arsenal with Brand Logos.
 */
const SkillsSection: React.FC = () => (
  <section className="sg-section sg-skills-sec" data-ch id="ch7">
    <div className="sg-section-inner">
      <div className="sg-eyebrow sg-mono">
        07 &nbsp;
      </div>
      <h2 className="sg-h2">
        Technical <span className="sg-accent">Skills</span>
      </h2>
      <p className="sg-section-note">
        Core engineering competencies across low-level systems, high-performance computing, distributed AI, graphics engines, and production infrastructure.
      </p>

      <div className="sg-skills-categories-grid">
        {skillCategories.map((cat) => (
          <div className="sg-skill-category-card" data-reveal key={cat.id}>
            <div className="sg-skill-cat-head">
              <div className="sg-skill-cat-meta">
                <span className="sg-skill-cat-num sg-mono">{cat.num}</span>
                <h3 className="sg-skill-cat-title">{cat.title}</h3>
              </div>
              <p className="sg-skill-cat-desc">{cat.description}</p>
            </div>

            <div className="sg-skills-badges-grid">
              {cat.skills.map((skill) => (
                <div className="sg-tech-card" key={skill.name}>
                  <div className="sg-tech-icon-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="sg-tech-icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="sg-tech-info">
                    <span className="sg-tech-name">{skill.name}</span>
                    <span className="sg-tech-tag sg-mono">{skill.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
