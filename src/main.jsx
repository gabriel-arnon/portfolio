import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'
import { gsap } from 'gsap'
import { siDocker, siFastapi, siGit, siMongodb, siN8n, siNodedotjs, siNextdotjs, siOpencode, siPostgresql, siPython, siReact, siSupabase, siTypescript } from 'simple-icons'
import './styles.css'

const content = {
  pt: {
    pageTitle: 'Gabriel Arnon — Desenvolvedor Full Stack',
    pageDescription: 'Portfólio de Gabriel Arnon, desenvolvedor full stack em formação.',
    nav: ['Início', 'Sobre', 'Projetos', 'Experiência', 'Contato'],
    brandLabel: 'Gabriel Arnon, início',
    mainNavigation: 'Navegação principal',
    languageSelector: 'Escolher idioma',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    quickLinks: 'Links rápidos',
    githubLabel: 'GitHub de Gabriel Arnon',
    linkedinLabel: 'LinkedIn de Gabriel Arnon',
    sendEmail: 'Enviar email para Gabriel Arnon',
    openResume: 'Abrir currículo de Gabriel Arnon',
    photoFallback: <>adicione<br />profile.jpeg</>,
    previousImage: 'Imagem anterior',
    nextImage: 'Próxima imagem',
    eyebrow: 'Técnico de TI · Desenvolvedor em formação',
    title: <>Transformo problemas reais<br /><em>em soluções digitais.</em></>,
    intro: 'Desenvolvedor full stack em formação, interessado em construir produtos úteis, automações inteligentes e sistemas que tornam operações mais simples.',
    cta: 'Conheça meu trabalho',
    availability: 'Disponível para oportunidades',
    scroll: 'Role para explorar',
    aboutLabel: '01 — Sobre mim',
    aboutTitle: 'Tecnologia com propósito, do suporte ao produto.',
    aboutText: 'Atuo como Técnico de TI no INTS, dentro do Hospital Municipal de Bertioga. É nesse ambiente que aprendi a investigar problemas com calma, entender necessidades reais e transformar uma demanda em uma solução que funciona.',
    aboutTextTwo: 'Hoje direciono essa experiência para o desenvolvimento de software, automação e inteligência artificial. Gosto de conectar backend, frontend e infraestrutura para criar experiências eficientes, seguras e bem estruturadas.',
    projectsLabel: '02 — Projetos em destaque',
    projectsTitle: 'Construindo enquanto aprendo.',
    projectsText: 'Projetos autorais nascidos de problemas concretos e da vontade de entender cada camada de um produto digital.',
    dragProjects: 'Arraste ou use as setas para explorar',
    inProgress: 'Em desenvolvimento',
    orbe: 'Central inteligente de monitoramento climático e operacional: consulta um CEP, cruza endereço, geolocalização e previsão meteorológica e classifica níveis de atenção.',
    orbeTag: 'Projeto acadêmico',
    orbeRepo: 'Ver repositório',
    orbeAlt: 'Painel do ORBE com leitura meteorológica e classificação de alerta',
    printops: 'Plataforma de monitoramento para ambientes hospitalares: coleta via SNMP, descoberta automática, dashboard em tempo real, métricas históricas, toner, unidade de imagem e autenticação JWT.',
    printopsRepo: 'Ver repositório',
    printopsImages: 'Navegar pelas imagens do PrintOps',
    printopsDashboardAlt: 'Dashboard do PrintOps com métricas da frota de impressoras',
    printopsTableAlt: 'Tabela de impressoras monitoradas no PrintOps',
    printopsDiscoveryAlt: 'Tela de descoberta de impressoras com varredura SNMP em andamento',
    printopsAddPrinterAlt: 'Formulário de cadastro de uma nova impressora no PrintOps',
    financy: 'Plataforma SaaS para organização financeira pessoal, com transações, contas, cartões, categorias, importações e automações.',
    financyDashboardAlt: 'Dashboard do Financy com visão geral das finanças',
    nexahelp: 'Copiloto corporativo com IA generativa para consultar procedimentos e políticas internas com fontes verificáveis.',
    nexahelpTag: 'Projeto acadêmico',
    nexahelpImages: 'Navegar pelas imagens do NexaHelp',
    nexahelpLandingAlt: 'Landing page do NexaHelp AI',
    nexahelpAssistantAlt: 'Assistente corporativo do NexaHelp AI',
    landingPage: 'Landing page institucional para um escritório de advocacia, com foco em clareza, confiança e conversão de contatos.',
    landingPageTag: 'Landing page',
    almeidaAlt: 'Landing page Almeida Junior Advogado',
    visitSite: 'Visitar site',
    stackLabel: '03 — Stack',
    stackTitle: 'Ferramentas que fazem parte do meu dia a dia.',
    stackText: 'Uma base em evolução contínua, escolhida para resolver problemas com clareza e consistência.',
    experienceLabel: '04 — Trajetória',
    experienceTitle: 'Experiência que conecta pessoas, sistemas e soluções.',
    current: 'Atual',
    itRole: 'Técnico de TI',
    intsCompany: 'INTS — Instituto Nacional de Tecnologia e Saúde',
    hospital: 'Hospital Municipal de Bertioga',
    customerRole: 'Líder de atendimento ao cliente',
    linkfortCompany: 'Linkfort Telecom',
    location: 'Bertioga, São Paulo',
    degree: 'Ensino Superior · Inteligência Artificial e Automação Digital',
    degreeStatus: 'Em andamento',
    factProjects: 'projetos autorais',
    factYears: 'anos em tecnologia',
    factLearning: 'vontade de aprender',
    contactLabel: '05 — Vamos conversar?',
    contactTitle: <>Tem um problema interessante?<br /><em>Vamos construir algo.</em></>,
    contactText: 'Estou aberto a oportunidades, projetos e conversas sobre tecnologia.',
    email: 'Enviar um email',
    resume: 'Baixar currículo',
    resumeLink: 'Currículo',
    backToTop: 'Voltar ao topo ↑',
    footer: 'Feito com curiosidade, código e café.'
  },
  en: {
    pageTitle: 'Gabriel Arnon — Full Stack Developer',
    pageDescription: 'Portfolio of Gabriel Arnon, full stack developer in progress.',
    nav: ['Home', 'About', 'Projects', 'Experience', 'Contact'],
    brandLabel: 'Gabriel Arnon, home',
    mainNavigation: 'Main navigation',
    languageSelector: 'Choose language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    quickLinks: 'Quick links',
    githubLabel: 'Gabriel Arnon on GitHub',
    linkedinLabel: 'Gabriel Arnon on LinkedIn',
    sendEmail: 'Send an email to Gabriel Arnon',
    openResume: 'Open Gabriel Arnon’s resume',
    photoFallback: <>add<br />profile.jpeg</>,
    previousImage: 'Previous image',
    nextImage: 'Next image',
    eyebrow: 'IT Technician · Developer in progress',
    title: <>I turn real problems<br /><em>into digital solutions.</em></>,
    intro: 'Full stack developer in progress, interested in building useful products, intelligent automations and systems that make operations simpler.',
    cta: 'See my work',
    availability: 'Open to opportunities',
    scroll: 'Scroll to explore',
    aboutLabel: '01 — About me',
    aboutTitle: 'Technology with purpose, from support to product.',
    aboutText: 'I work as an IT Technician at INTS, inside the Municipal Hospital of Bertioga. This is where I learned to investigate problems calmly, understand real needs and turn a request into a solution that works.',
    aboutTextTwo: 'I am now taking this experience into software development, automation and artificial intelligence. I like connecting backend, frontend and infrastructure to create efficient, secure and well-structured experiences.',
    projectsLabel: '02 — Featured projects',
    projectsTitle: 'Building while learning.',
    projectsText: 'Independent projects born from concrete problems and the desire to understand every layer of a digital product.',
    dragProjects: 'Drag or use arrow keys to explore',
    inProgress: 'In progress',
    orbe: 'An intelligent climate and operational monitoring hub: it queries a ZIP code, combines address, geolocation and weather data, and classifies attention levels.',
    orbeTag: 'Academic project',
    orbeRepo: 'View repository',
    orbeAlt: 'ORBE dashboard with weather readings and alert classification',
    printops: 'A monitoring platform for hospital environments: SNMP collection, automatic discovery, real-time dashboard, historical metrics, toner, image unit and JWT authentication.',
    printopsRepo: 'View repository',
    printopsImages: 'Navigate PrintOps images',
    printopsDashboardAlt: 'PrintOps dashboard with printer fleet metrics',
    printopsTableAlt: 'Table of printers monitored by PrintOps',
    printopsDiscoveryAlt: 'PrintOps printer discovery screen with an SNMP scan in progress',
    printopsAddPrinterAlt: 'PrintOps form for registering a new printer',
    financy: 'A SaaS platform for personal finance, with transactions, accounts, cards, categories, imports and automations.',
    financyDashboardAlt: 'Financy dashboard with an overview of personal finances',
    nexahelp: 'An AI-powered corporate copilot for querying internal procedures and policies with verifiable sources.',
    nexahelpTag: 'Academic project',
    nexahelpImages: 'Navigate NexaHelp images',
    nexahelpLandingAlt: 'NexaHelp AI landing page',
    nexahelpAssistantAlt: 'NexaHelp AI corporate assistant',
    landingPage: 'An institutional landing page for a law firm, focused on clarity, trust and contact conversion.',
    landingPageTag: 'Landing page',
    almeidaAlt: 'Almeida Junior law firm landing page',
    visitSite: 'Visit site',
    stackLabel: '03 — Stack',
    stackTitle: 'Tools that are part of my everyday work.',
    stackText: 'A continuously evolving foundation, chosen to solve problems with clarity and consistency.',
    experienceLabel: '04 — Journey',
    experienceTitle: 'Experience connecting people, systems and solutions.',
    current: 'Current',
    itRole: 'IT Technician',
    intsCompany: 'INTS — Instituto Nacional de Tecnologia e Saúde',
    hospital: 'Bertioga Municipal Hospital',
    customerRole: 'Customer Service Leader',
    linkfortCompany: 'Linkfort Telecom',
    location: 'Bertioga, São Paulo',
    degree: 'Higher education · Artificial Intelligence and Digital Automation',
    degreeStatus: 'In progress',
    factProjects: 'independent projects',
    factYears: 'years in technology',
    factLearning: 'love of learning',
    contactLabel: '05 — Let’s talk?',
    contactTitle: <>Have an interesting problem?<br /><em>Let’s build something.</em></>,
    contactText: 'I am open to opportunities, projects and conversations about technology.',
    email: 'Send an email',
    resume: 'Download resume',
    resumeLink: 'Resume',
    backToTop: 'Back to top ↑',
    footer: 'Made with curiosity, code and coffee.'
  }
}

