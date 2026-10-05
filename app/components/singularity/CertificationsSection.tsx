import React from "react";
import { certifications } from "@/app/data";

/**
 * 06 Credentials — High-Performance Computing and Infrastructure specializations.
 */
const CertificationsSection: React.FC = () => {
  const featured = certifications.find((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <section className="sg-section sg-certs-sec" data-ch id="ch7">
      <div className="sg-section-inner">
        <div className="sg-eyebrow sg-mono">
          07 &nbsp;
        </div>
        <h2 className="sg-h2">
          Courses &amp; <span className="sg-accent">Certifications</span>
        </h2>
        <p className="sg-section-note">
          Parallel computing, high-performance computing (MPI), generative AI, and containerization.
        </p>

        {featured && (
          <div className="sg-featured-cert" data-reveal>
            <div className="sg-featured-cert-head">
              <div className="sg-featured-badge sg-mono">{featured.focus}</div>
              <div className="sg-featured-issuer sg-mono">
                {featured.issuer} · Issued {featured.issued}
              </div>
            </div>

            <h3 className="sg-featured-cert-title">{featured.title}</h3>
            <p className="sg-featured-cert-desc">{featured.description}</p>

            <div className="sg-featured-meta">
              <div className="sg-cert-id sg-mono">
                Credential ID: <span>{featured.idCode}</span>
              </div>
              <div className="sg-cert-skills sg-mono">
                {featured.skills.map((s) => (
                  <span className="sg-skill-pill sg-skill-pill-gold" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="sg-certs-grid">
          {others.map((cert) => (
            <div className="sg-cert-card" data-reveal key={cert.id}>
              <div className="sg-cert-top sg-mono">
                <span className="sg-cert-issuer">{cert.issuer}</span>
                <span className="sg-cert-date">{cert.issued}</span>
              </div>
              <h4 className="sg-cert-title">{cert.title}</h4>
              <p className="sg-cert-desc">{cert.description}</p>
              <div className="sg-cert-footer">
                <span className="sg-cert-id sg-mono">ID: {cert.idCode}</span>
                <div className="sg-cert-skills sg-mono">
                  {cert.skills.map((s) => (
                    <span className="sg-skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
