import React from "react";
import { achievements } from "@/app/data";

/**
 * 04 Honors & Podiums — Competitive achievements and rankings.
 */
const AchievementsSection: React.FC = () => (
  <section className="sg-section sg-achievements-sec" data-ch id="ch4">
    <div className="sg-section-inner">
      <div className="sg-eyebrow sg-mono">
        04 &nbsp;
      </div>
      <h2 className="sg-h2">
        Honors &amp; <span className="sg-accent">Achievements</span>
      </h2>
      <p className="sg-section-note">
        Hackathon podium finishes, Olympiad ranks, and national event coordination.
      </p>

      <div className="sg-bento-grid">
        {achievements.map((item) => (
          <div className="sg-bento-card" data-reveal key={item.id}>
            <div className="sg-bento-top">
              <span className="sg-bento-badge sg-mono">{item.badge}</span>
              <span className="sg-bento-metric sg-mono">{item.metric}</span>
            </div>

            <h3 className="sg-bento-title">{item.title}</h3>
            <div className="sg-bento-event sg-mono">{item.event}</div>
            <p className="sg-bento-summary">{item.summary}</p>

            <div className="sg-bento-tags sg-mono">
              {item.tags.map((tag) => (
                <span className="sg-bento-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
