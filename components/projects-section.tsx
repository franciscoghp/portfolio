interface Project {
  name: string
  description: string
  tech: string
  href: string
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
}

export function ProjectsSection({ title, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg p-8 bg-card hover:border-foreground/50 hover:shadow-lg transition duration-200"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition">
                  {project.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
