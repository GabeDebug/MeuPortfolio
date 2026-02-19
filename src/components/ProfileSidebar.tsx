import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import avatarImg from "@/assets/eu.jpeg";

const ProfileSidebar = () => {
  return (
    <aside className="w-full lg:w-80 lg:sticky lg:top-8 lg:self-start space-y-6">
      <div className="bg-card rounded-lg border border-border p-6 text-center">
        <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-lg border-2 border-primary/30">
          <img src={avatarImg} alt="Avatar" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-xl font-bold font-mono text-foreground">Gabriel Almeida</h1>
        <p className="text-sm font-mono text-primary">Software Developer</p>
        <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span> Lyon, França</span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3">
  <a
    href="https://github.com/GabeDebug"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-primary hover:bg-muted"
  >
    <Github className="h-4 w-4" />
  </a>

  <a
    href="https://www.linkedin.com/in/gabrielalmeidacode/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-primary hover:bg-muted"
  >
    <Linkedin className="h-4 w-4" />
  </a>

  <a
    href="mailto:gabrielmessiasc0d3@gmail.com"
    aria-label="Email"
    className="rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-primary hover:bg-muted"
  >
    <Mail className="h-4 w-4" />
  </a>

  <a
    href="/cv-gabriel-almeida.pdf"
    target="_blank"
    aria-label="Currículo"
    className="rounded-md bg-secondary p-2 text-muted-foreground transition-colors hover:text-primary hover:bg-muted"
  >
    <FileText className="h-4 w-4" />
  </a>
</div>

      </div>

      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">About</h2>
        <p className="text-sm text-muted-foreground leading-relaxed font-mono">
          Senior Full-Stack & Blockchain Developer 6 ano de experiência 35+ libs e frameworks e Foco atual em C#
        </p>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
