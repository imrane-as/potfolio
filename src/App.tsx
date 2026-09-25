import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Container,
  Database,
  Download,
  Github,
  Globe2,
  KeyRound,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const experiences = [
  {
    period: "03.2026 — now",
    company: "BIL Luxembourg",
    role: "DevOps Engineer / API Management",
    context: "Banking · Core Banking migration to Finacle",
    points: [
      "Coordination of inter-application flows and technical specifications.",
      "Security, network and API Management coordination across SIT, UAT, PREPROD and PROD.",
      "Incident resolution, technical troubleshooting and cross-functional delivery.",
    ],
    stack: ["API Manager", "Swagger/OpenAPI", "TLS/mTLS", "OAuth2", "Jira"],
  },
  {
    period: "04.2025 — 02.2026",
    company: "POST Luxembourg",
    role: "Project Manager / Application Integration",
    context: "Banking · Cloud-native delivery",
    points: [
      "Deployment, monitoring and automation on Azure, AKS and OpenShift 4.",
      "CI/CD design with GitLab and Argo CD, plus Helm and Kubernetes templates.",
      "Production OpenShift support, project governance and technical risk follow-up.",
    ],
    stack: ["Azure", "AKS", "OpenShift 4", "Kubernetes", "Helm", "Argo CD"],
  },
  {
    period: "03.2025 — now",
    company: "ITS4U Group",
    role: "DevOps Engineer / API Management",
    context: "Cloud computing · Digital transformation",
    points: [
      "Technical leadership around CI/CD and Kubernetes environments.",
      "Infrastructure as Code and deployment automation.",
      "Coordination between development and cloud teams with a strong reliability focus.",
    ],
    stack: ["Azure", "Kubernetes", "Docker", "Azure DevOps"],
  },
  {
    period: "01.2024 — 06.2024",
    company: "Capgemini",
    role: "DevOps Engineer",
    context: "Digital services",
    points: [
      "Development of a centralized web application for coal contract management.",
      "SQL Server management and coordination with business users.",
    ],
    stack: [".NET", "Entity Framework", "SQL Server"],
  },
];

const capabilities = [
  { icon: Container, label: "Kubernetes", detail: "OpenShift · AKS · Helm" },
  { icon: Network, label: "Integration", detail: "API · Middleware · Flows" },
  { icon: ShieldCheck, label: "Security", detail: "TLS · mTLS · OAuth2" },
  { icon: Terminal, label: "Automation", detail: "Bash · CI/CD · IaC" },
  { icon: Cloud, label: "Cloud", detail: "Azure · AWS" },
  { icon: Layers3, label: "API Management", detail: "API Connect · DataPower" },
];

