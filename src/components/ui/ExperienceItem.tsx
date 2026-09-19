import React, { useRef } from "react";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import {
  useGsapScope,
  staggerReveal,
  prefersReducedMotion,
} from "@/utils/gsap";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  icon: IconType;
}

interface ExperienceItemProps {
  exp: Experience;
  isCurrent?: boolean;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  exp,
  isCurrent = false,
}) => {
  const { t } = useTranslation();
  const Icon = exp.icon;
  const rootRef = useRef<HTMLDivElement>(null);

  useGsapScope(() => {
    if (!rootRef.current) return;

    const innerTargets = gsap.utils.toArray<HTMLElement>("[data-exp-inner]");
    if (prefersReducedMotion()) {
      gsap.fromTo(
        innerTargets,
        { opacity: 0 },
        { opacity: 1, duration: 0.01, stagger: 0.04 },
      );
    } else {
      gsap.from(rootRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
      staggerReveal(innerTargets, {
        y: 10,
        stagger: 0.05,
        duration: 0.45,
        delay: 0.1,
      });
    }
  }, rootRef);

  return (
    <div ref={rootRef} className="relative pl-16 md:pl-20">
      <div
        className={`absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
          isCurrent
            ? "border-green-400 bg-zinc-900"
            : "border-green-500/50 bg-zinc-900"
        }`}
      >
        <Icon className="h-4 w-4 text-green-400" />
      </div>

      <article
        data-exp-inner
        className={`rounded-xl border bg-zinc-800 p-6 md:p-7 transition-colors duration-300 ${
          isCurrent
            ? "border-green-500/35"
            : "border-zinc-700/50 hover:border-zinc-600/60"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-zinc-600/50 bg-zinc-700/40 px-3 py-1.5 text-xs font-semibold text-zinc-300">
              <FaRegCalendarAlt className="h-3.5 w-3.5 shrink-0 text-green-400" />
              {exp.period}
            </span>
            {isCurrent && (
              <span className="rounded-md border border-green-500/30 bg-green-500/10 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                {t("experience.current")}
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-2 rounded-md border border-green-500/25 bg-green-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-green-300">
            <FaBriefcase className="h-3.5 w-3.5 shrink-0" />
            {exp.company}
          </span>
        </div>

        <h3 data-exp-inner className="mb-3 text-xl font-bold text-green-400">
          {exp.title}
        </h3>

        <p
          data-exp-inner
          className="mb-4 text-[15px] leading-relaxed text-gray-400"
        >
          {exp.description}
        </p>

        <ul data-exp-inner className="space-y-2.5">
          {exp.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-300/90"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
