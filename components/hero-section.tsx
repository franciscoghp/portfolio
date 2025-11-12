interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  cta: string
}

export function HeroSection({ title, subtitle, description, cta }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC06683-9mr9ff4Sk7lLO3WRgoVpEJc7mgRMVR.jpg"
            alt="Francisco Herrera"
            className="w-32 h-32 rounded-full object-cover border-2 border-primary/20"
          />
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground/60">{subtitle}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">{title}</h1>
        </div>
        <p className="text-lg text-foreground/70 text-balance max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground/20 rounded-lg text-foreground font-medium hover:bg-foreground hover:text-background transition duration-200"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  )
}
