import React from 'react';
import { Skill } from '../../data/skills';

const SkillItem: React.FC<{ skill: Skill; index: number; skillIndex: number }> = ({ skill, index, skillIndex }) => (
    <div
        className="scroll-fade-in bg-gray-50 dark:bg-zinc-700 rounded-[4px] p-4 transition-all hover:shadow-md hover:bg-white dark:hover:bg-zinc-600 flex items-center"
        style={{ animationDelay: `${(index * 4 + skillIndex) * 0.2}s` }}
    >
        <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-[4px]">
                <skill.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
            </span>
        </div>
    </div>
);

export { SkillItem };
