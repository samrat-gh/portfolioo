import { contributions } from "@/data/open-source";
import { GitBranch } from "lucide-react";
import Link from "next/link";

const OpenSourceContributions = () => {
  return (
    <div className="pt-32 space-y-6 w-full">
      <div className="font-bold text-3xl md:text-4xl text-foreground text-left mb-8">
        Open Source Contributions
      </div>
      <div className="space-y-4">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="flex flex-col justify-center border border-white/5 bg-surface/30 rounded-xl px-5 py-5 hover:border-white/10 hover:bg-surface/50 transition-all duration-300 shadow-sm">
            <div className="flex text-left items-start justify-between gap-4">
              <Link
                href={contribution.link}
                target="_blank"
                className="text-xl md:text-2xl font-semibold text-primary hover:text-primary/80 hover:underline transition-colors"
                rel="noopener noreferrer">
                {contribution.title}
              </Link>
              <div className="hidden sm:flex shrink-0 bg-purple-600/90 font-semibold px-3 py-1 text-sm w-fit rounded-full items-center shadow-lg shadow-purple-500/20">
                <GitBranch className="inline text-white mr-1.5" size={14} />
                Merged
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-4">
              <div className="flex flex-wrap gap-2">
                {contribution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                 <div className="sm:hidden flex bg-purple-600/90 font-semibold px-3 py-1 text-xs w-fit rounded-full items-center">
                  <GitBranch className="inline text-white mr-1.5" size={12} />
                  Merged
                </div>
                <p className="text-muted text-sm font-medium">
                  {new Date(contribution.mergedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    day: "2-digit",
                    month: "short",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSourceContributions;
