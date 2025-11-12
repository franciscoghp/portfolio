interface FooterProps {
  copyright: string
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-foreground/60">{copyright}</p>
      </div>
    </footer>
  )
}
