interface AboutSectionProps {
  title: string
  description: string
}

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">{title}</h2>
        <div className="prose prose-invert max-w-none">
          {description.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="text-lg text-foreground/80 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
