const projects = [
    {
      id: "project-3",
      name: "Bhatbhatey",
      description: "Vehicle Rental Platform specifically for renting bikes.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL"],
      href: "https://bhatbhatey.vercel.app",
      imageSrc: "/bhatbhatey.png",
    },
    {
      id: "project-checklist",
      name: "Checklist",
      description: "Personal task management app to organize your daily tasks efficiently.",
      techStack: ["Next.js", "TypeScript", "Convex"],
      href: "https://checklist-teal-three.vercel.app",
      imageSrc: "/checklist.png",
    },
    {
      id: "project-4",
      name: "Public Predicts",
      description: "An Event Prediction Platform for expressing opinions.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL"],
      href: "https://www.publicpredicts.com/",
      imageSrc: "/public-predicts.png",
    },
    {
      id: "project-1",
      name: "Short It",
      description: "A URL shortening service for creating concise links.",
      techStack: ["Next.js", "TypeScript", "MongoDB"],
      href: "https://short-it-theta.vercel.app/",
      imageSrc: "/shortit.png",
    },
    {
      id: "project-2",
      name: "Sarathi",
      description: "An organization supporting visually impaired students with an admin panel and landing page.",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      href: "https://saarathi-landing.vercel.app/",
      imageSrc: "/sarathi.png",
    },
  ];


export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Projects
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
          Crafted projects showcasing full-stack development and modern web technologies.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}   