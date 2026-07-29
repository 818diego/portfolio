import React, { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaCode, FaFileAlt } from 'react-icons/fa';
import { BsTerminalFill } from 'react-icons/bs';
import { GrCloudSoftware } from 'react-icons/gr';
import { PiMouseScroll } from 'react-icons/pi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '@/data';
import { useTranslation } from 'react-i18next';
import { useGsapScope, prefersReducedMotion } from '@/utils/gsap';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapScope(() => {
    const targets = gsap.utils.toArray<HTMLElement>('[data-hero]');
    if (prefersReducedMotion()) {
      gsap.fromTo(targets, { opacity: 0 }, { opacity: 1, duration: 0.01, stagger: 0.04 });
    } else {
      gsap.from(targets, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }

    const indicator = sectionRef.current?.querySelector('[data-scroll-indicator]');
    if (!indicator) return;

    if (!prefersReducedMotion()) {
      gsap.to(indicator, {
        y: 8,
        duration: 1.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom 20%',
        onUpdate: (self) => {
          gsap.to(indicator, { opacity: 1 - self.progress, duration: 0.2, overwrite: 'auto' });
        }
      });
    }
  }, sectionRef);

  const info = personalInfo();

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 py-24 text-center relative">
        <div data-hero className="inline-flex items-center gap-2 bg-green-900/30 px-4 py-2 rounded-full mb-6">
          <BsTerminalFill className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-medium">
            {info.available}
          </span>
        </div>

        <h1 data-hero className="text-5xl md:text-7xl font-bold mb-6 text-green-400">
          {t("Hello, I'm")} <span className="text-green-300">{info.fullName}</span>
        </h1>

        <div data-hero className="flex items-center justify-center gap-3 mb-2">
          <FaCode className="w-6 h-6 text-green-400" />
          <p className="text-xl text-gray-400">
            {info.role}
          </p>
          <GrCloudSoftware className="w-6 h-6 text-green-400" />
        </div>

        <p data-hero className="max-w-2xl mx-auto text-gray-400 mb-8">
          {info.description}
        </p>

        <div className="flex justify-center gap-4">
          {[
            {
              Icon: FaGithub,
              href: info.social.github,
              label: "GitHub",
              color: "hover:text-white"
            },
            {
              Icon: FaLinkedinIn,
              href: info.social.linkedin,
              label: "LinkedIn",
              color: "hover:text-[#0077b5]"
            },
            {
              Icon: FaFileAlt,
              href: info.social.cv,
              label: "CV",
              color: "hover:text-blue-400"
            }
          ].map((social) => {
            const Icon = social.Icon;
            return (
            <a
              data-hero
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:shadow-lg ${social.color}`}
              aria-label={t(social.label)}
            >
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-green-400" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-green-400">
                {social.label}
              </span>
            </a>
            );
          })}
        </div>
      </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
          <div data-scroll-indicator className="flex flex-col items-center text-green-400 p-4">
            <PiMouseScroll className="w-8 h-8 text-current" />
          </div>
        </div>
    </section>
  );
};