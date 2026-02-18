import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-24 md:py-32">
            <div className="mb-16 space-y-6 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
                    All Projects
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                    A comprehensive list of my work, ranging from full-stack applications to
                    open-source contributions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block w-full aspect-video overflow-hidden bg-muted"
                        >
                            <Image
                                src={project.imageSrc}
                                alt={`${project.name} screenshot`}
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>

                        <div className="flex flex-col flex-1 p-6 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h2>
                                    <Link
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-[10px] font-medium uppercase tracking-wider rounded border border-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
