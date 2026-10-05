import React from "react";
import { achievements } from "@/app/data";

/**
 * 04 Honors & Achievements — Competitive Podiums, Olympiad Rankings & National Coordination.
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
        Hackathon podium finishes, competitive mathematical and scientific Olympiad rankings, and national grand finale leadership.
      </p>

      <div className="sg-bento-grid">
        {achievements.map((item) => (
          <div
            className={`sg-bento-card sg-bento-${item.colSpan || "compact"} sg-bento-cat-${item.category}`}
            data-reveal
            key={item.id}
          >
            {/* Top metadata row with category indicator & prominent metric */}
            <div className="sg-bento-top">
              <div className="sg-bento-badge-group">
                <span className="sg-bento-badge sg-mono">{item.badge}</span>
                {item.highlight && (
                  <span className="sg-bento-highlight sg-mono">
                    {item.highlight}
                  </span>
                )}
              </div>
              <div className="sg-bento-metric-wrap">
                <span className="sg-bento-metric sg-mono">{item.metric}</span>
                <span className="sg-bento-metric-sub sg-mono">{item.metricLabel}</span>
              </div>
            </div>

            {/* Core titles & summary */}
            <div className="sg-bento-main">
              <h3 className="sg-bento-title">{item.title}</h3>
              <div className="sg-bento-event sg-mono">{item.event}</div>
              <p className="sg-bento-summary">{item.summary}</p>
            </div>

            {/* Tags / Technology pills */}
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
