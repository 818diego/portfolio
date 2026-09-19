import React from "react";
import { Skill } from "@/data/skills";

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div
    data-skill-item
    className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-2 hover:border-green-500/30 flex items-center group"
  >
    <div className="flex items-center gap-2">
      <div className="p-1 bg-zinc-800/50 rounded-lg border border-white/5 group-hover:border-green-500/20">
        <skill.icon className="w-4 h-4 text-green-400" />
      </div>
      <span className="text-sm text-zinc-100/90 font-medium group-hover:text-white whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  </div>
);

export { SkillItem };