const stack = ['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Git', 'n8n', 'Codex', 'OpenCode']
const publicAsset = (file) => `${import.meta.env.BASE_URL}${file}`
const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
const siteUrl = 'https://gabriel-arnon.github.io/portfolio/'
const socialImageUrl = `${siteUrl}profile.jpeg`
const codexIcon = {
  path: 'M8.086.457a6.105 6.105 0 0 1 3.046-.415c1.333.153 2.521.72 3.564 1.7a.117.117 0 0 0 .107.029c1.408-.346 2.762-.224 4.061.366l.063.03.154.076c1.357.703 2.33 1.77 2.918 3.198.278.679.418 1.388.421 2.126a5.655 5.655 0 0 1-.18 1.631.167.167 0 0 0 .04.155 5.982 5.982 0 0 1 1.578 2.891c.385 1.901-.01 3.615-1.183 5.14l-.182.22a6.063 6.063 0 0 1-2.934 1.851.162.162 0 0 0-.108.102c-.255.736-.511 1.364-.987 1.992-1.199 1.582-2.962 2.462-4.948 2.451-1.583-.008-2.986-.587-4.21-1.736a.145.145 0 0 0-.14-.032c-.518.167-1.04.191-1.604.185a5.924 5.924 0 0 1-2.595-.622 6.058 6.058 0 0 1-2.146-1.781c-.203-.269-.404-.522-.551-.821a7.74 7.74 0 0 1-.495-1.283 6.11 6.11 0 0 1-.017-3.064.166.166 0 0 0 .008-.074.115.115 0 0 0-.037-.064 5.958 5.958 0 0 1-1.38-2.202 5.196 5.196 0 0 1-.333-1.589 6.915 6.915 0 0 1 .188-2.132c.45-1.484 1.309-2.648 2.577-3.493.282-.188.55-.334.802-.438.286-.12.573-.22.861-.304a.129.129 0 0 0 .087-.087A6.016 6.016 0 0 1 5.635 2.31C6.315 1.464 7.132.846 8.086.457zm-.804 7.85a.848.848 0 0 0-1.473.842l1.694 2.965-1.688 2.848a.849.849 0 0 0 1.46.864l1.94-3.272a.849.849 0 0 0 .007-.854l-1.94-3.393zm5.446 6.24a.849.849 0 0 0 0 1.695h4.848a.849.849 0 0 0 0-1.696h-4.848z',
  hex: 'F1ECEC',
  fillRule: 'evenodd'
}
const toolIcons = {
  Python: siPython,
  FastAPI: siFastapi,
  React: siReact,
  'Next.js': siNextdotjs,
  TypeScript: siTypescript,
  'Node.js': siNodedotjs,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Supabase: siSupabase,
  Docker: siDocker,
  Git: siGit,
  n8n: siN8n,
  Codex: codexIcon,
  OpenCode: siOpencode
}
const orbeShot = {
  src: publicAsset('orbe-dashboard.png'),
  altKey: 'orbeAlt'
}
const printopsShots = [
  {
    src: publicAsset('printops-dashboard.png'),
    altKey: 'printopsDashboardAlt'
  },
  {
    src: publicAsset('printops-table.png'),
    altKey: 'printopsTableAlt'
  },
  {
    src: publicAsset('printops-discovery.png'),
    altKey: 'printopsDiscoveryAlt'
  },
  {
    src: publicAsset('printops-add-printer.png'),
    altKey: 'printopsAddPrinterAlt'
  }
]
const nexahelpShots = [
  {
    src: publicAsset('nexahelp.png'),
    altKey: 'nexahelpLandingAlt'
  },
  {
    src: publicAsset('nexahelp2.png'),
    altKey: 'nexahelpAssistantAlt'
  }
]
const financyShot = {
  src: publicAsset('financy.png'),
  altKey: 'financyDashboardAlt'
}
const featuredProjects = [
  {
    id: 'orbe',
    name: 'ORBE',
    cardClass: 'project-orbe',
    artClass: 'orbe-art',
    shots: [orbeShot],
    statusKey: 'orbeTag',
    descriptionKey: 'orbe',
    tech: ['Node.js', 'JavaScript', 'BrasilAPI', 'Open-Meteo', 'Airtable'],
    links: [{ href: 'https://github.com/gabriel-arnon/ORBE', labelKey: 'orbeRepo' }]
  },
  {
    id: 'printops',
    name: 'PrintOps',
    cardClass: 'project-dark',
    artClass: 'printops-art',
    shots: printopsShots,
    imagesKey: 'printopsImages',
    backdrop: true,
    statusKey: 'inProgress',
    descriptionKey: 'printops',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'SNMP'],
    links: [{ href: 'https://github.com/gabriel-arnon/PrintOps', labelKey: 'printopsRepo' }]
  },
  {
    id: 'nexahelp',
    name: 'NexaHelp AI',
    cardClass: 'project-nexa',
    artClass: 'nexa-art',
    shots: nexahelpShots,
    imagesKey: 'nexahelpImages',
    statusKey: 'nexahelpTag',
    descriptionKey: 'nexahelp',
    tech: ['React', 'TypeScript', 'TanStack', 'OpenAI', 'Vitest'],
    links: [
      { href: 'https://github.com/gabriel-arnon/nexahelp', label: 'GitHub' },
      { href: 'https://nexahelp.vercel.app/', labelKey: 'visitSite' }
    ]
  },
  {
    id: 'almeida',
    name: 'Almeida Junior Advogado',
    cardClass: 'project-almeida',
    artClass: 'almeida-art',
    shots: [{ src: publicAsset('almeidajunior.png'), altKey: 'almeidaAlt' }],
    statusKey: 'landingPageTag',
    descriptionKey: 'landingPage',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Playwright'],
    links: [
      { href: 'https://github.com/gabriel-arnon/almeida-junior-advogado', label: 'GitHub' },
      { href: 'https://www.almeidajunioradvogado.com.br', labelKey: 'visitSite' }
    ]
  },
  {
    id: 'financy',
    name: 'Financy',
    cardClass: 'project-accent',
    artClass: 'financy-art',
    shots: [financyShot],
    statusKey: 'inProgress',
    descriptionKey: 'financy',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
    links: []
  }
]
const featuredProjectCount = featuredProjects.length

