type SkillBadgeProps = {
  icon: string;
  name: string;
};

const SkillBadge = ({ icon, name }: SkillBadgeProps) => {
  return (
    <span className="flex items-center gap-2 rounded-full bg-card border border-border px-3 py-1 text-sm text-foreground">
      <i className={icon}></i>
      {name}
    </span>
  );
};

export default SkillBadge;
