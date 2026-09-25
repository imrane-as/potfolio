import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const skills = [
  { label: "OpenShift / Kubernetes", icon: Container },
  { label: "GitOps / Argo CD", icon: GitBranch },
  { label: "Terraform / Ansible", icon: Workflow },
  { label: "CI/CD & Automation", icon: Terminal },
  { label: "Vault / Secrets", icon: ShieldCheck },
  { label: "Cloud & Linux", icon: Cloud },
  { label: "API Management", icon: Code2 },
  { label: "Architecture & Integration", icon: Server },
];

const projects = [
  {
    title: "OpenShift GitOps Platform",
    tag: "Platform Engineering",
    description:
      "Industrialisation d’une plateforme OpenShift avec Argo CD, GitOps, secrets, ingress et configuration d’environnements.",
    stack: ["OpenShift", "Argo CD", "GitLab", "Vault"],
  },
  {
    title: "RHEL VM Automation",
    tag: "Infrastructure as Code",
    description:
      "Création d’images RHEL automatisées avec Packer et provisioning Terraform pour des environnements reproductibles.",
    stack: ["RHEL", "Packer", "Terraform", "Ansible"],
  },
  {
    title: "Enterprise Integration Flows",
    tag: "Integration / DevOps",
    description:
      "Conception et troubleshooting de flux sécurisés entre applications bancaires, API gateways, MFT et systèmes partenaires.",
    stack: ["mTLS", "API Manager", "GoAnywhere", "Datapower"],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400/30">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight">
            IMRANE<span className="text-cyan-400">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">À propos</a>
            <a href="#skills" className="transition hover:text-white">Compétences</a>
            <a href="#projects" className="transition hover:text-white">Projets</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Disponible
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,.10),transparent_35%)]" />
          <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-[1.3fr_.7fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)]" />
                DevOps Engineer · Luxembourg
              </div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
                Cloud · Kubernetes · Automation
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Je construis des plateformes{" "}
                <span className="text-cyan-300">fiables et automatisées.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Je m’appelle Imrane Asri. Je travaille sur des environnements
                DevOps, Kubernetes/OpenShift, GitOps, sécurité et intégration
                dans des contextes critiques.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">
                  Voir mes projets <ArrowDown size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Me contacter <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glow">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">focus actuel</span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  building
                </span>
              </div>
              <div className="space-y-4">
                {["OpenShift", "Argo CD / GitOps", "Terraform", "Vault & Security"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/70 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-slate-500">0{index + 1}</span>
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                    <span className="text-xs text-slate-500">active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">01 · À propos</p>
              <h2 className="mt-3 text-3xl font-semibold">Transformer les problèmes infra en systèmes reproductibles.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-400">
              <p>
                Mon parcours m’a amené à travailler à l’intersection de l’infrastructure,
                du développement et de l’intégration. J’aime comprendre le problème
                jusqu’à la couche réseau, sécurité ou orchestration.
              </p>
              <p>
                Mon objectif est de construire des plateformes simples à opérer :
                automatisées, observables, sécurisées et documentées.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">02 · Compétences</p>
            <h2 className="mt-3 text-3xl font-semibold">Une stack orientée plateforme.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-cyan-300/20">
                  <Icon className="mb-8 text-cyan-300" size={22} />
                  <p className="text-sm font-medium text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">03 · Projets</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-semibold">Des projets qui racontent la façon dont je travaille.</h2>
            <a className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white" href="https://github.com/imrane-as" target="_blank" rel="noreferrer">
              Voir GitHub <Github size={16} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group rounded-3xl border border-white/8 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70">{project.tag}</p>
                <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.04] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">04 · Expérience</p>
            <div className="mt-8 grid gap-10 md:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="text-sm text-slate-500">2025 — aujourd’hui</p>
                <h3 className="mt-2 text-2xl font-semibold">DevOps / Technical Analyst</h3>
                <p className="mt-2 text-slate-400">Luxembourg</p>
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-400">
                <p>Coordination technique sur des flux d’intégration et des environnements Kubernetes/OpenShift.</p>
                <p>Travail autour de l’API management, mTLS, certificats, firewalling, GitOps, CI/CD et troubleshooting.</p>
                <p>Documentation technique et accompagnement des phases SIT, UAT, PREPROD et PROD.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/70">05 · Contact</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
              Construisons quelque chose de solide.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="mailto:imrane.asrir@its4u.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                <Mail size={16} /> Email
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://github.com/imrane-as" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Imrane Asri</span>
          <span>Built with React · TypeScript · Tailwind</span>
        </div>
      </footer>
    </div>
  );
}

export default App;