function Arrow({ diagonal = false }) {
  return <span className={diagonal ? 'arrow arrow-diagonal' : 'arrow'}>↗</span>
}

function SocialIcon({ name }) {
  if (name === 'github') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.75 1.17 1.75 1.17 1.01 1.74 2.64 1.24 3.29.95.1-.74.4-1.24.72-1.53-2.51-.29-5.15-1.25-5.15-5.58 0-1.23.44-2.23 1.17-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.61 1.55.23 2.69.11 2.98.73.79 1.17 1.79 1.17 3.02 0 4.34-2.65 5.28-5.17 5.57.41.35.77 1.04.77 2.1v3.11c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>
  }

  if (name === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.3a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0ZM1.1 8h4.2v12.7H1.1V8Zm6.8 0h4v1.74h.06a4.4 4.4 0 0 1 3.97-2.18c4.25 0 5.04 2.8 5.04 6.43v6.71h-4.17v-5.95c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.55-2.28 3.14v6.05H7.9V8Z" /></svg>
  }

  if (name === 'mail') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m3.5 6 8.5 6.4L20.5 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.8h8.2L19 7.6v13.6H6z" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M14 2.8v5h5M9 12h7M9 15.5h7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function ToolIcon({ name }) {
  const icon = toolIcons[name]
  if (!icon) return null

  const color = icon.hex === '000000' ? 'var(--paper)' : `#${icon.hex}`
  return <svg className="tool-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ color }}><path d={icon.path} fill="currentColor" fillRule={icon.fillRule} /></svg>
}

