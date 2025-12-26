import { contributions } from "@/data/open-source";
import { GitBranch } from "lucide-react";
import Link from "next/link";

const OpenSourceContributions = () => {
  return (
    <div className="pt-28 space-y-3 w-full">
      <div className="font-bold text-3xl text-slate-200 text-left mb-6">
        My Open Source Contribution
      </div>
      <div className="space-y-4">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="flex flex-col justify-center border-b-[0.25px] border-b-slate-200/50 px-3 py-2">
            <div className="flex text-left items-center">
              <Link
                href={contribution.link}
                target="_blank"
                className="text-xl text-blue-500 hover:underline"
                rel="noopener noreferrer">
                {contribution.title}
              </Link>
              <div className="bg-[#8957E5] font-semibold px-3 py-1 text-sm w-fit rounded-3xl my-auto ml-auto">
                <GitBranch className="inline text-white mr-2" size={16} />
                Merged
              </div>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex gap-2">
                {contribution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-400 border border-cyan-400/20">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-slate-200">
                {new Date(contribution.mergedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  day: "2-digit",
                  month: "short",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSourceContributions;
