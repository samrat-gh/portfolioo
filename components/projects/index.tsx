import Link from 'next/link';
import { ExternalLink, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
    const featuredProjects = projects.filter((project) => project.isFeatured);
    return (
        <section className="py-20" id="projects">
            <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                    Projects
                </h2>
            </div>

            <div className="space-y-6">
                {featuredProjects.map((project) => (
                    <article
                        key={project.id}
                        className="group flex flex-col md:flex-row gap-6 bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary"
                    >
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full md:w-72 aspect-video flex-shrink-0 overflow-hidden rounded-xl border border-white/10 focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label={`Visit ${project.name}`}
                        >
                            <Image
                                src={project.imageSrc || '/placeholder.svg'}
                                alt={`${project.name} screenshot`}
                                width={600}
                                height={338}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6 justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/20 hover:bg-primary/20 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Link */}
                            <Link
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center w-fit text-primary font-medium hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -mx-1 transition-colors group/link mt-4"
                            >
                                Visit
                                <ExternalLink
                                    size={14}
                                    className="ml-1.5 transition-transform group-hover/link:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            <div className="text-center my-2 hover:cursor-pointer">
                <Link href="/projects" className="text-cyan-500 text-sm hover:underline">
                    View All Projects <MoveRight className="inline ml-1" />
                </Link>
            </div>
        </section>
    );
}
