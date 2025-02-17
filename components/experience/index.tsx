import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Experiences() {
  const experience = [
    {
      id: "exp-1",
      name: "Cashkr",
      description:
        "Responsible for building the front-end of the application using Next.js, Tailwind CSS, and TypeScript. Also, I have worked on the back-end using Express and SQL.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Express", "SQL"],
      href: "https://cashkr.com/",
      imageSrc: "/cashkr.png",
    },
  ];

  return (
    <section className="space-y-6" id="experiences">
      <h2 className="text-3xl font-bold text-slate-200">Experience</h2>
      <p className="text-gray-300 text-lg">
        Here is where I have personally worked throughout my 2 years of
        professional experience .
      </p>

      <div className="space-y-8">
        {experience.map((project) => (
          <div
            key={project.id}
            className="space-y-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <TitleWithLines title={project.name} className="!text-cyan-400" />
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href={project.href}
                target="_blank"
                className="block md:w-1/2 hover:opacity-80 transition-all">
                <div className="border border-gray-600 rounded-md overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.name}
                    width={500}
                    height={250}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </Link>
              <div className="flex flex-col space-y-4 flex-1">
                <p className="text-gray-300">{project.description}</p>
                <div className="flex items-center space-x-2 border-b border-gray-600 pb-2">
                  <span className="font-semibold text-white">Tech Stack:</span>
                  <span className="text-gray-300">
                    {project.techStack.join(", ")}
                  </span>
                </div>
                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="inline-flex items-center text-cyan-400 hover:underline">
                    Visit Project <ExternalLink className="ml-1" size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
