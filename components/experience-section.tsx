import { TechBadge } from "@/components/tech-badge"

interface Job {
  company: string
  tech: string
  location: string
  role: string
  period: string
  description: string
}

interface ExperienceSectionProps {
  title: string
  jobs: Job[]
}

export function ExperienceSection({ title, jobs }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16">💼 {title}</h2>
        <ol className="relative border-l border-border ml-2 space-y-10">
          {jobs.map((job, idx) => (
            <li key={idx} className="pl-8 relative">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <span className="text-sm font-medium text-foreground/60">🗓️ {job.period}</span>
                </div>
                <p className="text-foreground/80 font-medium mt-1">
                  🏢 {job.company} <span className="text-foreground/50">· 📍 {job.location}</span>
                </p>
                <p className="text-foreground/70 leading-relaxed mt-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tech.split(", ").map((t) => (
                    <TechBadge key={t} name={t} className="px-2.5 py-0.5 text-xs" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
