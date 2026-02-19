import { GraduationCap, Award } from "lucide-react";
import ProjectCard from "./ProjectCard";
import SkillBadge from "./SkillBadge";
import skill from "@/components/skill";



const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e painel administrativo.",
    features: ["Sistema de pagamentos integrado", "Painel administrativo", "Gestão de estoque em tempo real", "API RESTful"],
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Task Manager App",
    description: "Aplicação de gerenciamento de tarefas com colaboração em tempo real e integrações com ferramentas populares.",
    features: ["Colaboração em tempo real", "Drag & drop kanban", "Notificações push"],
    techs: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
  },
];

const skills = [
  { icon: "devicon-html5-plain colored", name: "HTML" },
  { icon: "devicon-css3-plain colored", name: "CSS" },
  { icon: "devicon-javascript-plain colored", name: "JavaScript" },
  { icon: "devicon-typescript-plain colored", name: "TypeScript" },
  { icon: "devicon-python-plain colored", name: "Python" },
  { icon: "devicon-react-original colored", name: "React" },
  { icon: "devicon-nodejs-plain colored", name: "Node.js" },
  { icon: "devicon-c-plain colored", name: "C" },
  { icon: "devicon-cplusplus-plain colored", name: "C++" },
  { icon: "devicon-csharp-plain colored", name: "C#" },
  { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
  { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  { icon: "devicon-git-plain colored", name: "Git" },
  { icon: "devicon-github-original colored", name: "GitHub" },
  { icon: "devicon-vitejs-plain colored", name: "Vite" },
];


const certificates = [
  { title: "Full-Stack Developer", org: "Udemy", year: "2022" },
];

const MainContent = () => {
  return (
    <main className="flex-1 space-y-8">
      {/* Projects */}
      <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-xl font-bold text-foreground mb-4">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-xl font-bold text-foreground mb-4">Certificates</h2>
        <div className="space-y-3">
          {certificates.map((c) => (
            <div key={c.title} className="flex items-center justify-between rounded-lg bg-card border border-border px-4 py-3">
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.org}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{c.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-xl font-bold text-foreground mb-4">Education</h2>
        <div className="flex items-center justify-between rounded-lg bg-card border border-border px-4 py-3">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Paris-Saclay University</p>
              <p className="text-xs text-muted-foreground">Engenharia de Software</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2026 - 2030 </span>
        </div>
      </section>

      {/* Skills */}
      <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-xl font-bold text-foreground mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <SkillBadge key={s.name} {...s} />
          ))}
          
        </div>
      </section>
    </main>
  );
};

export default MainContent;
