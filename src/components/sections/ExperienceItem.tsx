import React from 'react';
import { FaBriefcase, FaRegCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export const ExperienceItem: React.FC<{ exp: any, index: number }> = ({ exp, index }) => {
    const isEven = index % 2 === 0;
    const Icon = exp.icon;
    return (
        <div
            className={`timeline-item relative mb-12 last:mb-0 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="hidden md:block w-1/2 pointer-events-none" />
            <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 pointer-events-none">
                <div className="relative">
                    <div
                        className="relative p-2 md:p-2.5 bg-zinc-800 rounded-full border-2 border-green-400 shadow-lg"
                    >
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    </div>
                </div>
            </div>
            <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                <div
                    className="group bg-zinc-800 rounded-xl p-5 shadow-sm shadow-zinc-900 border border-zinc-700/50 transition-all duration-300"
                >
                    <div className="flex flex-col mb-3">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[11px] font-bold text-green-400 flex items-center gap-1 bg-green-500/5 px-2 py-0.5 rounded-md border border-green-500/10">
                                <FaRegCalendarAlt className="w-3 h-3" />
                                {exp.period}
                            </span>
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-700/50 border border-green-500/30 transition-all duration-300">
                                <FaBriefcase className="w-3 h-3 text-green-500" />
                                <span className="font-bold text-[10px] uppercase tracking-wider text-white">{exp.company}</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-black text-green-400 transition-colors">
                            {exp.title}
                        </h3>
                    </div>
                    <p className="text-[13px] text-gray-400 mb-4 leading-relaxed border-l-2 border-green-500/20 pl-3 py-1">
                        {exp.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-hidden transition-all duration-700 ease-in-out opacity-100">
                        {exp.achievements.map((achievement: any, i: number) => (
                            <div
                                key={i}
                                className="flex items-center px-3 py-2 rounded-lg bg-white/5 text-zinc-100/90 border border-white/10 transition-all duration-300"
                            >
                                <FaCheckCircle className="w-3.5 h-3.5 mr-2 text-green-400 flex-shrink-0" />
                                <span className="text-[12px] leading-tight font-medium">
                                    {achievement}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