const projects = [
  {
    number: "01",
    title: "API Management",
    eyebrow: "PLATFORM MODERNIZATION",
    text: "Migration and modernization of API Management on IBM API Connect v12 running on OpenShift.",
    tags: ["API Connect v12", "OpenShift", "DataPower", "mTLS"],
  },
  {
    number: "02",
    title: "Cloud-native delivery",
    eyebrow: "DELIVERY ENGINEERING",
    text: "Deployment pipelines and cloud-native operations across Azure, AKS and OpenShift, with GitLab, Argo CD and Helm.",
    tags: ["Azure", "AKS", "Argo CD", "Helm"],
  },
  {
    number: "03",
    title: "Secure integration",
    eyebrow: "BANKING INTEGRATION",
    text: "Technical coordination of application flows, security constraints and production readiness for banking transformation programs.",
    tags: ["OAuth2", "TLS/mTLS", "Swagger", "Jira"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />

      <div className="noise" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand" aria-label="Imrane Asri home">
          IA<span>/</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>Story</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />

          <div className="hero-copy">
            <div className="eyebrow reveal" data-reveal>
              <span className="status-dot" /> DEVOPS ENGINEER · LUXEMBOURG
            </div>

            <p className="hero-kicker reveal delay-1" data-reveal>
              CLOUD / PLATFORM / INTEGRATION
            </p>

            <h1 className="hero-title reveal delay-2" data-reveal>
              IMRANE
              <span>ASRIR</span>
            </h1>

            <p className="hero-intro reveal delay-3" data-reveal>
              Je transforme des environnements complexes en plateformes
              <strong> déployables, sécurisées et fiables.</strong>
            </p>

            <div className="hero-actions reveal delay-4" data-reveal>
              <a href="#work" className="button button-primary">
                Explorer mon travail <ArrowDownRight size={18} />
              </a>
              <a href="mailto:imr.asrir@gmail.com" className="button button-ghost">
                Me contacter <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="portrait-wrap reveal delay-2" data-reveal>
            <div className="portrait-frame">
              <div className="portrait-label top">DEVOPS / 2026</div>
              <img src="/imrane-portrait.webp" alt="Portrait professionnel d'Imrane Asri" className="portrait" />
              <div className="portrait-glow" />
              <div className="portrait-label bottom">ENGINEERING WITH PURPOSE</div>
            </div>
          </div>

          <div className="hero-side">
            <span>SCROLL TO DISCOVER</span>
            <div className="side-line" />
            <ArrowDown size={15} />
          </div>

          <div className="hero-meta">
            <span>BASED IN FRANCE</span>
            <span>WORKING IN LUXEMBOURG</span>
            <span>AVAILABLE FOR THE NEXT CHALLENGE</span>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>KUBERNETES</span><i>✦</i><span>OPENSHIFT</span><i>✦</i>
            <span>GITOPS</span><i>✦</i><span>API MANAGEMENT</span><i>✦</i>
            <span>CI/CD</span><i>✦</i><span>CLOUD</span><i>✦</i>
            <span>KUBERNETES</span><i>✦</i><span>OPENSHIFT</span><i>✦</i>
            <span>GITOPS</span><i>✦</i><span>API MANAGEMENT</span><i>✦</i>
          </div>
        </div>

        <section id="story" className="section story">
          <div className="section-index">01 / STORY</div>
          <div className="story-layout">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">WHO I AM</p>
              <h2>Pas juste faire tourner une app. <em>Comprendre le système.</em></h2>
            </div>
            <div className="story-copy reveal delay-1" data-reveal>
              <p>
                DevOps Engineer chez ITS4U Group, je travaille sur des projets
                clients dans le secteur bancaire, à l’intersection de
                l’intégration applicative, du middleware, de l’API Management
                et des plateformes cloud-native.
              </p>
              <p>
                Mon terrain de jeu : Kubernetes, OpenShift, Azure, CI/CD,
                API gateways, sécurité des flux et automatisation. Mon approche
                reste orientée delivery, qualité et fiabilité.
              </p>
              <div className="signature-line">
                <span>IMRANE ASRIR</span>
                <span>DEVOPS ENGINEER</span>
              </div>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, label, detail }, index) => (
              <div className="capability reveal" data-reveal key={label} style={{ transitionDelay: `${index * 70}ms` }}>
                <Icon size={20} />
                <span className="capability-number">0{index + 1}</span>
                <h3>{label}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="signal-section">
          <div className="signal-inner">
            <div className="terminal-window reveal" data-reveal>
              <div className="terminal-top">
                <span><i /> <i /> <i /></span>
                <span>imrane@platform:~</span>
                <span>● live</span>
              </div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p>
                <p className="terminal-output">devops.engineer --focus=platform</p>
                <p><b>$</b> stack --list</p>
                <p className="terminal-output">k8s · openshift · azure · gitops · api · security</p>
                <p><b>$</b> mission</p>
                <p className="terminal-output accent">make-it-reliable.sh ✓</p>
                <span className="cursor">▋</span>
              </div>
            </div>

            <div className="signal-copy reveal delay-1" data-reveal>
              <p className="eyebrow">HOW I THINK</p>
              <h2>Observe.<br />Automate.<br /><em>Secure.</em></h2>
              <p>
                Une bonne plateforme doit réduire le bruit opérationnel,
                rendre les déploiements reproductibles et donner aux équipes
                une vision claire de ce qui se passe.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-index">02 / EXPERIENCE</div>
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">CAREER LOG</p>
            <h2>Des environnements exigeants.<br /><em>Des responsabilités réelles.</em></h2>
          </div>

          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item reveal" data-reveal key={item.company + item.period}>
                <div className="timeline-marker">
                  <span>0{index + 1}</span>
                </div>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-main">
                  <p className="timeline-company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-context">{item.context}</p>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="tags">
                    {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-index">03 / SELECTED WORK</div>
          <div className="work-heading">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">CASE FILES</p>
              <h2>Je ne liste pas des outils.<br /><em>Je raconte ce qu’ils permettent.</em></h2>
            </div>
            <p className="work-note reveal delay-1" data-reveal>
              Chaque projet est une combinaison de plateforme, sécurité,
              automatisation et coordination.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" data-reveal key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="project-arrow"><ArrowUpRight size={28} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture">
          <div className="section-index">04 / THE SYSTEM</div>
          <div className="architecture-intro reveal" data-reveal>
            <p className="eyebrow">FROM CODE TO PRODUCTION</p>
            <h2>Une chaîne qui relie<br /><em>les idées au réel.</em></h2>
          </div>
          <div className="architecture-flow">
            {[
              [Braces, "CODE", "Git · APIs · Apps"],
              [Terminal, "PIPELINE", "CI/CD · Automation"],
              [Container, "PLATFORM", "K8s · OpenShift · AKS"],
              [ShieldCheck, "SECURITY", "mTLS · OAuth2 · Secrets"],
              [Globe2, "PRODUCTION", "Observe · Operate · Improve"],
            ].map(([Icon, title, detail], index) => {
              const Component = Icon as typeof Braces;
              return (
                <div className="flow-node reveal" data-reveal key={title} style={{ transitionDelay: `${index * 90}ms` }}>
                  <div className="flow-icon"><Component size={20} /></div>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                  {index < 4 && <div className="flow-connector" />}
                </div>
              );
            })}
          </div>
        </section>

        <section className="education section">
          <div className="section-index">05 / EDUCATION</div>
          <div className="education-grid">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">FOUNDATION</p>
              <h2>Une base software.<br /><em>Une culture infrastructure.</em></h2>
            </div>
            <div className="education-list">
              <div className="edu-item reveal" data-reveal>
                <span>2023 — 2024</span>
                <div><strong>Nantes University</strong><p>Master’s Degree · Software Architecture (ALMA)</p></div>
              </div>
              <div className="edu-item reveal" data-reveal>
                <span>2020 — 2023</span>
                <div><strong>ENSEM Casablanca</strong><p>Engineering Degree · Computer Science · Networks & Databases</p></div>
              </div>
              <div className="edu-item reveal" data-reveal>
                <span>2017 — 2020</span>
                <div><strong>Preparatory Classes</strong><p>TSI · Technology and Industrial Sciences</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-grid" />
          <div className="contact-inner">
            <p className="eyebrow reveal" data-reveal>06 / LET'S BUILD</p>
            <h2 className="reveal delay-1" data-reveal>
              The next system<br />
              <em>starts with a conversation.</em>
            </h2>
            <p className="contact-text reveal delay-2" data-reveal>
              Une opportunité DevOps, un projet cloud-native ou simplement
              envie d’échanger sur l’ingénierie plateforme ?
            </p>
            <div className="contact-actions reveal delay-3" data-reveal>
              <a href="mailto:imr.asrir@gmail.com" className="button button-primary">
                imr.asrir@gmail.com <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/imrane-as/potfolio" target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="contact-bottom">
              <span>ARABIC · FR C1 · EN B2</span>
              <span>METZ ↔ LUXEMBOURG</span>
              <span>© {new Date().getFullYear()} IMRANE ASRIR</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>IMRANE ASRIR / DEVOPS ENGINEER</span>
        <span>BUILT WITH REACT · TYPESCRIPT · CSS</span>
      </footer>
    </div>
  );
}

export default App;
