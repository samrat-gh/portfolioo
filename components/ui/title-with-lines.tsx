export const TitleWithLines = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="flex-1 h-[1px] bg-gray-500" />
      <h3 className={`text-xl font-bold text-center ${className}`}>{title}</h3>
      <div className="flex-1 h-[1px] bg-gray-500" />
    </div>
  );
};
