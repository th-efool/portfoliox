import React from "react";
import { certifications } from "@/app/data";

/**
 * 07 Courses & Certifications — Verified credentials with issuer logos and direct verification links.
 */
const CertificationsSection: React.FC = () => (
  <section className="sg-section sg-certs-sec" data-ch id="ch7">
    <div className="sg-section-inner">
      <div className="sg-eyebrow sg-mono">
        07 &nbsp;
      </div>
      <h2 className="sg-h2">
        Courses &amp; <span className="sg-accent">Certifications</span>
      </h2>
      <p className="sg-section-note">
        Verified accomplishments across parallel computing, high-performance computing (MPI), generative AI, and system software.
      </p>

      <div className="sg-certs-list">
        {certifications.map((cert) => (
          <div className="sg-cert-row" data-reveal key={cert.id}>
            <div className="sg-cert-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="sg-cert-logo"
                width={48}
                height={48}
              />
            </div>

            <div className="sg-cert-content">
              <h3 className="sg-cert-title">{cert.title}</h3>
              <div className="sg-cert-issuer">{cert.issuer}</div>
              <div className="sg-cert-date sg-mono">Issued {cert.issued}</div>
              <div className="sg-cert-id sg-mono">
                Credential ID: <span>{cert.idCode}</span>
              </div>

              <div className="sg-cert-actions">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sg-cert-btn sg-mono"
                >
                  Show credential <span className="sg-cert-btn-arrow">&#8599;</span>
                </a>

                <div className="sg-cert-skills sg-mono">
                  {cert.skills.map((s) => (
                    <span className="sg-skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
