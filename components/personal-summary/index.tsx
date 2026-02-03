export default function PersonalSummary() {
  return (
    <div className="space-y-8 py-12">
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          Full-Stack Engineer
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I blend technical expertise with product thinking to build applications that solve real-world problems. Beyond just writing clean code, I focus on user experience, scalability, and business impact ensuring that what we build effectively serves the people who use it.
        </p>
      </div>

      <div className="border-t border-border/50 pt-8">
        <p className="text-base text-muted-foreground leading-relaxed">
          I prioritize <span className="font-semibold text-foreground">intuitive UX</span>, <span className="font-semibold text-foreground">scalable architecture</span>, and <span className="font-semibold text-foreground">performance optimization</span> to deliver products that are efficient, maintainable, and delightful to use.
        </p>
      </div>
    </div>
  );
}
