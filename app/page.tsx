import Experiences from "@/components/experience";
import Navbar from "@/components/nav";
import Projects from "@/components/projects";
import SocialFooter from "@/components/social-footer/page";
import MyStack from "@/components/stack-description";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samrat Ghimire",
  url: "https://samratghimire.tech/",
  image: "https://samratghimire.tech/profile.webp",
  jobTitle: "Frontend Engineer",
  description:
    "Frontend Engineer specializing in Next.js, TypeScript, and UI/UX design. Passionate about building scalable and high-performance web applications.",
  sameAs: [
    "https://github.com/samrat-gh",
    "https://linkedin.com/in/samrat-gh",
    "https://twitter.com/samrat0gh",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Cashkr",
    url: "https://cashkr.com",
  },
  // alumniOf: {
  //   "@type": "CollegeOrUniversity",
  //   name: "Your University",
  //   url: "https://youruniversity.com",
  // },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "React",
    "UI/UX",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend Engineer",
  },
};

export default function Home() {
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="container mx-auto max-w-3xl py-4 px-7 md:px-12 flex flex-col space-y-28 justify-between items-center mt-10">
        <MyStack />
        <Projects />
        <Experiences />
        <SocialFooter />
      </div>
    </div>
  );
}
