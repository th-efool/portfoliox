import React from "react";
import { EMAIL, socialMedia } from "@/app/data";
import { trackContactClick, trackSocialClick } from "../GoogleAnalytics";

/** 04 Singularity — the end of the fall: contact, links, and r/rs → 0. */
const ContactSection: React.FC = () => (
  <section className="sg-ch4" data-ch id="ch6">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img className="sg-ch4-grid" src="/footer-grid.svg" alt="" aria-hidden />

    <div className="sg-reveal" data-reveal>

      <h2 className="sg-ch4-h2">
        Passionate about creating worldwide impact with{" "}
        <span className="sg-accent">technology.</span>
      </h2>


      <a
        className="sg-btn sg-btn-primary"
        href={`mailto:${EMAIL}`}
        onClick={() => trackContactClick("email")}
      >
        Contact me <span className="sg-accent">&#8599;</span>
      </a>

      <div className="sg-socials">
        {socialMedia.map((s) => (
          <a
            key={s.id}
            className="sg-social"
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            onClick={() => trackSocialClick(s.platform)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.img} alt="" aria-hidden width={19} height={19} />
          </a>
        ))}
      </div>

      <div className="sg-copyright">Copyright © 2026 Agrim Singh</div>
    </div>
  </section>
);

export default ContactSection;
