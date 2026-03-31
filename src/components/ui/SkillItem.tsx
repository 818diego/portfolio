import React from 'react';
import { Skill } from '../../data/skills';

const SkillItem: React.FC<{ skill: Skill; index: number; skillIndex: number }> = ({ skill, index, skillIndex }) => (
    <div
        className="scroll-fade-in bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg p-2.5 transition-all duration-300 hover:border-green-500/30 flex items-center group"
        style={{ animationDelay: `${(index * 4 + skillIndex) * 0.2}s` }}
    >
        <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-white/5 group-hover:border-green-500/20 transition-colors">
                <skill.icon className="w-5 h-5 text-green-500 dark:text-green-400" />
            </div>
            <span className="text-[16px] text-gray-700 dark:text-zinc-100/90 font-medium group-hover:text-white transition-colors line-clamp-1">
                {skill.name}
            </span>
        </div>
    </div>
);

export { SkillItem };
