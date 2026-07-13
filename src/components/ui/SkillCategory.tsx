import React from 'react';
import { SkillItem } from './SkillItem';

const SkillCategory: React.FC<{ title: string; data: any[]; index: number }> = ({ title, data, index }) => (
    <div
        className="bg-zinc-800 rounded-xl p-4 md:p-5 shadow-sm border border-zinc-700/50 scroll-fade-in"
        style={{ animationDelay: `${index * 0.3}s` }}
    >
        <h3 className="text-xl font-bold mb-4 text-white">
            {title}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {data.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} skill={skill} index={index} skillIndex={skillIndex} />
            ))}
        </div>
    </div>
);

export { SkillCategory };
