export const TitleWithLines = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="w-8 md:w-16 h-[1px] bg-primary/30" />
      <h3 className={`text-xl font-bold text-center ${className}`}>{title}</h3>
      <div className="flex-1 h-[1px] bg-primary/30" />
    </div>
  );
};
