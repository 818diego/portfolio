import React, { useRef } from "react";
import { skills } from "@/data";
import { FaTools } from "react-icons/fa";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { SkillCategory } from "@/components/ui/SkillCategory";
import {
  useGsapScope,
  fadeUp,
  staggerReveal,
  prefersReducedMotion,
} from "@/utils/gsap";

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    fadeUp("[data-skills-title]", { y: 24 });

    const categories = gsap.utils.toArray<HTMLElement>("[data-skill-category]");
    if (prefersReducedMotion()) {
      gsap.fromTo(
        categories,
        { opacity: 0 },
        { opacity: 1, duration: 0.01, stagger: 0.06 },
      );
    } else {
      staggerReveal(categories, { y: 30, stagger: 0.12, duration: 0.7 });
    }
  }, sectionRef);

  const skillData = skills();

  const categories = [
    { title: t("skills.categories.languages"), data: skillData.languages },
    { title: t("skills.categories.frontend"), data: skillData.frontend },
    { title: t("skills.categories.backend"), data: skillData.backend },
    { title: t("skills.categories.aiAgents"), data: skillData.aiAgents },
    {
      title: t("skills.categories.tools"),
      data: skillData.tools,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div data-skills-title className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-green-400 flex items-center justify-center gap-2">
            <FaTools className="w-8 h-8 text-green-400" />
            {t("skills.title")}
          </h2>
          <p className="mt-2 text-sm text-gray-400">{t("skills.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {categories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              data={category.data}
              className={category.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