function ProjectCard({ project, index, t }) {
  const [shotIndex, setShotIndex] = useState(0)
  const activeShot = project.shots[shotIndex]
  const hasGallery = project.shots.length > 1
  const reduceMotion = prefersReducedMotion()
  const linkLabel = (link) => link.labelKey ? t[link.labelKey] : link.label

  return (
    <motion.article className={`project-card ${project.cardClass}`} whileHover={reduceMotion ? undefined : { y: -8 }} transition={reduceMotion ? undefined : { duration: 0.25 }}>
      <div className={`project-art ${project.artClass} screenshot-art`}>
        {project.backdrop && <img className="project-screenshot-backdrop" src={activeShot.src} alt="" aria-hidden="true" />}
        {hasGallery ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.img className="project-screenshot" key={activeShot.src} src={activeShot.src} alt={t[activeShot.altKey]} initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28 }} />
          </AnimatePresence>
        ) : (
          <img className="project-screenshot" src={activeShot.src} alt={t[activeShot.altKey]} />
        )}
        <div className="screenshot-shade" />
        {hasGallery && <div className="shot-controls" aria-label={t[project.imagesKey]}>
          <button type="button" aria-label={t.previousImage} onClick={(event) => { event.stopPropagation(); setShotIndex((current) => (current - 1 + project.shots.length) % project.shots.length) }}>←</button>
          <span>{String(shotIndex + 1).padStart(2, '0')} / {String(project.shots.length).padStart(2, '0')}</span>
          <button type="button" aria-label={t.nextImage} onClick={(event) => { event.stopPropagation(); setShotIndex((current) => (current + 1) % project.shots.length) }}>→</button>
        </div>}
        <span className="art-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-info"><div><span className="project-tag">{t[project.statusKey]}</span><h3>{project.name}</h3></div><span className="project-arrow">↗</span><p>{t[project.descriptionKey]}</p><div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>{project.links.length === 1 && <a className="project-repo" href={project.links[0].href} target="_blank" rel="noreferrer">{linkLabel(project.links[0])}<Arrow diagonal /></a>}{project.links.length > 1 && <div className="project-links">{project.links.map((link) => <a className="project-repo" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{linkLabel(link)} <Arrow diagonal /></a>)}</div>}</div>
    </motion.article>
  )
}

