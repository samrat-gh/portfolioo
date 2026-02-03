import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            id: 'project-3',
            name: 'Bhatbhatey',
            description: 'Vehicle Rental Platform specifically for renting bikes.',
            techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
            href: 'https://bhatbhatey.vercel.app',
            imageSrc: '/bhatbhatey.png',
        },
        {
            id: 'project-checklist',
            name: 'Checklist',
            description: 'Personal task management app to organize your daily tasks efficiently.',
            techStack: ['Next.js', 'TypeScript', 'Convex'],
            href: 'https://checklist-teal-three.vercel.app',
            imageSrc: '/checklist.png',
        },
        {
            id: 'project-4',
            name: 'Public Predicts',
            description: 'An Event Prediction Platform for expressing opinions.',
            techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
            href: 'https://www.publicpredicts.com/',
            imageSrc: '/public-predicts.png',
        },
        {
            id: 'project-1',
            name: 'Short It',
            description: 'A URL shortening service for creating concise links.',
            techStack: ['Next.js', 'TypeScript', 'MongoDB'],
            href: 'https://short-it-theta.vercel.app/',
            imageSrc: '/shortit.png',
        },
        {
            id: 'project-2',
            name: 'Sarathi',
            description:
                'An organization supporting visually impaired students with an admin panel and landing page.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind'],
            href: 'https://saarathi-landing.vercel.app/',
            imageSrc: '/sarathi.png',
        },
    ];

    return (
        <section className="py-20" id="projects">
            <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                    Projects
                </h2>
            </div>

            <div className="space-y-6">
                {projects.map((project) => (
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
        </section>
    );
}
