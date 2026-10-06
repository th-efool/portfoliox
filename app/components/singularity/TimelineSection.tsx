import React from "react";
import { copy, timeline } from "@/app/data";

/**
 * 03 Leadership & Roles — Track record of campus engineering, lab research, and development leadership.
 *
 * The rail fills and the comet falls as you scroll; each row lights as the
 * comet passes it and flares brightest at closest approach.
 */
const TimelineSection: React.FC = () => (
  <section className="sg-ch3 sg-timeline-sec" data-ch data-tsec id="ch3">
    <div className="sg-ch3-inner">
      <div className="sg-eyebrow sg-eyebrow-blue sg-mono">
        03 &nbsp;
      </div>
      <h2 className="sg-h2">
        Leadership &amp; <span className="sg-accent">Roles</span>
      </h2>
      <p className="sg-ch3-note">{copy.timelineNote}</p>

      <div className="sg-track" data-ttrack>
        <span className="sg-track-rail" aria-hidden />
        <span className="sg-track-fill" data-tfill aria-hidden />
        <span className="sg-comet" data-comet aria-hidden />

        <div className="sg-tl-list">
          {timeline.map((item, i) => (
            <div className="sg-tl" data-tl key={i}>
              <span className="sg-tl-dot" data-dot aria-hidden />
              <div className="sg-tl-when sg-mono">{item.when}</div>
              <div className="sg-tl-body">
                <div className="sg-tl-card">
                  <div className="sg-tl-header">
                    <div className="sg-tl-logo-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.logo}
                        alt={`${item.org} logo`}
                        className="sg-tl-logo"
                        loading="lazy"
                      />
                    </div>
                    <div className="sg-tl-header-info">
                      <div className="sg-tl-top-line">
                        <h3 className="sg-tl-org">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sg-tl-org-link"
                              aria-label={`${item.org} official website`}
                            >
                              {item.org} <span className="sg-tl-arrow">&#8599;</span>
                            </a>
                          ) : (
                            item.org
                          )}
                        </h3>
                      </div>
                      <div className="sg-tl-meta sg-mono">
                        <span>{item.type}</span>
                        <span className="sg-tl-sep">&bull;</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="sg-tl-roles-list">
                    {item.roles.map((role, rIdx) => (
                      <div className="sg-tl-role" key={rIdx}>
                        <div className="sg-tl-role-head">
                          <h4 className="sg-tl-role-title">{role.title}</h4>
                          <span className="sg-tl-role-period sg-mono">{role.period}</span>
                        </div>
                        <ul className="sg-tl-bullets">
                          {role.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="sg-tl-skills sg-mono">
                    {item.skills.map((skill) => (
                      <span className="sg-skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
