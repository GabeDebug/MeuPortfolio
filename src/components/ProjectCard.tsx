import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techs: string[];
}

const ProjectCard = ({ title, description, features, techs }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-5 hover:border-primary/40 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary">⟨/⟩</span>
        <h3 className="font-bold text-foreground">{title}</h3>
        <a href="#" className="ml-auto text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <ul className="space-y-1 mb-3">
        {features.map((f, i) => (
          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
            <span className="mt-0.5">•</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {techs.map((tech) => (
          <span key={tech} className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-mono text-primary border border-primary/20">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
