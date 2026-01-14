"use client";
import { Github, Mail, FileText, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
// import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export const AnimatedSocialLinks = () => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  type IconComponent = React.ComponentType<{ className?: string }>;
  const links: {
    icon: IconComponent;
    href: string;
    label: string;
    color: string;
  }[] = [
    {
      icon: Github as IconComponent,
      href: "https://github.com/samrat-gh",
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: Linkedin as IconComponent,
      href: "https://www.linkedin.com/in/samrat-gh/",
      label: "LinkedIn",
      color: "hover:bg-sky-900",
    },
    {
      icon: FaXTwitter as IconComponent,
      href: "https://twitter.com/samrat0gh",
      label: "Twitter",
      color: "hover:bg-blue-900",
    },
    {
      icon: Mail as IconComponent,
      href: "mailto:samratghimire32@gmail.com",
      label: "Email",
      color: "hover:bg-green-600",
    },
    {
      icon: FileText as IconComponent,
      href: "/samrat_ghimire_fe.pdf",
      label: "Resume",
      color: "hover:bg-green-700",
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900/80 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700 relative">
          <div className="flex items-center gap-4 relative z-10">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      target="_blank"
                      // rel="noopener noreferrer"
                      // download={link.label === "Resume" ? "" : undefined}
                      aria-label={link.label}
                      className={`p-2 rounded-full bg-gray-800/50 ${link.color} transition-all duration-300 hover:scale-110 group relative z-20`}>
                      <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    align="center"
                    className="px-2 py-1 text-xs bg-white/95 text-neutral-800 font-semibold">
                    {link.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
