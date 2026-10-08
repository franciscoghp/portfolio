const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

// Nombre de la tecnología (minúsculas) -> ruta del icono en devicon
const icons: Record<string, string> = {
  react: "react/react-original.svg",
  "react native": "react/react-original.svg",
  reactjs: "react/react-original.svg",
  "next.js": "nextjs/nextjs-original.svg",
  nextjs: "nextjs/nextjs-original.svg",
  angular: "angularjs/angularjs-original.svg",
  "node.js": "nodejs/nodejs-original.svg",
  nodejs: "nodejs/nodejs-original.svg",
  "nest.js": "nestjs/nestjs-original.svg",
  nestjs: "nestjs/nestjs-original.svg",
  express: "express/express-original.svg",
  typescript: "typescript/typescript-original.svg",
  aws: "amazonwebservices/amazonwebservices-plain-wordmark.svg",
  serverless: "serverless/serverless-original.svg",
  postgresql: "postgresql/postgresql-original.svg",
  postgress: "postgresql/postgresql-original.svg",
  firebase: "firebase/firebase-original.svg",
  mysql: "mysql/mysql-original.svg",
  mongodb: "mongodb/mongodb-original.svg",
  graphql: "graphql/graphql-plain.svg",
  ionic: "ionic/ionic-original.svg",
  vercel: "vercel/vercel-original.svg",
  kafka: "apachekafka/apachekafka-original.svg",
  docker: "docker/docker-original.svg",
  "socket.io": "socketio/socketio-original.svg",
  "vue.js": "vuejs/vuejs-original.svg",
  "tailwind css": "tailwindcss/tailwindcss-original.svg",
  rxjs: "rxjs/rxjs-original.svg",
  apollo: "apollographql/apollographql-original.svg",
  github: "github/github-original.svg",
}

// Tecnologías sin icono propio: un emoji de respaldo
const emojis: Record<string, string> = {
  lambda: "⚡",
  "aws lambda": "⚡",
  "rest api": "🔌",
  "full stack": "🧩",
  "various technologies": "🛠️",
  "varias tecnologías": "🛠️",
  microservices: "🧱",
  microservicios: "🧱",
  s3: "🪣",
  leaflet: "🍃",
  "react router": "🧭",
}

export function TechBadge({ name, className = "" }: { name: string; className?: string }) {
  const key = name.trim().toLowerCase()
  const icon = icons[key]
  const emoji = emojis[key]

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border text-foreground/80 text-sm font-medium ${className}`}
    >
      {icon ? (
        <img src={`${DEVICON}/${icon}`} alt="" className="h-4 w-4" loading="lazy" />
      ) : (
        <span aria-hidden="true">{emoji ?? "✨"}</span>
      )}
      {name.trim()}
    </span>
  )
}
