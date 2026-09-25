import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, Cloud, Container,
  Github, Globe2, Layers3, Linkedin, Mail, Menu, Network,
  ShieldCheck, Terminal, X, Download, Languages
} from "lucide-react";

type Lang = "en" | "fr";

const copy = {
  en: {
    nav:{about:"About",experience:"Experience",stack:"Stack",work:"Work",contact:"Contact",talk:"Let's talk"},
    hero:{eyebrow:"API MANAGEMENT · DEVOPS · LUXEMBOURG",kicker:"PLATFORM / CLOUD / INTEGRATION",intro:<>I build and operate <strong>secure, observable and reliable platforms</strong> for complex enterprise environments.</>,work:"Explore the work",contact:"Start a conversation",scroll:"SCROLL TO EXPLORE",meta:"OPEN TO THE NEXT CHALLENGE"},
    about:{index:"01 / ABOUT",eyebrow:"THE ENGINEER",title:<>Not just keeping systems alive.<br/><em>Understanding how they connect.</em></>,p1:"I'm an API Management & DevOps Engineer working at the intersection of application integration, middleware, cloud platforms and security.",p2:"My work sits close to production: designing connectivity, automating delivery, troubleshooting failures and making complex platforms easier to operate.",signature:"API MANAGEMENT · DEVOPS"},
    toolbox:{eyebrow:"THE TOOLBOX",title:<>Tools are not the story.<br/><em>The system is.</em></>,text:"A practical stack shaped by enterprise delivery, cloud-native platforms, API ecosystems and production constraints."},
    how:{eyebrow:"HOW I WORK",title:<>Observe.<br/>Automate.<br/><em>Secure.</em></>,text:"Good platform engineering reduces operational noise, makes delivery reproducible and turns production signals into useful decisions."},
    experience:{index:"02 / EXPERIENCE",eyebrow:"CAREER LOG",title:<>Enterprise environments.<br/><em>Real delivery responsibility.</em></>},
    work:{index:"03 / SELECTED WORK",eyebrow:"CASE FILES",title:<>I don't list technologies.<br/><em>I show what they enable.</em></>,note:"Architecture, security, automation and coordination — connected around delivery."},
    system:{index:"04 / THE SYSTEM",eyebrow:"FROM CODE TO PRODUCTION",title:<>A delivery chain built<br/><em>to survive reality.</em></>},
    education:{index:"05 / EDUCATION",eyebrow:"FOUNDATION",title:<>Software foundations.<br/><em>Infrastructure mindset.</em></>},
    contact:{index:"06 / LET'S BUILD",title:<>The next system<br/><em>starts with a conversation.</em></>,text:"DevOps, API Management, cloud-native platforms or a difficult integration problem — let's talk.",mail:"imr.asrir@gmail.com"},
    cv:"Download CV",language:"FR",online:"● online",terminal:"imrane@platform:~"
  },
  fr: {
    nav:{about:"À propos",experience:"Expérience",stack:"Stack",work:"Projets",contact:"Contact",talk:"Me contacter"},
    hero:{eyebrow:"API MANAGEMENT · DEVOPS · LUXEMBOURG",kicker:"PLATEFORME / CLOUD / INTÉGRATION",intro:<>Je conçois et exploite des plateformes <strong>sécurisées, observables et fiables</strong> pour des environnements d'entreprise complexes.</>,work:"Voir mes projets",contact:"Démarrer une discussion",scroll:"DÉFILER POUR EXPLORER",meta:"OUVERT À UN NOUVEAU DÉFI"},
    about:{index:"01 / À PROPOS",eyebrow:"L'INGÉNIEUR",title:<>Pas seulement maintenir les systèmes.<br/><em>Comprendre comment ils se connectent.</em></>,p1:"Je suis ingénieur API Management & DevOps, à l'intersection de l'intégration applicative, du middleware, des plateformes cloud et de la sécurité.",p2:"Mon travail est proche de la production : concevoir les connectivités, automatiser les déploiements, diagnostiquer les incidents et rendre les plateformes complexes plus simples à exploiter.",signature:"API MANAGEMENT · DEVOPS"},
    toolbox:{eyebrow:"LA TOOLBOX",title:<>Les outils ne sont pas le sujet.<br/><em>Le système l'est.</em></>,text:"Une stack construite autour de la production d'entreprise, des plateformes cloud-native, des écosystèmes API et des contraintes réelles d'exploitation."},
    how:{eyebrow:"MA FAÇON DE TRAVAILLER",title:<>Observer.<br/>Automatiser.<br/><em>Sécuriser.</em></>,text:"Une bonne ingénierie de plateforme réduit le bruit opérationnel, rend les livraisons reproductibles et transforme les signaux de production en décisions utiles."},
    experience:{index:"02 / EXPÉRIENCE",eyebrow:"PARCOURS",title:<>Environnements d'entreprise.<br/><em>Responsabilité technique réelle.</em></>},
    work:{index:"03 / PROJETS",eyebrow:"CASE FILES",title:<>Je ne liste pas les technologies.<br/><em>Je montre ce qu'elles permettent.</em></>,note:"Architecture, sécurité, automatisation et coordination — réunies autour de la livraison."},
    system:{index:"04 / LE SYSTÈME",eyebrow:"DU CODE À LA PRODUCTION",title:<>Une chaîne de livraison conçue<br/><em>pour le réel.</em></>},
    education:{index:"05 / FORMATION",eyebrow:"FONDATIONS",title:<>Fondamentaux logiciels.<br/><em>Culture infrastructure.</em></>},
    contact:{index:"06 / CONSTRUISONS",title:<>Le prochain système<br/><em>commence par une discussion.</em></>,text:"DevOps, API Management, plateformes cloud-native ou problème d'intégration complexe — parlons-en.",mail:"imr.asrir@gmail.com"},
    cv:"Télécharger le CV",language:"EN",online:"● en ligne",terminal:"imrane@platform:~"
  }
} as const;

const toolLogos = [
  ["Kubernetes","kubernetes"],["OpenShift","redhatopenshift"],["Docker","docker"],["Helm","helm"],
  ["Argo CD","argo"],["GitLab","gitlab"],["Terraform","terraform"],["Ansible","ansible"],
  ["Azure","microsoftazure"],["AWS","amazonaws"],["IBM","ibm"],["Spring","spring"],
  ["Kafka","apachekafka"],["GitHub Actions","githubactions"]
];

const experiences = {
  en:[
    {period:"03.2026 — PRESENT",company:"BIL Luxembourg",mark:"BIL",logo:"https://www.bil.com/favicon.ico",role:"API Management & DevOps Engineer",context:"Banking · Finacle core banking transformation",points:["Design and coordination of application connectivity across APIs, middleware, security and network layers.","IBM API Connect, OpenShift, DataPower, OAuth2 and TLS/mTLS across delivery environments.","Technical troubleshooting and coordination with security, network and application teams."],stack:["IBM API Connect","OpenShift","DataPower","OAuth2","mTLS"]},
    {period:"04.2025 — 02.2026",company:"POST Luxembourg",mark:"POST",logo:"https://www.post.lu/favicon.ico",role:"Project Manager / Application Integration",context:"Cloud-native delivery · Integration platforms",points:["Cloud-native deployment and operations across Azure, AKS and OpenShift.","CI/CD delivery with GitLab, Argo CD, Helm and Kubernetes.","Production support, technical governance and coordination across delivery teams."],stack:["Azure","AKS","OpenShift","Kubernetes","Argo CD"]},
    {period:"03.2025 — PRESENT",company:"ITS4U Group",mark:"ITS4U",logo:"https://www.its4u-group.com/favicon.ico",role:"DevOps Engineer / API Management",context:"Consulting · Cloud · Automation",points:["Platform engineering, CI/CD and Kubernetes environments for enterprise clients.","Infrastructure as Code and deployment automation.","Bridge between application, cloud, security and operations teams."],stack:["Azure","Kubernetes","Docker","Azure DevOps"]},
    {period:"01.2024 — 06.2024",company:"Capgemini",mark:"CG",logo:"https://cdn.simpleicons.org/capgemini",role:"DevOps Engineer",context:"Digital services · Software engineering",points:["Development of a centralized web application for contract management.","SQL Server management and collaboration with business users."],stack:[".NET","Entity Framework","SQL Server"]}
  ],
  fr:[
    {period:"03.2026 — AUJOURD'HUI",company:"BIL Luxembourg",mark:"BIL",logo:"https://www.bil.com/favicon.ico",role:"Ingénieur API Management & DevOps",context:"Banque · Transformation du core banking Finacle",points:["Conception et coordination des connectivités applicatives entre API, middleware, sécurité et réseau.","IBM API Connect, OpenShift, DataPower, OAuth2 et TLS/mTLS sur les environnements de livraison.","Diagnostic technique et coordination avec les équipes sécurité, réseau et applicatives."],stack:["IBM API Connect","OpenShift","DataPower","OAuth2","mTLS"]},
    {period:"04.2025 — 02.2026",company:"POST Luxembourg",mark:"POST",logo:"https://www.post.lu/favicon.ico",role:"Chef de projet / Intégration applicative",context:"Cloud-native · Plateformes d'intégration",points:["Déploiement et exploitation cloud-native sur Azure, AKS et OpenShift.","Chaînes CI/CD avec GitLab, Argo CD, Helm et Kubernetes.","Support de production, gouvernance technique et coordination des équipes."],stack:["Azure","AKS","OpenShift","Kubernetes","Argo CD"]},
    {period:"03.2025 — AUJOURD'HUI",company:"ITS4U Group",mark:"ITS4U",logo:"https://www.its4u-group.com/favicon.ico",role:"Ingénieur DevOps / API Management",context:"Conseil · Cloud · Automatisation",points:["Ingénierie de plateforme, CI/CD et environnements Kubernetes pour des clients d'entreprise.","Infrastructure as Code et automatisation des déploiements.","Interface entre équipes applicatives, cloud, sécurité et opérations."],stack:["Azure","Kubernetes","Docker","Azure DevOps"]},
    {period:"01.2024 — 06.2024",company:"Capgemini",mark:"CG",logo:"https://cdn.simpleicons.org/capgemini",role:"Ingénieur DevOps",context:"Services numériques · Développement logiciel",points:["Développement d'une application web centralisée de gestion des contrats.","Administration SQL Server et collaboration avec les utilisateurs métier."],stack:[".NET","Entity Framework","SQL Server"]}
  ]
};

const projects = {
  en:[
    {number:"01",eyebrow:"API PLATFORM",title:"API Management",text:"Enterprise API platforms built around IBM API Connect, DataPower, OpenShift and security controls — from connectivity design to production.",tags:["API Connect v12","DataPower","OpenShift","mTLS"]},
    {number:"02",eyebrow:"PLATFORM ENGINEERING",title:"Cloud-native delivery",text:"Repeatable delivery pipelines connecting source control, GitOps, Kubernetes platforms and production operations.",tags:["GitLab CI","Argo CD","Helm","Kubernetes"]},
    {number:"03",eyebrow:"BANKING INTEGRATION",title:"Secure integration",text:"Technical coordination of banking flows where APIs, certificates, firewalls, identity and application teams have to work as one system.",tags:["OAuth2","TLS/mTLS","Swagger","OpenShift"]}
  ],
  fr:[
    {number:"01",eyebrow:"API PLATFORM",title:"API Management",text:"Plateformes API d'entreprise basées sur IBM API Connect, DataPower, OpenShift et des contrôles de sécurité, de la conception à la production.",tags:["API Connect v12","DataPower","OpenShift","mTLS"]},
    {number:"02",eyebrow:"INGÉNIERIE DE PLATEFORME",title:"Cloud-native delivery",text:"Des chaînes de livraison reproductibles reliant le contrôle de code, le GitOps, les plateformes Kubernetes et l'exploitation.",tags:["GitLab CI","Argo CD","Helm","Kubernetes"]},
    {number:"03",eyebrow:"INTÉGRATION BANCAIRE",title:"Secure integration",text:"Coordination technique de flux bancaires où API, certificats, firewalls, identité et équipes applicatives doivent fonctionner comme un seul système.",tags:["OAuth2","TLS/mTLS","Swagger","OpenShift"]}
  ]
};

function Logo({slug,label}:{slug:string;label:string}){return <img src={`https://cdn.simpleicons.org/${slug}`} alt={label} loading="lazy"/>}
function CompanyLogo({url,mark}:{url:string;mark:string}){return <span className="company-logo"><img src={url} alt="" loading="lazy" onError={(e)=>{e.currentTarget.style.display="none"}}/><span>{mark}</span></span>}

function App(){
  const [lang,setLang]=useState<Lang>("en"),[menuOpen,setMenuOpen]=useState(false),[scroll,setScroll]=useState(0);
  const t=copy[lang], exp=experiences[lang], projs=projects[lang];
  const capabilities=useMemo(()=>lang==="en"?[
    ["PLATFORM","Kubernetes · OpenShift · AKS",Container],["INTEGRATION","APIs · Middleware · Flows",Network],["SECURITY","TLS · mTLS · OAuth2",ShieldCheck],
    ["AUTOMATION","CI/CD · GitOps · IaC",Terminal],["CLOUD","Azure · AWS",Cloud],["API MANAGEMENT","API Connect · DataPower",Layers3]
  ]:[
    ["PLATEFORME","Kubernetes · OpenShift · AKS",Container],["INTÉGRATION","APIs · Middleware · Flux",Network],["SÉCURITÉ","TLS · mTLS · OAuth2",ShieldCheck],
    ["AUTOMATISATION","CI/CD · GitOps · IaC",Terminal],["CLOUD","Azure · AWS",Cloud],["API MANAGEMENT","API Connect · DataPower",Layers3]
  ],[lang]);

  useEffect(()=>{const f=()=>{const m=document.documentElement.scrollHeight-window.innerHeight;setScroll(m>0?window.scrollY/m*100:0)};addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);
  useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});document.querySelectorAll("[data-reveal]").forEach(x=>o.observe(x));return()=>o.disconnect()},[lang]);

  const downloadCV=()=>{
    const doc=new jsPDF({unit:"mm",format:"a4"});
    const green=[199,255,77],dark=[8,10,10],muted=[90,98,95];
    doc.setFillColor(...dark);doc.rect(0,0,210,297,"F");
    doc.setTextColor(...green);doc.setFont("helvetica","bold");doc.setFontSize(27);doc.text("IMRANE ASRIR",18,25);
    doc.setTextColor(245,245,240);doc.setFontSize(11);doc.text(lang==="en"?"API MANAGEMENT & DEVOPS ENGINEER":"INGÉNIEUR API MANAGEMENT & DEVOPS",18,34);
    doc.setTextColor(...muted);doc.setFontSize(8);doc.text("METZ · LUXEMBOURG  |  imr.asrir@gmail.com",18,41);
    let y=57;
    const section=(title:string)=>{doc.setDrawColor(...green);doc.line(18,y,192,y);y+=7;doc.setTextColor(...green);doc.setFontSize(9);doc.text(title.toUpperCase(),18,y);y+=7};
    section(lang==="en"?"PROFILE":"PROFIL");doc.setTextColor(205,210,207);doc.setFontSize(8.5);
    const profile=lang==="en"?"API Management & DevOps Engineer focused on application integration, cloud-native platforms, Kubernetes/OpenShift, CI/CD, security and enterprise API ecosystems.":"Ingénieur API Management & DevOps spécialisé en intégration applicative, plateformes cloud-native, Kubernetes/OpenShift, CI/CD, sécurité et écosystèmes API d'entreprise.";
    doc.splitTextToSize(profile,174).forEach((line:string)=>{doc.text(line,18,y);y+=5});
    y+=4;section(lang==="en"?"EXPERIENCE":"EXPÉRIENCE");
    doc.setFontSize(8.3);
    exp.forEach(e=>{doc.setTextColor(245,245,240);doc.setFont("helvetica","bold");doc.text(e.company+" — "+e.role,18,y);y+=5;doc.setFont("helvetica","normal");doc.setTextColor(...muted);doc.text(e.period+"  ·  "+e.context,18,y);y+=5;e.points.slice(0,2).forEach(pt=>{doc.setTextColor(190,195,192);doc.text("• "+doc.splitTextToSize(pt,168)[0],21,y);y+=4.5});y+=3;if(y>270){doc.addPage();doc.setFillColor(...dark);doc.rect(0,0,210,297,"F");y=20}});
    section(lang==="en"?"CORE STACK":"STACK PRINCIPALE");doc.setTextColor(205,210,207);doc.setFontSize(8.5);
    doc.splitTextToSize("Kubernetes · OpenShift · Docker · Helm · Argo CD · GitLab CI/CD · Terraform · Ansible · Azure · AWS · IBM API Connect · DataPower · Java/Spring Boot · Python · Kafka · OAuth2 · TLS/mTLS",174).forEach((line:string)=>{doc.text(line,18,y);y+=5});
    doc.setTextColor(...muted);doc.setFontSize(7);doc.text("IMRANE ASRIR · "+new Date().getFullYear(),18,287);
    doc.save(`Imrane_Asrir_CV_${lang.toUpperCase()}.pdf`);
  };

  return <div className="site-shell"><div className="scroll-progress" style={{width:`${scroll}%`}}/><div className="noise"/>
    <header className="nav"><a href="#top" className="brand">IA<span>/</span></a>
      <div className={`nav-links ${menuOpen?"open":""}`}>
        {([["about",t.nav.about],["experience",t.nav.experience],["stack",t.nav.stack],["work",t.nav.work],["contact",t.nav.contact]] as const).map(([id,label])=><a key={id} href={"#"+id} onClick={()=>setMenuOpen(false)}>{label}</a>)}
      </div>
      <div className="nav-tools"><button className="lang-switch" onClick={()=>setLang(lang==="en"?"fr":"en")}><Languages size={14}/>{lang.toUpperCase()} <span>→ {t.language}</span></button><button className="cv-button" onClick={downloadCV}><Download size={14}/>{t.cv}</button><a className="nav-cta" href="#contact">{t.nav.talk} <ArrowUpRight size={15}/></a></div>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X size={21}/>:<Menu size={21}/>}</button>
    </header>

    <main id="top">
      <section className="hero"><div className="hero-grid"/><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
        <div className="hero-copy"><div className="eyebrow reveal" data-reveal><span className="status-dot"/> {t.hero.eyebrow}</div><p className="hero-kicker reveal delay-1" data-reveal>{t.hero.kicker}</p><h1 className="hero-title reveal delay-2" data-reveal>IMRANE<span>ASRIR</span></h1><p className="hero-intro reveal delay-3" data-reveal>{t.hero.intro}</p>
          <div className="hero-actions reveal delay-4" data-reveal><a href="#work" className="button button-primary">{t.hero.work}<ArrowDownRight size={18}/></a><button onClick={downloadCV} className="button button-ghost"><Download size={17}/>{t.cv}</button></div>
        </div>
        <div className="portrait-wrap reveal delay-2" data-reveal><div className="portrait-frame"><div className="portrait-label top">ENGINEER / 2026</div><img src="https://avatars.githubusercontent.com/u/294130861?v=4" alt="Professional portrait" className="portrait"/><div className="portrait-glow"/><div className="portrait-scan"/><div className="portrait-label bottom">BUILD · SHIP · OPERATE</div></div><div className="portrait-stamp"><span>IA</span><small>PLATFORM<br/>ENGINEERING</small></div></div>
        <div className="hero-side"><span>{t.hero.scroll}</span><div className="side-line"/></div><div className="hero-meta"><span>METZ / FRANCE</span><span>LUXEMBOURG</span><span>{t.hero.meta}</span></div>
      </section>

      <section className="proof-bar"><div className="proof-label">WORKED ACROSS</div>{exp.map(e=><div className="company-proof" key={e.company}><CompanyLogo url={e.logo} mark={e.mark}/><span>{e.company}</span></div>)}</section>

      <section id="about" className="section story"><div className="section-index">{t.about.index}</div><div className="story-layout"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.about.eyebrow}</p><h2>{t.about.title}</h2></div><div className="story-copy reveal delay-1" data-reveal><p>{t.about.p1}</p><p>{t.about.p2}</p><div className="signature-line"><span>IMRANE ASRIR</span><span>{t.about.signature}</span></div></div></div>
        <div className="capability-grid">{capabilities.map(([label,detail,Icon],i)=><div className="capability reveal" data-reveal key={label as string} style={{transitionDelay:`${i*70}ms`}}><Icon size={20}/><span className="capability-number">0{i+1}</span><h3>{label}</h3><p>{detail}</p></div>)}</div>
      </section>

      <section id="stack" className="stack-section"><div className="stack-inner"><div className="stack-copy reveal" data-reveal><p className="eyebrow">{t.toolbox.eyebrow}</p><h2>{t.toolbox.title}</h2><p>{t.toolbox.text}</p></div><div className="logo-wall reveal delay-1" data-reveal>{toolLogos.map(([label,slug])=><div className="tool-logo" key={label}><Logo slug={slug} label={label}/><span>{label}</span></div>)}</div></div></section>

      <section className="signal-section"><div className="signal-inner"><div className="terminal-window reveal" data-reveal><div className="terminal-top"><span><i/><i/><i/></span><span>{t.hero.eyebrow.includes("API")?"imrane@platform:~":"imrane@plateforme:~"}</span><span>{t.online}</span></div><div className="terminal-body"><p><b>$</b> whoami</p><p className="terminal-output">api-management.engineer</p><p><b>$</b> platform --focus</p><p className="terminal-output">kubernetes · openshift · cloud · gitops</p><p><b>$</b> security --mode</p><p className="terminal-output">oauth2 · tls · mtls · secrets</p><p><b>$</b> mission</p><p className="terminal-output accent">make-it-reliable.sh ✓</p><span className="cursor">▋</span></div></div><div className="signal-copy reveal delay-1" data-reveal><p className="eyebrow">{t.how.eyebrow}</p><h2>{t.how.title}</h2><p>{t.how.text}</p></div></div></section>

      <section id="experience" className="section experience"><div className="section-index">{t.experience.index}</div><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.experience.eyebrow}</p><h2>{t.experience.title}</h2></div><div className="timeline">{exp.map((item,i)=><article className="timeline-item reveal" data-reveal key={item.company+item.period}><div className="timeline-marker"><span>0{i+1}</span></div><div className="timeline-date">{item.period}</div><div className="timeline-main"><div className="company-line"><CompanyLogo url={item.logo} mark={item.mark}/><span className="timeline-company">{item.company}</span></div><h3>{item.role}</h3><p className="timeline-context">{item.context}</p><ul>{item.points.map(pt=><li key={pt}><Check size={13}/>{pt}</li>)}</ul><div className="tags">{item.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="work" className="section work"><div className="section-index">{t.work.index}</div><div className="work-heading"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.work.eyebrow}</p><h2>{t.work.title}</h2></div><p className="work-note reveal delay-1" data-reveal>{t.work.note}</p></div><div className="project-list">{projs.map(p=><article className="project-card reveal" data-reveal key={p.number}><div className="project-number">{p.number}</div><div className="project-content"><p className="eyebrow">{p.eyebrow}</p><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={28}/></div></article>)}</div></section>

      <section className="architecture"><div className="section-index">{t.system.index}</div><div className="architecture-intro reveal" data-reveal><p className="eyebrow">{t.system.eyebrow}</p><h2>{t.system.title}</h2></div><div className="architecture-flow">{([[Braces,"CODE","Git · APIs · Apps"],[Terminal,"PIPELINE","CI/CD · Automation"],[Container,"PLATFORM","K8s · OpenShift · AKS"],[ShieldCheck,"SECURITY","mTLS · OAuth2 · Secrets"],[Globe2,"PRODUCTION","Observe · Operate · Improve"]] as const).map(([Icon,title,detail],i)=><div className="flow-node reveal" data-reveal key={title} style={{transitionDelay:`${i*90}ms`}}><div className="flow-icon"><Icon size={20}/></div><strong>{title}</strong><span>{detail}</span>{i<4&&<div className="flow-connector"/>}</div>)}</div></section>

      <section className="education section"><div className="section-index">{t.education.index}</div><div className="education-grid"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.education.eyebrow}</p><h2>{t.education.title}</h2></div><div className="education-list"><div className="edu-item reveal" data-reveal><span>2023 — 2024</span><div><strong>Nantes University</strong><p>Master's Degree · Software Architecture (ALMA)</p></div></div><div className="edu-item reveal" data-reveal><span>2020 — 2023</span><div><strong>ENSEM Casablanca</strong><p>Engineering Degree · Computer Science · Networks & Databases</p></div></div><div className="edu-item reveal" data-reveal><span>2017 — 2020</span><div><strong>Preparatory Classes</strong><p>TSI · Technology and Industrial Sciences</p></div></div></div></div></section>

      <section id="contact" className="contact"><div className="contact-grid"/><div className="contact-inner"><p className="eyebrow reveal" data-reveal>{t.contact.index}</p><h2 className="reveal delay-1" data-reveal>{t.contact.title}</h2><p className="contact-text reveal delay-2" data-reveal>{t.contact.text}</p><div className="contact-actions reveal delay-3" data-reveal><a href={"mailto:"+t.contact.mail} className="button button-primary">{t.contact.mail}<ArrowUpRight size={18}/></a><button onClick={downloadCV} className="button button-ghost"><Download size={17}/>{t.cv}</button><a href="https://github.com/imrane-as/potfolio" target="_blank" rel="noreferrer" className="icon-button"><Github size={20}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="icon-button"><Linkedin size={20}/></a></div><div className="contact-bottom"><span>AR · FR C1 · EN B2</span><span>METZ ↔ LUXEMBOURG</span><span>© {new Date().getFullYear()} IMRANE ASRIR</span></div></div></section>
    </main>
    <footer className="footer"><span>IMRANE ASRIR / API MANAGEMENT & DEVOPS</span><span>REACT · TYPESCRIPT · MOTION · SYSTEMS</span></footer>
  </div>
}
export default App;
