import React, { useRef } from "react";
import { experiences } from "@/data";
import { FaAward } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { useGsapScope, fadeUp, prefersReducedMotion } from "@/utils/gsap";
import { gsap } from "gsap";

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const items = experiences();

  useGsapScope(() => {
    fadeUp("[data-experience-title]", { y: 24 });

    const line = sectionRef.current?.querySelector("[data-timeline-line]");
    if (!line) return;
    if (prefersReducedMotion()) {
      gsap.set(line, { scaleY: 1 });
    } else {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }
  }, sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2
          data-experience-title
          className="text-3xl font-bold mb-12 text-center text-green-400 flex items-center justify-center gap-2"
        >
          <FaAward className="w-8 h-8 text-green-400" />
          {t("nav.experience")}
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div
            data-timeline-line
            className="absolute left-[19px] top-5 bottom-5 w-1.5 rounded-full bg-gradient-to-b from-green-500 via-green-500/50 to-transparent origin-top"
          />

          <div className="flex flex-col gap-8">
            {items.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} isCurrent={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
