import Link from "next/link";
import Image from "next/image";
import { TitleWithLines } from "@/ui/title-with-lines";

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
      year: "June 2023 - Oct 2025",
    },
  ];

  return (
    <section className="space-y-6 pt-32" id="experience">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        <p className="text-muted text-lg leading-relaxed max-w-2xl">
          Here is where I have personally worked throughout my 2 years of
          professional experience.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-4 space-y-12 py-4">
        {experience.map((exp) => (
          <div key={exp.id} className="relative pl-8 pb-4 group">
            {/* Timeline dot */}
            <span className="absolute z-10 left-[-9px] top-6 w-5 h-5 bg-background border-4 border-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
            
            <div className="space-y-6 p-6 rounded-2xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    <Image
                      src="/ck-logo.png"
                      alt="Cashkr"
                      width={48}
                      height={48}
                      className="size-12 border border-white/10 p-1 rounded-full relative z-10 bg-surface object-contain"
                    />
                  </div>
                   <TitleWithLines title={exp.name} className="!text-primary font-bold text-xl md:text-2xl" />
                </div>
                <span className="text-muted text-sm font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                  {exp.year}
                </span>
              </div>
              
              <div className="flex flex-col gap-6 md:flex-row">
                <Link
                  href={exp.href}
                  target="_blank"
                  className="block md:w-5/12 group-inner">
                  <div className="border border-white/10 rounded-xl overflow-hidden shadow-lg transition-transform group-hover/inner:translate-y-[-2px]">
                    <Image
                      src={exp.imageSrc}
                      alt={exp.name}
                      width={500}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>
                
                <div className="flex flex-col gap-6 flex-1">
                  <p className="text-muted leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                       {exp.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-blue-200 border border-white/5">
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
