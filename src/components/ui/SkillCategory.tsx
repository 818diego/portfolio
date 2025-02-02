import React from 'react';
import { SkillItem } from './SkillItem';

const SkillCategory: React.FC<{ title: string; data: any[]; index: number }> = ({ title, data, index }) => (
    <div
        className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg scroll-fade-in"
        style={{ animationDelay: `${index * 0.3}s` }}
    >
        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-green-300">
            {title}
        </h3>
        <div className="space-y-6">
            {data.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} skill={skill} index={index} skillIndex={skillIndex} />
            ))}
        </div>
    </div>
);

export { SkillCategory };
