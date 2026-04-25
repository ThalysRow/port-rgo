import { motion } from 'framer-motion';
import { MapPin, Users, FolderGit } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-slate-800 rounded-3xl overflow-hidden">
                <img 
                  src="/img/Eu.jpeg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-pink-900/30" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Sou um desenvolvedor Full Stack com paixão por criar soluções inovadoras e experiências digitais memoráveis. 
              Com mais de <span className="text-indigo-400 font-semibold">{personalInfo.stats.experience} anos</span> de experiência, 
              trabalho com as tecnologias mais modernas do mercado.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Minha abordagem combina criatividade técnica com atenção aos detalhes, sempre buscando entregar 
              projetos que superam expectativas. Do frontend ao backend, da concepção ao deploy, cada linha 
              de código é escrita com propósito.
            </p>
            
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <FolderGit className="w-5 h-5 text-indigo-400" />
                  <span className="text-slate-400 text-sm">Projetos</span>
                </div>
                <p className="text-3xl font-bold gradient-text">{personalInfo.stats.projects}+</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span className="text-slate-400 text-sm">Clientes</span>
                </div>
                <p className="text-3xl font-bold gradient-text">{personalInfo.stats.clients}+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}