function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'
    } catch {
      return 'pt'
    }
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const heroRef = useRef(null)
  const projectDragRef = useRef({ active: false, axis: null, startX: 0, startY: 0, startScrollLeft: 0, moved: false })
  const t = content[language]

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('.site-header', { y: -24, opacity: 0, duration: 0.8 })
        .from('.hero-copy > *', { y: 32, duration: 0.8, stagger: 0.1 }, '-=0.35')
        .from('.hero-visual', { x: 36, duration: 1 }, '-=0.7')
        .from('.hero-meta', { y: 16, duration: 0.5 }, '-=0.55')

      gsap.to('.hero-orbit', {
        rotation: 360,
        duration: 28,
        ease: 'none',
        repeat: -1
      })

      gsap.to('.hero-photo', {
        y: -10,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })

      gsap.utils.toArray('.reveal-line').forEach((line) => {
        gsap.from(line, {
          scrollTrigger: undefined,
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay: 0.08
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-language', language)
    } catch {
      // Storage may be unavailable in private browsing contexts.
    }

    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = t.pageTitle
    const localizedMeta = {
      'meta[name="description"]': t.pageDescription,
      'meta[property="og:title"]': t.pageTitle,
      'meta[property="og:description"]': t.pageDescription,
      'meta[property="og:url"]': siteUrl,
      'meta[property="og:image"]': socialImageUrl,
      'meta[name="twitter:title"]': t.pageTitle,
      'meta[name="twitter:description"]': t.pageDescription,
      'meta[name="twitter:image"]': socialImageUrl
    }
    Object.entries(localizedMeta).forEach(([selector, value]) => {
      document.querySelector(selector)?.setAttribute('content', value)
    })
  }, [language, t])

  const closeMenu = () => setMenuOpen(false)

  const startProjectDrag = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (event.target.closest?.('button, a')) return

    const track = event.currentTarget
    projectDragRef.current = { active: true, axis: null, startX: event.clientX, startY: event.clientY, startScrollLeft: track.scrollLeft, moved: false }
    track.classList.add('is-dragging')
    track.setPointerCapture(event.pointerId)
  }

  const moveProjectDrag = (event) => {
    const drag = projectDragRef.current
    if (!drag.active) return

    const deltaX = event.clientX - drag.startX
    const deltaY = event.clientY - drag.startY
    if (!drag.axis && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 6) {
      drag.axis = Math.abs(deltaX) > Math.abs(deltaY) ? 'x' : 'y'
    }
    if (drag.axis !== 'x') return

    drag.moved = drag.moved || Math.abs(deltaX) > 4
    event.preventDefault()
    event.currentTarget.scrollLeft = drag.startScrollLeft - deltaX
  }

  const endProjectDrag = (event) => {
    const track = event.currentTarget
    if (!projectDragRef.current.active) return

    projectDragRef.current.active = false
    track.classList.remove('is-dragging')
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId)
    if (projectDragRef.current.moved) {
      window.setTimeout(() => {
        if (!projectDragRef.current.active) projectDragRef.current.moved = false
      }, 0)
    }
  }

  const preventDraggedProjectClick = (event) => {
    if (!projectDragRef.current.moved) return

    event.preventDefault()
    event.stopPropagation()
    projectDragRef.current.moved = false
  }

  const handleProjectKeyDown = (event) => {
    if (event.target !== event.currentTarget) return

    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault()
      event.currentTarget.scrollBy({ left: event.key === 'ArrowRight' ? event.currentTarget.clientWidth * 0.85 : -event.currentTarget.clientWidth * 0.85, behavior })
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault()
      event.currentTarget.scrollTo({ left: event.key === 'Home' ? 0 : event.currentTarget.scrollWidth, behavior })
    }
  }

  return (
    <div className="app-shell" ref={heroRef}>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t.brandLabel}>GA<span>.</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={t.mainNavigation}>
          {t.nav.map((item, index) => <a href={`#${['inicio', 'sobre', 'projetos', 'experiencia', 'contato'][index]}`} key={item} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label={t.languageSelector}>
            <button className={language === 'pt' ? 'active' : ''} onClick={() => setLanguage('pt')}>PT</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen}>
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" />{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">{t.cta}<Arrow /></a>
              <a className="text-link" href="mailto:gabriel.drtroll@gmail.com">{t.email}<Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label label-top">01 / 05</div>
            <div className="hero-orbit" aria-hidden="true"><span>FULL STACK · AUTOMATION · AI · </span></div>
            <div className="photo-frame">
              <div className="hero-socials" aria-label={t.quickLinks}>
                <a className="hero-social" href="https://github.com/gabriel-arnon" target="_blank" rel="noreferrer" aria-label={t.githubLabel}><span className="social-icon"><SocialIcon name="github" /></span><span>GitHub</span><Arrow diagonal /></a>
                <a className="hero-social" href="https://www.linkedin.com/in/gabriel-arnon" target="_blank" rel="noreferrer" aria-label={t.linkedinLabel}><span className="social-icon"><SocialIcon name="linkedin" /></span><span>LinkedIn</span><Arrow diagonal /></a>
                <a className="hero-social" href="mailto:gabriel.drtroll@gmail.com" aria-label={t.sendEmail}><span className="social-icon"><SocialIcon name="mail" /></span><span>Email</span><Arrow diagonal /></a>
                <a className="hero-social" href={publicAsset('curriculo.pdf')} target="_blank" rel="noreferrer" aria-label={t.openResume}><span className="social-icon"><SocialIcon name="resume" /></span><span>CV</span><Arrow diagonal /></a>
              </div>
              {!imageFailed && <img className="hero-photo" src={publicAsset('profile.jpeg')} alt="Gabriel Arnon" onError={() => setImageFailed(true)} />}
              {imageFailed && <div className="photo-fallback"><strong>GA</strong><span>{t.photoFallback}</span></div>}
              <div className="photo-caption"><span>Gabriel Arnon</span><span>Bertioga, SP</span></div>
            </div>
            <div className="visual-label label-bottom">{t.availability}</div>
          </div>
          <div className="hero-meta"><span className="scroll-mark">↓</span><span>{t.scroll}</span><span className="meta-line" /></div>
        </section>

        <section className="about section-wrap section-grid" id="sobre">
          <div className="section-kicker"><span>{t.aboutLabel}</span><span className="kicker-line" /></div>
          <div className="about-content">
            <h2>{t.aboutTitle}</h2>
            <div className="about-columns"><p>{t.aboutText}</p><p>{t.aboutTextTwo}</p></div>
            <div className="about-facts"><div><strong>{String(featuredProjectCount).padStart(2, '0')}</strong><span>{t.factProjects}</span></div><div><strong>03+</strong><span>{t.factYears}</span></div><div><strong>∞</strong><span>{t.factLearning}</span></div></div>
          </div>
        </section>

        <section className="projects section-wrap section-grid" id="projetos">
          <div className="section-kicker"><span>{t.projectsLabel}</span><span className="kicker-line" /></div>
          <div className="projects-content">
            <div className="section-heading"><h2>{t.projectsTitle}</h2><p>{t.projectsText}</p></div>
            <div className="project-carousel-meta"><span>{t.dragProjects}</span><span aria-hidden="true">↔</span></div>
            <div className="project-list" role="region" aria-label={t.projectsLabel} tabIndex={0} onPointerDown={startProjectDrag} onPointerMove={moveProjectDrag} onPointerUp={endProjectDrag} onPointerCancel={endProjectDrag} onClickCapture={preventDraggedProjectClick} onKeyDown={handleProjectKeyDown}>
              {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} t={t} />)}
            </div>
          </div>
        </section>

        <section className="stack section-wrap section-grid" id="stack">
          <div className="section-kicker"><span>{t.stackLabel}</span><span className="kicker-line" /></div>
          <div className="stack-content"><h2>{t.stackTitle}</h2><p>{t.stackText}</p><div className="stack-cloud">{stack.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}><ToolIcon name={item} /><span>{item}</span></motion.span>)}</div></div>
        </section>

        <section className="experience section-wrap section-grid" id="experiencia">
          <div className="section-kicker"><span>{t.experienceLabel}</span><span className="kicker-line" /></div>
          <div className="experience-content"><h2>{t.experienceTitle}</h2><div className="timeline"><div className="timeline-item"><div className="timeline-date">10.2024 — <span>{t.current}</span></div><div><h3>{t.itRole}</h3><p>{t.intsCompany}</p><small>{t.hospital}</small></div></div><div className="timeline-item"><div className="timeline-date">09.2023 — 08.2024</div><div><h3>{t.customerRole}</h3><p>{t.linkfortCompany}</p><small>{t.location}</small></div></div><div className="timeline-item"><div className="timeline-date">08.2025 — 03.2027</div><div><h3>{t.degree}</h3><p>UniFECAF</p><small>{t.degreeStatus}</small></div></div></div></div>
        </section>

        <section className="contact section-wrap" id="contato"><div className="contact-inner"><div className="section-kicker"><span>{t.contactLabel}</span><span className="kicker-line" /></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="button button-light" href="mailto:gabriel.drtroll@gmail.com">{t.email}<Arrow diagonal /></a><div className="contact-links"><a href="https://github.com/gabriel-arnon" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/gabriel-arnon" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={publicAsset('curriculo.pdf')} target="_blank" rel="noreferrer">{t.resumeLink} · {t.resume}<Arrow diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Gabriel Arnon</span><span>{t.footer}</span><a href="#inicio">{t.backToTop}</a></footer>
      <AnimatePresence>{menuOpen && <motion.div className="menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeMenu} />}</AnimatePresence>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
