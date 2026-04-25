import { motion } from 'framer-motion';
import { Code, Server, Layers, Database, Globe, Terminal } from 'lucide-react';
import { skills } from '../data/portfolio';

const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M8.851 18.65s-.917.534 2.416 2.969c2.762 2.266 2.523 2.319 2.523 2.319s1.469-.734 2.422-2.601c.652-1.275.826-2.034.826-2.034s-2.327-3.463-5.664-4.795c-4.523-1.797-6.836-.391-6.836-.391s-.457 2.176 1.581 3.969c2.266 1.995 3.536 2.652 3.536 2.652l-.804-3.088zM9.205 14.865s-1.313-.938-3.076-.938c-2.001 0-2.272.782-2.272.782.391 2.412 4.535 4.837 4.535 4.837 1.488-.488 2.392-1.425 2.392-1.425l-1.579-3.256zm2.423-10.42s3.174 1.402 3.232 5.558c.047 3.488-.938 6.074-3.232 6.074-2.57 0-3.232-2.187-3.232-2.187l1.579 3.802s1.048 2.412 4.395 2.565c4.503.186 5.595-2.412 5.595-5.595 0-4.535-4.163-7.217-8.737-10.217z"/>
  </svg>
);

const SpringIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.657 24H9.343L5.5 9.6l1.543.857 2.3 1.15 2.5 1.25 2.55 1.275L16.5 12l.657.343v11.657zM20.557 12.85l1.543.857-3.443 9.243H12.443l.657-.343V12l.657-.343 1.543-6.414L18.3.157 20.557.85l-.657 4.157L20.557 12.85zM12.443 9.6L8.6 24H5.5L12.443 0l3.8 14.4h-3.8v-.8z"/>
  </svg>
);

const NestIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2.5c-3.5 1.5-5.5 4-6.5 7-.5 1.5-.5 3-.5 4.5 0 2 1 4 2.5 5.5 1.5-1 3-1.5 4.5-1.5s3 .5 4.5 1.5c1.5-1.5 2.5-3.5 2.5-5.5 0-1.5 0-3-.5-4.5-1-3-3-5.5-6.5-7z"/>
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 1.85l-9.54 2.15 9.26 2.08 9.26-2.08L12 1.15zm-.32 3.64h10.65l-4.98 11.21L12 22.29l-.32-7.3-5.01-11.2z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 2c2.2 0 3.8.4 5 1.2-1.8 1.4-3 3.2-3.4 5.6-.6-.2-1.2-.2-1.6-.2-2.2 0-4.4 1.8-6.4 6-2-2.4-3-4.4-3.2-6 0 0-.2 2.2 1.6 5.4 1.8 2.8 4.8 4.8 8 4.8 2 0 3.8-.6 5.2-1.8-1.6 1.2-3.4 1.8-5.4 1.8-4.4 0-7.4-3.2-9.2-6.8 2.6-.4 5.2.2 7.2 1.8l.2-1.4c-1.6-1.2-2.8-2.8-3.2-4.6 0-.2-.2-.4-.2-.6 1.2 0 2.4.2 3.4.6.8-2.4 2.4-3.8 5-3.8z"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 8.108h3.117c1.665 0 3.019-1.354 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117v6.038zm-2.961 3.058H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v6.038c0 1.665-1.354 3.019-3.019 3.019zm2.961-5.83v8.918H8.148c-3.949 0-7.158-3.209-7.158-7.158s3.209-7.158 7.158-7.158h1.429v5.398h-1.429c-1.665 0-3.019 1.354-3.019 3.019s1.354 3.019 3.019 3.019h2.961zm1.626-5.346H8.148c-2.9 0-5.258 2.358-5.258 5.258s2.358 5.258 5.258 5.258h4.588v-2.769c0-1.665 1.354-3.019 3.019-3.019s3.019 1.354 3.019 3.019v4.588h-1.49c-.276-3.209-2.985-5.736-6.176-5.736z"/>
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={24} />,
  server: <Server size={24} />,
  layers: <Layers size={24} />,
  database: <Database size={24} />,
  terminal: <Terminal size={24} />,
  globe: <Globe size={24} />,
  java: <JavaIcon />,
  spring: <SpringIcon />,
  nestjs: <NestIcon />,
  angular: <AngularIcon />,
  tailwind: <TailwindIcon />,
  figma: <FigmaIcon />,
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