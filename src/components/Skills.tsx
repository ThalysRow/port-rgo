import { motion } from 'framer-motion';
import { Code, Server, Layers, Database, Globe, Terminal } from 'lucide-react';
import { skills } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  javascript: <img src="/img/javascript.svg" alt="JavaScript" className="w-6 h-6" />,
  typescript: <img src="/img/ts.svg" alt="TypeScript" className="w-6 h-6" />,
  java: <img src="/img/java.svg" alt="Java" className="w-6 h-6" />,
  spring: <img src="/img/spring.svg" alt="Spring Boot" className="w-6 h-6" />,
  nestjs: <img src="/img/nest.svg" alt="NestJS" className="w-6 h-6" />,
  angular: <img src="/img/Angular.svg" alt="Angular" className="w-6 h-6" />,
  react: <img src="/img/react.svg" alt="React" className="w-6 h-6" />,
  nodejs: <img src="/img/nodejs.svg" alt="Node.js" className="w-6 h-6" />,
  postgres: <img src="/img/postgres.svg" alt="PostgreSQL" className="w-6 h-6" />,
  tailwind: <img src="/img/tailwind.svg" alt="Tailwind CSS" className="w-6 h-6" />,
  figma: <img src="/img/figma.svg" alt="Figma" className="w-6 h-6" />,
  docker: <img src="/img/docker.svg" alt="Docker" className="w-6 h-6" />,
  code: <Code size={24} />,
  server: <Server size={24} />,
  layers: <Layers size={24} />,
  database: <Database size={24} />,
  terminal: <Terminal size={24} />,
  globe: <Globe size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar projetos excepcionais
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-4 md:p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-indigo-500/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 group-hover:from-indigo-500/30 group-hover:to-pink-500/30 transition-all">
                  {iconMap[skill.iconName]}
                </div>
                <span className="text-sm md:text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
              <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
                />
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-slate-500">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}