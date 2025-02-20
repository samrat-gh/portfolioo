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
      year: "June 2023 - Current",
    },
  ];

  return (
    <section className="space-y-6 pt-28" id="experience">
      <h2 className="text-3xl font-bold text-slate-200">Experience</h2>
      <p className="text-gray-300 text-lg">
        Here is where I have personally worked throughout my 2 years of
        professional experience.
      </p>

      <div className="relative border-l border-gray-700 ml-4 space-y-8">
        {experience.map((exp) => (
          <div key={exp.id} className="relative pl-2 sm:pl-8 pb-8 group">
            <span className="absolute z-0 left-[-8px] top-1 w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-110 transition-transform" />
            <div className="space-y-5 p-2 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Image
                    src="/ck-logo.png"
                    alt="Cashkr"
                    width={50}
                    height={50}
                    className="size-[35px] sm:size-[50x] border border-gray-200/50 p-1 rounded-full"
                  />
                  <TitleWithLines title={exp.name} className="!text-cyan-400" />
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {exp.year}
                </span>
              </div>
              <div className="flex flex-col gap-2  md:flex-row sm:gap-6">
                <Link
                  href={exp.href}
                  target="_blank"
                  className="block md:w-1/2 hover:opacity-80 transition-all">
                  <div className="border border-gray-600 rounded-md overflow-hidden">
                    <Image
                      src={exp.imageSrc}
                      alt={exp.name}
                      width={500}
                      height={250}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </Link>
                <div className="flex flex-col space-y-4 items-center justify-center flex-1">
                  <p className="text-gray-300 text-sm tracking-wide h-full">
                    {exp.description}
                  </p>

                  {/* {exp.href && (
                    <Link
                      href={exp.href}
                      target="_blank"
                      className="inline-flex items-center text-cyan-400 hover:underline">
                      Visit Project <ExternalLink className="ml-1" size={16} />
                    </Link>
                  )} */}
                </div>
              </div>
              <div className="flex items-center space-x-2 border-b border-gray-600 pb-2 mt-7 pt-7">
                <span className="font-semibold text-white">Tech Stack:</span>
                <span className="text-gray-300">
                  {exp.techStack.join(", ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
