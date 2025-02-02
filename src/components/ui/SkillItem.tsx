import React from 'react';
import { ProgressBar } from './ProgressBar';

const SkillItem: React.FC<{ skill: any; index: number; skillIndex: number }> = ({ skill, index, skillIndex }) => (
    <div
        className="scroll-fade-in"
        style={{ animationDelay: `${(index * 4 + skillIndex) * 0.2}s` }}
    >
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
                <skill.icon className="w-5 h-5 text-green-500 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                    {skill.name}
                </span>
            </div>
            <span className="text-gray-600 dark:text-gray-400">
                {skill.level}%
            </span>
        </div>
        <ProgressBar progress={skill.level} />
    </div>
);

export { SkillItem };
