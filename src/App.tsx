import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, Cloud, Container,
  Github, Globe2, Layers3, Linkedin, Mail, Menu, Network,
  ShieldCheck, Terminal, X
} from "lucide-react";

const toolLogos = [
  ["Kubernetes", "kubernetes"], ["OpenShift", "redhatopenshift"],
  ["Docker", "docker"], ["Helm", "helm"], ["Argo CD", "argo"],
  ["GitLab", "gitlab"], ["Terraform", "terraform"], ["Ansible", "ansible"],
  ["Azure", "microsoftazure"], ["AWS", "amazonaws"], ["IBM", "ibm"],
  ["Spring", "spring"], ["Kafka", "apachekafka"], ["GitHub Actions", "githubactions"]
];

const experiences = [
  {
    period: "03.2026 — PRESENT", company: "BIL Luxembourg", mark: "BIL",
    role: "API Management & DevOps Engineer", context: "Banking · Finacle core banking transformation",
    points: [
      "Design and coordination of application connectivity across APIs, middleware, security and network layers.",
      "IBM API Connect, OpenShift, DataPower, OAuth2 and TLS/mTLS across delivery environments.",
      "Technical troubleshooting and coordination with security, network and application teams."
    ],
    stack: ["IBM API Connect", "OpenShift", "DataPower", "OAuth2", "mTLS"]
  },
  {
    period: "04.2025 — 02.2026", company: "POST Luxembourg", mark: "POST",
    role: "Project Manager / Application Integration", context: "Cloud-native delivery · Integration platforms",
    points: [
      "Cloud-native deployment and operations across Azure, AKS and OpenShift.",
      "CI/CD delivery with GitLab, Argo CD, Helm and Kubernetes.",
      "Production support, technical governance and coordination across delivery teams."
    ],
    stack: ["Azure", "AKS", "OpenShift", "Kubernetes", "Argo CD"]
  },
  {
    period: "03.2025 — PRESENT", company: "ITS4U Group", mark: "ITS4U",
    role: "DevOps Engineer / API Management", context: "Consulting · Cloud · Automation",
    points: [
      "Platform engineering, CI/CD and Kubernetes environments for enterprise clients.",
      "Infrastructure as Code and deployment automation.",
      "Bridge between application, cloud, security and operations teams."
    ],
    stack: ["Azure", "Kubernetes", "Docker", "Azure DevOps"]
  },
  {
    period: "01.2024 — 06.2024", company: "Capgemini", mark: "CG",
    role: "DevOps Engineer", context: "Digital services · Software engineering",
    points: [
      "Development of a centralized web application for contract management.",
      "SQL Server management and collaboration with business users."
    ],
    stack: [".NET", "Entity Framework", "SQL Server"]
  }
];

const capabilities = [
  { icon: Container, label: "PLATFORM", detail: "Kubernetes · OpenShift · AKS" },
  { icon: Network, label: "INTEGRATION", detail: "APIs · Middleware · Flows" },
  { icon: ShieldCheck, label: "SECURITY", detail: "TLS · mTLS · OAuth2" },
  { icon: Terminal, label: "AUTOMATION", detail: "CI/CD · GitOps · IaC" },
  { icon: Cloud, label: "CLOUD", detail: "Azure · AWS" },
  { icon: Layers3, label: "API MANAGEMENT", detail: "API Connect · DataPower" }
];

const projects = [
  {
    number: "01", eyebrow: "API PLATFORM",
    title: "API Management",
    text: "Enterprise API platforms built around IBM API Connect, DataPower, OpenShift and security controls — from connectivity design to production.",
    tags: ["API Connect v12", "DataPower", "OpenShift", "mTLS"]
  },
  {
    number: "02", eyebrow: "PLATFORM ENGINEERING",
    title: "Cloud-native delivery",
    text: "Repeatable delivery pipelines connecting source control, GitOps, Kubernetes platforms and production operations.",
    tags: ["GitLab CI", "Argo CD", "Helm", "Kubernetes"]
  },
  {
    number: "03", eyebrow: "BANKING INTEGRATION",
    title: "Secure integration",
    text: "Technical coordination of banking flows where APIs, certificates, firewalls, identity and application teams have to work as one system.",
    tags: ["OAuth2", "TLS/mTLS", "Swagger", "OpenShift"]
  }
];

