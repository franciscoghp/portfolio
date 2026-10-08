import { TechBadge } from "@/components/tech-badge"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  cta: string
  tech: string
  cvLabel: string
  cvHref: string
  cvFilename: string
}

export function HeroSection({ title, subtitle, description, cta, tech, cvLabel, cvHref, cvFilename }: HeroSectionProps) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06683-9mr9ff4Sk7lLO3WRgoVpEJc7mgRMVR.jpg"
            alt="Francisco Herrera"
            style={{ width: "clamp(180px, 60vw, 240px)", height: "clamp(240px, 80vw, 320px)" }}
            className="rounded-2xl object-cover object-top border-2 border-primary/30 shadow-lg"
          />
        </div>

        <div className="text-center sm:text-left space-y-4">
          <div className="space-y-1">
            <p className="text-base font-medium text-primary">👨‍💻 {subtitle}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">{title}</h1>
          </div>
          <p className="text-base sm:text-lg text-foreground/70 text-balance max-w-xl leading-relaxed">{description}</p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {tech.split(",").map((item) => (
              <TechBadge key={item.trim()} name={item} className="px-2.5 py-0.5 text-xs" />
            ))}
          </div>

          <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-foreground/20 rounded-lg text-foreground font-medium hover:bg-foreground hover:text-background transition duration-200"
            >
              🚀 {cta}
            </a>
            <a
              href={cvHref}
              download={cvFilename}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition duration-200"
            >
              📄 {cvLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
