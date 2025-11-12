interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  cta: string
  tech: string
}

export function HeroSection({ title, subtitle, description, cta, tech }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Imagen a la izquierda */}
        <div className="flex-shrink-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06683-9mr9ff4Sk7lLO3WRgoVpEJc7mgRMVR.jpg"
            alt="Francisco Herrera"
            className="w-50 rounded-xl object-cover border border-primary/20"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground/60">{subtitle}</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">{title}</h1>
          </div>
          <p className="text-lg text-foreground/70 text-balance max-w-xl leading-relaxed">{description}</p>

          {tech.split(",").map((item) => (
            <span
              key={item.trim()}
              className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mr-2"
            >
              {item.trim()}
            </span>
          ))}

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 rounded-lg text-foreground font-medium hover:bg-foreground hover:text-background transition duration-200"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