function Logo({ slug, label }: { slug: string; label: string }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={label}
      loading="lazy"
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
  );
}

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scroll}%` }} />
      <div className="noise" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand">IA<span>/</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
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
            <div className="eyebrow reveal" data-reveal><span className="status-dot" /> API MANAGEMENT · DEVOPS · LUXEMBOURG</div>
            <p className="hero-kicker reveal delay-1" data-reveal>PLATFORM / CLOUD / INTEGRATION</p>
            <h1 className="hero-title reveal delay-2" data-reveal>IMRANE<span>ASRIR</span></h1>
            <p className="hero-intro reveal delay-3" data-reveal>
              I build and operate <strong>secure, observable and reliable platforms</strong> for complex enterprise environments.
            </p>
            <div className="hero-actions reveal delay-4" data-reveal>
              <a href="#work" className="button button-primary">Explore the work <ArrowDownRight size={18} /></a>
              <a href="mailto:imr.asrir@gmail.com" className="button button-ghost">Start a conversation <Mail size={17} /></a>
            </div>
          </div>

          <div className="portrait-wrap reveal delay-2" data-reveal>
            <div className="portrait-frame">
              <div className="portrait-label top">ENGINEER / 2026</div>
              <img src="https://avatars.githubusercontent.com/u/294130861?v=4" alt="Professional portrait" className="portrait" />
              <div className="portrait-glow" />
              <div className="portrait-scan" />
              <div className="portrait-label bottom">BUILD · SHIP · OPERATE</div>
            </div>
            <div className="portrait-stamp"><span>IA</span><small>PLATFORM<br />ENGINEERING</small></div>
          </div>

          <div className="hero-side"><span>SCROLL TO EXPLORE</span><div className="side-line" /></div>
          <div className="hero-meta"><span>METZ / FRANCE</span><span>LUXEMBOURG</span><span>OPEN TO THE NEXT CHALLENGE</span></div>
        </section>

        <section className="proof-bar">
          <div className="proof-label">WORKED ACROSS</div>
          {experiences.map((item) => (
            <div className="company-proof" key={item.company}>
              <span className="company-mark">{item.mark}</span>
              <span>{item.company}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section story">
          <div className="section-index">01 / ABOUT</div>
          <div className="story-layout">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">THE ENGINEER</p>
              <h2>Not just keeping systems alive.<br /><em>Understanding how they connect.</em></h2>
            </div>
            <div className="story-copy reveal delay-1" data-reveal>
              <p>
                I'm an API Management & DevOps Engineer working at the intersection of application integration, middleware, cloud platforms and security.
              </p>
              <p>
                My work sits close to production: designing connectivity, automating delivery, troubleshooting failures and making complex platforms easier to operate.
              </p>
              <div className="signature-line"><span>IMRANE ASRIR</span><span>API MANAGEMENT · DEVOPS</span></div>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, label, detail }, index) => (
              <div className="capability reveal" data-reveal key={label} style={{ transitionDelay: `${index * 70}ms` }}>
                <Icon size={20} /><span className="capability-number">0{index + 1}</span>
                <h3>{label}</h3><p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="stack-section">
          <div className="stack-inner">
            <div className="stack-copy reveal" data-reveal>
              <p className="eyebrow">THE TOOLBOX</p>
              <h2>Tools are not the story.<br /><em>The system is.</em></h2>
              <p>A practical stack shaped by enterprise delivery, cloud-native platforms, API ecosystems and production constraints.</p>
            </div>
            <div className="logo-wall reveal delay-1" data-reveal>
              {toolLogos.map(([label, slug]) => (
                <div className="tool-logo" key={label}>
                  <Logo slug={slug} label={label} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="signal-section">
          <div className="signal-inner">
            <div className="terminal-window reveal" data-reveal>
              <div className="terminal-top"><span><i /><i /><i /></span><span>imrane@platform:~</span><span>● online</span></div>
              <div className="terminal-body">
                <p><b>$</b> whoami</p><p className="terminal-output">api-management.engineer</p>
                <p><b>$</b> platform --focus</p><p className="terminal-output">kubernetes · openshift · cloud · gitops</p>
                <p><b>$</b> security --mode</p><p className="terminal-output">oauth2 · tls · mtls · secrets</p>
                <p><b>$</b> mission</p><p className="terminal-output accent">make-it-reliable.sh ✓</p><span className="cursor">▋</span>
              </div>
            </div>
            <div className="signal-copy reveal delay-1" data-reveal>
              <p className="eyebrow">HOW I WORK</p><h2>Observe.<br />Automate.<br /><em>Secure.</em></h2>
              <p>Good platform engineering reduces operational noise, makes delivery reproducible and turns production signals into useful decisions.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-index">02 / EXPERIENCE</div>
          <div className="section-heading reveal" data-reveal>
            <p className="eyebrow">CAREER LOG</p><h2>Enterprise environments.<br /><em>Real delivery responsibility.</em></h2>
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-item reveal" data-reveal key={item.company + item.period}>
                <div className="timeline-marker"><span>0{index + 1}</span></div>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-main">
                  <div className="company-line"><span className="company-mark">{item.mark}</span><span className="timeline-company">{item.company}</span></div>
                  <h3>{item.role}</h3><p className="timeline-context">{item.context}</p>
                  <ul>{item.points.map((point) => <li key={point}><Check size={13} />{point}</li>)}</ul>
                  <div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-index">03 / SELECTED WORK</div>
          <div className="work-heading">
            <div className="section-heading reveal" data-reveal>
              <p className="eyebrow">CASE FILES</p><h2>I don't list technologies.<br /><em>I show what they enable.</em></h2>
            </div>
            <p className="work-note reveal delay-1" data-reveal>Architecture, security, automation and coordination — connected around delivery.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" data-reveal key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-content"><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-arrow"><ArrowUpRight size={28} /></div>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture">
          <div className="section-index">04 / THE SYSTEM</div>
          <div className="architecture-intro reveal" data-reveal><p className="eyebrow">FROM CODE TO PRODUCTION</p><h2>A delivery chain built<br /><em>to survive reality.</em></h2></div>
          <div className="architecture-flow">
            {([
              [Braces, "CODE", "Git · APIs · Apps"], [Terminal, "PIPELINE", "CI/CD · Automation"],
              [Container, "PLATFORM", "K8s · OpenShift · AKS"], [ShieldCheck, "SECURITY", "mTLS · OAuth2 · Secrets"],
              [Globe2, "PRODUCTION", "Observe · Operate · Improve"]
            ] as const).map(([Component, title, detail], index) => (
              <div className="flow-node reveal" data-reveal key={title} style={{ transitionDelay: `${index * 90}ms` }}>
                <div className="flow-icon"><Component size={20} /></div><strong>{title}</strong><span>{detail}</span>{index < 4 && <div className="flow-connector" />}
              </div>
            ))}
          </div>
        </section>

        <section className="education section">
          <div className="section-index">05 / EDUCATION</div>
          <div className="education-grid">
            <div className="section-heading reveal" data-reveal><p className="eyebrow">FOUNDATION</p><h2>Software foundations.<br /><em>Infrastructure mindset.</em></h2></div>
            <div className="education-list">
              <div className="edu-item reveal" data-reveal><span>2023 — 2024</span><div><strong>Nantes University</strong><p>Master's Degree · Software Architecture (ALMA)</p></div></div>
              <div className="edu-item reveal" data-reveal><span>2020 — 2023</span><div><strong>ENSEM Casablanca</strong><p>Engineering Degree · Computer Science · Networks & Databases</p></div></div>
              <div className="edu-item reveal" data-reveal><span>2017 — 2020</span><div><strong>Preparatory Classes</strong><p>TSI · Technology and Industrial Sciences</p></div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-grid" />
          <div className="contact-inner">
            <p className="eyebrow reveal" data-reveal>06 / LET'S BUILD</p>
            <h2 className="reveal delay-1" data-reveal>The next system<br /><em>starts with a conversation.</em></h2>
            <p className="contact-text reveal delay-2" data-reveal>DevOps, API Management, cloud-native platforms or a difficult integration problem — let's talk.</p>
            <div className="contact-actions reveal delay-3" data-reveal>
              <a href="mailto:imr.asrir@gmail.com" className="button button-primary">imr.asrir@gmail.com <ArrowUpRight size={18} /></a>
              <a href="https://github.com/imrane-as/potfolio" target="_blank" rel="noreferrer" className="icon-button" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="icon-button" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
            <div className="contact-bottom"><span>AR · FR C1 · EN B2</span><span>METZ ↔ LUXEMBOURG</span><span>© {new Date().getFullYear()} IMRANE ASRIR</span></div>
          </div>
        </section>
      </main>

      <footer className="footer"><span>IMRANE ASRIR / API MANAGEMENT & DEVOPS</span><span>BUILT WITH REACT · TYPESCRIPT · CSS</span></footer>
    </div>
  );
}

export default App;
