import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import {
  ArrowDownRight, ArrowUpRight, Braces, Check, Cloud, Container,
  Github, Globe2, Layers3, Linkedin, Mail, Menu, Network,
  ShieldCheck, Terminal, X, Download, Languages
} from "lucide-react";

type Lang = "en" | "fr";
type Capability = readonly [string, string, typeof Container];

const copy = {
  en: {
    nav:{about:"About",experience:"Experience",stack:"Stack",work:"Work",contact:"Contact",talk:"Let's talk"},
    hero:{eyebrow:"API MANAGEMENT · DEVOPS · PLATFORM ENGINEERING",kicker:"CLOUD / API / AUTOMATION",intro:<>I transform complex enterprise infrastructure into <strong>clear, reliable systems</strong> that teams can actually operate.</>,work:"Découvrir mon parcours",contact:"Démarrer une discussion",scroll:"DÉFILER POUR EXPLORER",meta:"OUVERT À LA PROCHAINE ÉTAPE"},
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

const logoAsset = (name:string) => `/potfolio/logos/${name}`;

const toolLogos = [
  ["Kubernetes","kubernetes"],["OpenShift","redhatopenshift"],["Docker","docker"],["Helm","helm"],
  ["Argo CD","argo"],["GitLab","gitlab"],["Terraform","terraform"],["Ansible","ansible"],
  ["Azure","microsoftazure"],["AWS","amazonaws"],["IBM","ibm"],["Spring","spring"],
  ["Kafka","apachekafka"],["GitHub Actions","githubactions"]
];

const experiences = {
  en:[
    {period:"AUG 2026 — PRESENT",company:"LIH Luxembourg",mark:"LIH",logo:logoAsset("lih.webp"),role:"DevOps Engineer / OpenShift",context:"Public health · Platform engineering",points:["OpenShift platform implementation and deployment automation.","Install, configure and administer Red Hat OpenShift clusters.","Deploy and configure Ingress, Routes, Operators, storage and networking.","Implement GitOps with Argo CD and deploy Kubernetes applications with Helm and Kustomize.","Monitor, diagnose and resolve incidents on OpenShift clusters."],stack:["Red Hat OpenShift","Kubernetes","Argo CD","GitOps","GitLab","Helm","Kustomize","Operators","OC CLI","kubectl","Linux"]},
    {period:"MAR 2026 — PRESENT",company:"BIL Luxembourg",mark:"BIL",logo:logoAsset("bil.webp"),role:"API Management & DevOps Engineer",context:"Banking · Financial services · Core Banking / Finacle transformation",points:["Deploy, monitor and automate applications on Azure Kubernetes Service and OpenShift 4.","Design and optimize CI/CD pipelines with GitLab and Argo CD, including automated testing.","Develop Helm, Kubernetes and OpenShift deployment templates for consistent delivery.","Support and maintain OpenShift clusters in production environments.","Coordinate internal and external application flows across API, middleware, security and network layers.","Participate in governance meetings, reporting, performance metrics and risk assessment.","Manage incidents, requests and changes through ServiceNow."],stack:["Azure","AKS","OpenShift 4","Kubernetes","Helm","GitLab","Argo CD","IBM API Connect","DataPower","OAuth2","TLS/mTLS","ServiceNow"]},
    {period:"MAR 2025 — PRESENT",company:"ITS4U Group",mark:"ITS4U",logo:"https://www.its4u-group.com/favicon.ico",role:"DevOps Engineer / API Management",context:"Consulting · Cloud computing · Digital transformation",points:["Technical leadership of CI/CD pipelines and delivery automation.","Deployment and optimization of Kubernetes environments.","Infrastructure as Code and reusable deployment patterns.","Coordination between development, cloud, security and operations teams.","Application integration, API Management and production support across client environments."],stack:["Microsoft Azure","Kubernetes","Docker","Azure DevOps","GitLab","Argo CD","Terraform","Ansible"]},
    {period:"APR 2025 — FEB 2026",company:"POST Luxembourg",mark:"POST",logo:"https://www.post.lu/favicon.ico",role:"Project Manager / Application Integration",context:"Banking · Financial services · API platform modernization",points:["Modernization of an enterprise API Management platform through migration to IBM API Connect v12 on OpenShift.","Install, configure and administer IBM API Connect v12.","Deploy and manage middleware components on OpenShift.","Migrate existing APIs to the new platform.","Configure DataPower gateways and secure flows with TLS/mTLS.","Integrate and expose APIs with application teams.","Monitor DEV, TEST and PROD deployments and provide platform support.","Manage incidents, service requests and changes through ServiceNow."],stack:["IBM API Connect v12","DataPower","OpenShift","Kubernetes","TLS/mTLS","API Management","Git","ServiceNow"]},
    {period:"JAN 2024 — JUN 2024",company:"Capgemini",mark:"CG",logo:logoAsset("capgemini.webp"),role:"DevOps Engineer / API Management",context:"Digital services · Software engineering",points:["Development of a centralized web application for purchase-contract management.","Design and development of business application features.","SQL Server database management.","Coordination with business users."],stack:[".NET","Entity Framework","Microsoft SQL Server"]},
    {period:"2023",company:"ONE-BE",mark:"ONE",logo:"https://cdn.simpleicons.org/java",role:"Full Stack Developer",context:"Energy sector",points:["Full-stack development across frontend and backend layers.","Contribution to application integration and software delivery activities."],stack:["JavaScript","Java","API","Web development"]}
  ],
  fr:[
    {period:"AOÛT 2026 — AUJOURD'HUI",company:"LIH Luxembourg",mark:"LIH",logo:logoAsset("lih.webp"),role:"Ingénieur DevOps / OpenShift",context:"Santé publique · Ingénierie de plateforme",points:["Projet de mise en place d'une plateforme OpenShift et d'automatisation des déploiements.","Installation, configuration et administration de clusters Red Hat OpenShift.","Déploiement et configuration d'Ingress, Routes, Operators, stockage et réseau.","Mise en œuvre de GitOps avec Argo CD et déploiement Kubernetes avec Helm et Kustomize.","Supervision, diagnostic et résolution des incidents sur les clusters OpenShift."],stack:["Red Hat OpenShift","Kubernetes","Argo CD","GitOps","GitLab","Helm","Kustomize","Operators","OC CLI","kubectl","Linux"]},
    {period:"MARS 2026 — AUJOURD'HUI",company:"BIL Luxembourg",mark:"BIL",logo:logoAsset("bil.webp"),role:"Ingénieur API Management & DevOps",context:"Banque · Services financiers · Transformation Core Banking / Finacle",points:["Déploiement, supervision et automatisation d'applications sur Azure Kubernetes Service et OpenShift 4.","Conception et optimisation de pipelines CI/CD avec GitLab et Argo CD, avec tests automatisés.","Développement de templates Helm, Kubernetes et OpenShift pour fiabiliser les livraisons.","Support et maintien en conditions opérationnelles des clusters OpenShift en production.","Coordination des flux applicatifs internes et externes entre API, middleware, sécurité et réseau.","Participation aux comités de gouvernance, reporting, suivi des performances et des risques.","Gestion des incidents, demandes et changements via ServiceNow."],stack:["Azure","AKS","OpenShift 4","Kubernetes","Helm","GitLab","Argo CD","IBM API Connect","DataPower","OAuth2","TLS/mTLS","ServiceNow"]},
    {period:"MARS 2025 — AUJOURD'HUI",company:"ITS4U Group",mark:"ITS4U",logo:"https://www.its4u-group.com/favicon.ico",role:"Ingénieur DevOps / API Management",context:"Conseil · Cloud computing · Transformation digitale",points:["Pilotage technique des pipelines CI/CD et automatisation des livraisons.","Déploiement et optimisation d'environnements Kubernetes.","Mise en place d'Infrastructure as Code et de patterns de déploiement réutilisables.","Coordination entre développement, cloud, sécurité et opérations.","Intégration applicative, API Management et support de production pour des clients d'entreprise."],stack:["Microsoft Azure","Kubernetes","Docker","Azure DevOps","GitLab","Argo CD","Terraform","Ansible"]},
    {period:"AVR 2025 — FÉVR 2026",company:"POST Luxembourg",mark:"POST",logo:"https://www.post.lu/favicon.ico",role:"Chef de Projet / Intégration Applicative",context:"Banque · Services financiers · Modernisation API",points:["Modernisation d'une plateforme d'API Management avec migration vers IBM API Connect v12 sur OpenShift.","Installation, configuration et administration d'IBM API Connect v12.","Déploiement et gestion des composants middleware sur OpenShift.","Migration des APIs existantes vers la nouvelle plateforme.","Configuration des gateways DataPower et sécurisation des flux TLS/mTLS.","Intégration et exposition des APIs avec les équipes applicatives.","Suivi des déploiements DEV, TEST et PROD et support de la plateforme.","Gestion des incidents, demandes de service et changements via ServiceNow."],stack:["IBM API Connect v12","DataPower","OpenShift","Kubernetes","TLS/mTLS","API Management","Git","ServiceNow"]},
    {period:"JANV 2024 — JUIN 2024",company:"Capgemini",mark:"CG",logo:logoAsset("capgemini.webp"),role:"Ingénieur DevOps / API Management",context:"Services numériques · Développement logiciel",points:["Développement d'une application web centralisée pour la gestion des contrats d'achat.","Conception et développement de fonctionnalités métier.","Gestion de la base SQL Server.","Coordination avec les utilisateurs métiers."],stack:[".NET","Entity Framework","Microsoft SQL Server"]},
    {period:"2023",company:"ONE-BE",mark:"ONE",logo:"https://cdn.simpleicons.org/java",role:"Développeur Full Stack",context:"Secteur de l'énergie",points:["Développement full-stack sur les couches frontend et backend.","Contribution à l'intégration applicative et aux activités de livraison logicielle."],stack:["JavaScript","Java","API","Développement web"]}
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
function CompanyLogo({url}:{url:string}){return <span className="company-logo"><img src={url} alt="" loading="lazy" onError={(e)=>{e.currentTarget.style.display="none"}}/></span>}

function App(){
  const [lang,setLang]=useState<Lang>("en"),[menuOpen,setMenuOpen]=useState(false),[scroll,setScroll]=useState(0);
  const t=copy[lang], exp=experiences[lang], projs=projects[lang];
  const capabilities: Capability[] = lang === "en"
    ? [
        ["PLATFORM", "Kubernetes · OpenShift · AKS", Container],
        ["INTEGRATION", "APIs · Middleware · Flows", Network],
        ["SECURITY", "TLS · mTLS · OAuth2", ShieldCheck],
        ["AUTOMATION", "CI/CD · GitOps · IaC", Terminal],
        ["CLOUD", "Azure · AWS", Cloud],
        ["API MANAGEMENT", "API Connect · DataPower", Layers3]
      ]
    : [
        ["PLATEFORME", "Kubernetes · OpenShift · AKS", Container],
        ["INTÉGRATION", "APIs · Middleware · Flux", Network],
        ["SÉCURITÉ", "TLS · mTLS · OAuth2", ShieldCheck],
        ["AUTOMATISATION", "CI/CD · GitOps · IaC", Terminal],
        ["CLOUD", "Azure · AWS", Cloud],
        ["API MANAGEMENT", "API Connect · DataPower", Layers3]
      ];

  useEffect(()=>{const f=()=>{const m=document.documentElement.scrollHeight-window.innerHeight;setScroll(m>0?window.scrollY/m*100:0)};addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);
  useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});document.querySelectorAll("[data-reveal]").forEach(x=>o.observe(x));return()=>o.disconnect()},[lang]);

  const downloadCV=()=>{
    const doc=new jsPDF({unit:"mm",format:"a4"});
    const W=210,H=297,M=18;
    const ink:[number,number,number]=[28,31,43],muted:[number,number,number]=[96,101,116],paper:[number,number,number]=[250,248,243];
    const accents:[[number,number,number],[number,number,number],[number,number,number]]=[[255,107,107],[108,99,255],[0,184,169]];
    let y=20,pageNo=1;
    const newPage=()=>{doc.addPage();pageNo++;doc.setFillColor(...paper);doc.rect(0,0,W,H,"F");doc.setFillColor(...accents[0]);doc.rect(0,0,6,H,"F");y=20};
    doc.setFillColor(...paper);doc.rect(0,0,W,H,"F");doc.setFillColor(...accents[0]);doc.rect(0,0,6,H,"F");
    const ensure=(n=15)=>{if(y+n>278)newPage()};
    const section=(s:string)=>{ensure(15);doc.setDrawColor(...accents[0]);doc.line(M,y,W-M,y);y+=7;doc.setTextColor(...accents[1]);doc.setFont("helvetica","bold");doc.setFontSize(10);doc.text(s.toUpperCase(),M,y);y+=7};
    const para=(s:string,size=8.4)=>{doc.setFont("helvetica","normal");doc.setFontSize(size);doc.setTextColor(...ink);doc.splitTextToSize(s,W-M*2).forEach((line:string)=>{ensure(6);doc.text(line,M,y);y+=4});y+=2};
    const bullet=(s:string)=>{doc.setFont("helvetica","normal");doc.setFontSize(8);doc.setTextColor(...ink);const lines=doc.splitTextToSize(s,W-M*2-7);lines.forEach((line:string,i:number)=>{ensure(6);doc.text(i===0?"•":" ",M,y);doc.text(line,M+5,y);y+=3.8});y+=1};
    doc.setTextColor(...ink);doc.setFont("helvetica","bold");doc.setFontSize(26);doc.text("IMRANE ASRIR",M,y);y+=8;
    doc.setTextColor(...accents[1]);doc.setFontSize(10);doc.text(lang==="en"?"API MANAGEMENT & DEVOPS ENGINEER":"INGÉNIEUR API MANAGEMENT & DEVOPS",M,y);y+=6;
    doc.setTextColor(...muted);doc.setFontSize(7.5);doc.text("Metz, France · Luxembourg · +33 6 77 57 90 39 · imr.asrir@gmail.com",M,y);y+=4;
    doc.text(lang==="en"?"LinkedIn: Imrane Asrir":"LinkedIn : Imrane Asrir",M,y);y+=9;
    section(lang==="en"?"PROFILE":"PROFIL");
    para(lang==="en"?"DevOps Engineer at ITS4U Group, working across enterprise and banking environments. Specialized in application integration, middleware and API Management, with a strong focus on deployment, migration, automation, platform operations and secure data flows. Delivery-oriented with emphasis on quality, reliability and production support.":"Ingénieur DevOps chez ITS4U Group, intervenant sur des environnements d'entreprise et bancaires. Spécialisé en intégration applicative, middleware et API Management, avec un fort focus sur le déploiement, la migration, l'automatisation, l'exploitation des plateformes et la sécurisation des flux. Orienté delivery, qualité, fiabilité et production.");
    section(lang==="en"?"PROFESSIONAL EXPERIENCE":"EXPÉRIENCE PROFESSIONNELLE");
    exp.forEach((e)=>{ensure(38);doc.setTextColor(...accents[1]);doc.setFont("helvetica","bold");doc.setFontSize(10);doc.text(e.company,M,y);y+=5;doc.setTextColor(...ink);doc.setFontSize(8.8);doc.text(e.role,M,y);y+=4;doc.setTextColor(...muted);doc.setFont("helvetica","normal");doc.setFontSize(7);doc.text(e.period+" · "+e.context,M,y);y+=5;para(e.points[0],8.2);e.points.slice(1).forEach(bullet);doc.setTextColor(...muted);doc.setFontSize(7);const tech=(lang==="en"?"Technical environment: ":"Environnement technique : ")+e.stack.join(" · ");doc.splitTextToSize(tech,W-M*2).forEach((line:string)=>{ensure(5);doc.text(line,M,y);y+=3.4});y+=5});
    section(lang==="en"?"KEY SKILLS":"COMPÉTENCES CLÉS");
    ["Management & coordination: Technical team coordination · SIT / UAT / PREPROD / PROD monitoring · technical risk management · documentation and reporting · business communication","Cloud & containers: Microsoft Azure · AKS · Docker · Kubernetes · OpenShift","CI/CD & automation: Azure DevOps · GitLab · Argo CD · Helm · Terraform · Ansible","API & security: IBM API Connect · DataPower · OAuth2 · TLS/mTLS · Swagger/OpenAPI","Development & data: Java · Spring Boot · Python · JavaScript · .NET · SQL Server · Oracle · Kafka"].forEach((x)=>bullet(lang==="en"?x:x.replace("Management & coordination","Gestion & pilotage").replace("Technical team coordination","Coordination des équipes techniques").replace("Cloud & containers","Cloud & conteneurs").replace("CI/CD & automation","CI/CD & automatisation").replace("API & security","API & sécurité").replace("Development & data","Développement & données")));
    section(lang==="en"?"EDUCATION":"FORMATION");
    [["2023–2024","Nantes Université","Master 2 · Software Architecture (ALMA)"],["2020–2023","ENSEM Casablanca","Engineering Degree · Computer Science · Networks and Databases"],["2017–2020","CPGE","TSI · Technology and Industrial Sciences"]].forEach(([date,school,degree])=>{ensure(16);doc.setTextColor(...accents[1]);doc.setFont("helvetica","bold");doc.setFontSize(8);doc.text(date,M,y);doc.setTextColor(...ink);doc.text(school,M+32,y);y+=4;para(degree,7.8)});
    section(lang==="en"?"CERTIFICATIONS & TRAINING":"CERTIFICATIONS & FORMATIONS");
    ["DevOps — Orange Digital Center","DevOps EX280 — in progress / en cours","Java Programming — OpenClassrooms","JavaScript — Sololearn","Python — Orange Digital Center"].forEach(bullet);
    section(lang==="en"?"LANGUAGES":"LANGUES");
    para(lang==="en"?"Arabic: Native · French: C1 · English: B2":"Arabe : langue maternelle · Français : C1 · Anglais : B2");
    const pages=doc.getNumberOfPages();for(let p=1;p<=pages;p++){doc.setPage(p);doc.setTextColor(...muted);doc.setFontSize(6.5);doc.text("IMRANE ASRIR · "+(lang==="en"?"DETAILED CV":"CV DÉTAILLÉ")+" · "+p+"/"+pages,M,289)}
    doc.save("Imrane_Asrir_Detailed_CV_"+lang.toUpperCase()+".pdf");
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
        <div className="hero-copy"><div className="eyebrow reveal" data-reveal><span className="status-dot"/> {t.hero.eyebrow}</div><p className="hero-kicker reveal delay-1" data-reveal>{t.hero.kicker}</p><h1 className="hero-title reveal delay-2" data-reveal>IMRANE <span className="surname">ASRIR</span></h1><p className="hero-intro reveal delay-3" data-reveal>{t.hero.intro}</p>
          <div className="hero-actions reveal delay-4" data-reveal><a href="#work" className="button button-primary">{t.hero.work}<ArrowDownRight size={18}/></a><button onClick={downloadCV} className="button button-ghost"><Download size={17}/>{t.cv}</button></div>
        </div>
        <div className="portrait-wrap reveal delay-2" data-reveal><div className="portrait-frame"><div className="portrait-label top">ENGINEER / 2026</div><img src="/potfolio/profile-hi.webp?v=20260926" alt="Imrane Asrir — professional portrait" className="portrait" width="900" height="900" fetchPriority="high" decoding="async"/><div className="portrait-glow"/><div className="portrait-scan"/><div className="portrait-label bottom">BUILD · SHIP · OPERATE</div></div><div className="portrait-stamp"><span>IA</span><small>PLATFORM<br/>ENGINEERING</small></div></div>
        <div className="hero-side"><span>{t.hero.scroll}</span><div className="side-line"/></div><div className="hero-meta"><span>METZ / FRANCE</span><span>LUXEMBOURG</span><span>{t.hero.meta}</span></div>
      </section>

      <section className="proof-bar"><div className="proof-label">WORKED ACROSS</div>{exp.map(e=><div className="company-proof" key={e.company}><CompanyLogo url={e.logo}/><span>{e.company}</span></div>)}</section>

      <section id="about" className="section story"><div className="section-index">{t.about.index}</div><div className="story-layout"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.about.eyebrow}</p><h2>{t.about.title}</h2></div><div className="story-copy reveal delay-1" data-reveal><p>{t.about.p1}</p><p>{t.about.p2}</p><div className="signature-line"><span>IMRANE ASRIR</span><span>{t.about.signature}</span></div></div></div>
        <div className="capability-grid">{capabilities.map(([label,detail,Icon],i)=><div className="capability reveal" data-reveal key={label as string} style={{transitionDelay:`${i*70}ms`}}><Icon size={20}/><span className="capability-number">0{i+1}</span><h3>{label}</h3><p>{detail}</p></div>)}</div>
      </section>

      <section id="stack" className="stack-section"><div className="stack-inner"><div className="stack-copy reveal" data-reveal><p className="eyebrow">{t.toolbox.eyebrow}</p><h2>{t.toolbox.title}</h2><p>{t.toolbox.text}</p></div><div className="logo-wall reveal delay-1" data-reveal>{toolLogos.map(([label,slug])=><div className="tool-logo" key={label}><Logo slug={slug} label={label}/><span>{label}</span></div>)}</div></div></section>

      <section className="signal-section"><div className="signal-inner"><div className="terminal-window reveal" data-reveal><div className="terminal-top"><span><i/><i/><i/></span><span>{t.hero.eyebrow.includes("API")?"imrane@platform:~":"imrane@plateforme:~"}</span><span>{t.online}</span></div><div className="terminal-body"><p><b>$</b> whoami</p><p className="terminal-output">api-management.engineer</p><p><b>$</b> platform --focus</p><p className="terminal-output">kubernetes · openshift · cloud · gitops</p><p><b>$</b> security --mode</p><p className="terminal-output">oauth2 · tls · mtls · secrets</p><p><b>$</b> mission</p><p className="terminal-output accent">make-it-reliable.sh ✓</p><span className="cursor">▋</span></div></div><div className="signal-copy reveal delay-1" data-reveal><p className="eyebrow">{t.how.eyebrow}</p><h2>{t.how.title}</h2><p>{t.how.text}</p></div></div></section>

      <section id="experience" className="section experience"><div className="section-index">{t.experience.index}</div><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.experience.eyebrow}</p><h2>{t.experience.title}</h2></div><div className="timeline">{exp.map((item,i)=><article className="timeline-item reveal" data-reveal key={item.company+item.period}><div className="timeline-marker"><span>0{i+1}</span></div><div className="timeline-date">{item.period}</div><div className="timeline-main"><div className="company-line"><CompanyLogo url={item.logo}/><span className="timeline-company">{item.company}</span></div><h3>{item.role}</h3><p className="timeline-context">{item.context}</p><ul>{item.points.map(pt=><li key={pt}><Check size={13}/>{pt}</li>)}</ul><div className="tags">{item.stack.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

      <section id="work" className="section work"><div className="section-index">{t.work.index}</div><div className="work-heading"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.work.eyebrow}</p><h2>{t.work.title}</h2></div><p className="work-note reveal delay-1" data-reveal>{t.work.note}</p></div><div className="project-list">{projs.map(p=><article className="project-card reveal" data-reveal key={p.number}><div className="project-number">{p.number}</div><div className="project-content"><p className="eyebrow">{p.eyebrow}</p><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={28}/></div></article>)}</div></section>

      <section className="architecture"><div className="section-index">{t.system.index}</div><div className="architecture-intro reveal" data-reveal><p className="eyebrow">{t.system.eyebrow}</p><h2>{t.system.title}</h2></div><div className="architecture-flow">{([[Braces,"CODE","Git · APIs · Apps"],[Terminal,"PIPELINE","CI/CD · Automation"],[Container,"PLATFORM","K8s · OpenShift · AKS"],[ShieldCheck,"SECURITY","mTLS · OAuth2 · Secrets"],[Globe2,"PRODUCTION","Observe · Operate · Improve"]] as const).map(([Icon,title,detail],i)=><div className="flow-node reveal" data-reveal key={title} style={{transitionDelay:`${i*90}ms`}}><div className="flow-icon"><Icon size={20}/></div><strong>{title}</strong><span>{detail}</span>{i<4&&<div className="flow-connector"/>}</div>)}</div></section>

      <section className="education section"><div className="section-index">{t.education.index}</div><div className="education-grid"><div className="section-heading reveal" data-reveal><p className="eyebrow">{t.education.eyebrow}</p><h2>{t.education.title}</h2></div><div className="education-list"><div className="edu-item reveal" data-reveal><span>2023 — 2024</span><div><strong>Nantes University</strong><p>Master's Degree · Software Architecture (ALMA)</p></div></div><div className="edu-item reveal" data-reveal><span>2020 — 2023</span><div><strong>ENSEM Casablanca</strong><p>Engineering Degree · Computer Science · Networks & Databases</p></div></div><div className="edu-item reveal" data-reveal><span>2017 — 2020</span><div><strong>Preparatory Classes</strong><p>TSI · Technology and Industrial Sciences</p></div></div></div></div></section>

      <section id="contact" className="contact"><div className="contact-grid"/><div className="contact-inner"><p className="eyebrow reveal" data-reveal>{t.contact.index}</p><h2 className="reveal delay-1" data-reveal>{t.contact.title}</h2><p className="contact-text reveal delay-2" data-reveal>{t.contact.text}</p><div className="contact-actions reveal delay-3" data-reveal><a href={"mailto:"+t.contact.mail} className="button button-primary">{t.contact.mail}<ArrowUpRight size={18}/></a><button onClick={downloadCV} className="button button-ghost"><Download size={17}/>{t.cv}</button><a href="https://github.com/imrane-as/potfolio" target="_blank" rel="noreferrer" className="icon-button"><Github size={20}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="icon-button"><Linkedin size={20}/></a></div><div className="contact-bottom"><span>AR · FR C1 · EN B2</span><span>METZ ↔ LUXEMBOURG</span><span>© {new Date().getFullYear()} IMRANE ASRIR</span></div></div></section>
    </main>
    <footer className="footer"><span>IMRANE ASRIR / API MANAGEMENT & DEVOPS</span><span>REACT · TYPESCRIPT · MOTION · SYSTEMS</span></footer>
  </div>
}
export default App;
