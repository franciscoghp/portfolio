import { TechBadge } from "@/components/tech-badge"

interface Project {
  name: string
  description: string
  tech: string
  href?: string
  image?: string
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
}

// Miniatura generada automáticamente a partir de la URL del proyecto
function thumbnail(href: string) {
  return `https://image.thum.io/get/width/700/crop/450/noanimate/${href}`
}

// Tarjeta clicable si tiene enlace; si no (proyecto privado), tarjeta estática
function Card({ href, className, children }: { href?: string; className: string; children: React.ReactNode }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  )
}

export function ProjectsSection({ title, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">🚀 {title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              href={project.href}
              className="group border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 hover:shadow-lg transition duration-200 flex flex-col"
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-muted to-accent/20 flex items-center justify-center text-5xl">
                <span aria-hidden="true">🖥️</span>
                {(project.image ?? (project.href ? thumbnail(project.href) : "")) && (
                <img
                  src={project.image ?? thumbnail(project.href!)}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                )}
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition">
                  {project.name}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.split(", ").map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
