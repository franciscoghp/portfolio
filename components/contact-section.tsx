interface ContactSectionProps {
  title: string
  description: string
  email: string
  phone: string
  github: string
  linkedin: string
}

export function ContactSection({ title, description, email, phone, github, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">{title}</h2>
          <p className="text-lg text-foreground/70">{description}</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-foreground/60">{email}</p>
            <a
              href="mailto:francisco9mil@gmail.com"
              className="text-xl font-medium text-foreground hover:text-primary transition"
            >
              francisco9mil@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-foreground/60">{phone}</p>
            <div className="flex items-center justify-center gap-4">
              <a href="tel:+584141452293" className="text-lg font-medium text-foreground hover:text-primary transition">
                +58 414 1452293
              </a>
              <span className="text-foreground/40">•</span>
              <a
                href="https://wa.me/584141452293"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-foreground hover:text-primary transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pt-8">
          <a
            href="https://github.com/franciscoghp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-herrera-petit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-foreground transition"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.249-.129.597-.129.946v5.422h-3.554s.05-8.736 0-9.646h3.554v1.348c.429-.619 1.196-1.5 2.905-1.5 2.122 0 3.714 1.383 3.714 4.357v5.441zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.959-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.959 1.715zm1.582 11.597H3.715V9.561h3.204v10.891zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
