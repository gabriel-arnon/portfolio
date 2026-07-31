import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'motion/react'
import { gsap } from 'gsap'
import './styles.css'

const content = {
  pt: {
    nav: ['Início', 'Sobre', 'Projetos', 'Experiência', 'Contato'],
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
    inProgress: 'Em desenvolvimento',
    printops: 'Plataforma de monitoramento para ambientes hospitalares: coleta via SNMP, descoberta automática, dashboard em tempo real, métricas históricas, toner, unidade de imagem e autenticação JWT.',
    printopsRepo: 'Ver repositório',
    financy: 'Plataforma SaaS para organização financeira pessoal, com transações, contas, cartões, categorias, importações e automações.',
    nexahelp: 'Copiloto corporativo com IA generativa para consultar procedimentos e políticas internas com fontes verificáveis.',
    nexahelpTag: 'Projeto acadêmico',
    landingPage: 'Landing page institucional para um escritório de advocacia, com foco em clareza, confiança e conversão de contatos.',
    landingPageTag: 'Landing page',
    visitSite: 'Visitar site',
    stackLabel: '03 — Stack',
    stackTitle: 'Ferramentas que fazem parte do meu dia a dia.',
    stackText: 'Uma base em evolução contínua, escolhida para resolver problemas com clareza e consistência.',
    experienceLabel: '04 — Trajetória',
    experienceTitle: 'Experiência que conecta pessoas, sistemas e soluções.',
    current: 'Atual',
    degree: 'Ensino Superior · Inteligência Artificial e Automação Digital',
    contactLabel: '05 — Vamos conversar?',
    contactTitle: <>Tem um problema interessante?<br /><em>Vamos construir algo.</em></>,
    contactText: 'Estou aberto a oportunidades, projetos e conversas sobre tecnologia.',
    email: 'Enviar um email',
    resume: 'Baixar currículo',
    footer: 'Feito com curiosidade, código e café.'
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Experience', 'Contact'],
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
    inProgress: 'In progress',
    printops: 'A monitoring platform for hospital environments: SNMP collection, automatic discovery, real-time dashboard, historical metrics, toner, image unit and JWT authentication.',
    printopsRepo: 'View repository',
    financy: 'A SaaS platform for personal finance, with transactions, accounts, cards, categories, imports and automations.',
    nexahelp: 'An AI-powered corporate copilot for querying internal procedures and policies with verifiable sources.',
    nexahelpTag: 'Academic project',
    landingPage: 'An institutional landing page for a law firm, focused on clarity, trust and contact conversion.',
    landingPageTag: 'Landing page',
    visitSite: 'Visit site',
    stackLabel: '03 — Stack',
    stackTitle: 'Tools that are part of my everyday work.',
    stackText: 'A continuously evolving foundation, chosen to solve problems with clarity and consistency.',
    experienceLabel: '04 — Journey',
    experienceTitle: 'Experience connecting people, systems and solutions.',
    current: 'Current',
    degree: 'Higher education · Artificial Intelligence and Digital Automation',
    contactLabel: '05 — Let’s talk?',
    contactTitle: <>Have an interesting problem?<br /><em>Let’s build something.</em></>,
    contactText: 'I am open to opportunities, projects and conversations about technology.',
    email: 'Send an email',
    resume: 'Download resume',
    footer: 'Made with curiosity, code and coffee.'
  }
}

const stack = ['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Git', 'n8n', 'AI']
const publicAsset = (file) => `${import.meta.env.BASE_URL}${file}`
const printopsShots = [
  {
    src: 'https://github.com/user-attachments/assets/5baa8d6b-d3fb-4839-953f-f6ec59238f98',
    alt: 'Dashboard do PrintOps com métricas da frota de impressoras'
  },
  {
    src: 'https://github.com/user-attachments/assets/1d5caf3a-b028-47f5-98f3-f22a5f01d2b2',
    alt: 'Tabela de impressoras monitoradas no PrintOps'
  },
  {
    src: 'https://github.com/user-attachments/assets/72e738d8-f515-4742-a000-6360f5c4a940',
    alt: 'Detalhes de uma impressora no PrintOps'
  },
  {
    src: 'https://github.com/user-attachments/assets/49944e46-d62a-445f-bdbb-7f7cd4be0355',
    alt: 'Tela de descoberta de impressoras do PrintOps'
  }
]

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

function App() {
  const [language, setLanguage] = useState('pt')
  const [menuOpen, setMenuOpen] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const [printopsShotIndex, setPrintopsShotIndex] = useState(0)
  const heroRef = useRef(null)
  const t = content[language]

  useEffect(() => {
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell" ref={heroRef}>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Gabriel Arnon, início">GA<span>.</span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          {t.nav.map((item, index) => <a href={`#${['inicio', 'sobre', 'projetos', 'experiencia', 'contato'][index]}`} key={item} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Escolher idioma">
            <button className={language === 'pt' ? 'active' : ''} onClick={() => setLanguage('pt')}>PT</button>
            <span>/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
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
            <div className="hero-socials" aria-label="Links rápidos">
              <a className="hero-social" href="https://github.com/gabriel-arnon" target="_blank" rel="noreferrer" aria-label="GitHub de Gabriel Arnon"><span className="social-icon"><SocialIcon name="github" /></span><span>GitHub</span><Arrow diagonal /></a>
              <a className="hero-social" href="https://www.linkedin.com/in/gabriel-arnon" target="_blank" rel="noreferrer" aria-label="LinkedIn de Gabriel Arnon"><span className="social-icon"><SocialIcon name="linkedin" /></span><span>LinkedIn</span><Arrow diagonal /></a>
              <a className="hero-social" href="mailto:gabriel.drtroll@gmail.com" aria-label="Enviar email para Gabriel Arnon"><span className="social-icon"><SocialIcon name="mail" /></span><span>Email</span><Arrow diagonal /></a>
              <a className="hero-social" href={publicAsset('curriculo.pdf')} target="_blank" rel="noreferrer" aria-label="Abrir currículo de Gabriel Arnon"><span className="social-icon"><SocialIcon name="resume" /></span><span>CV</span><Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label label-top">01 / 05</div>
            <div className="hero-orbit" aria-hidden="true"><span>FULL STACK · AUTOMATION · AI · </span></div>
            <div className="photo-frame">
              {!imageFailed && <img className="hero-photo" src={publicAsset('profile.jpeg')} alt="Gabriel Arnon" onError={() => setImageFailed(true)} />}
              {imageFailed && <div className="photo-fallback"><strong>GA</strong><span>adicione<br />profile.jpeg</span></div>}
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
            <div className="about-facts"><div><strong>02</strong><span>projetos autorais</span></div><div><strong>03+</strong><span>anos em tecnologia</span></div><div><strong>∞</strong><span>vontade de aprender</span></div></div>
          </div>
        </section>

        <section className="projects section-wrap section-grid" id="projetos">
          <div className="section-kicker"><span>{t.projectsLabel}</span><span className="kicker-line" /></div>
          <div className="projects-content">
            <div className="section-heading"><h2>{t.projectsTitle}</h2><p>{t.projectsText}</p></div>
            <div className="project-list">
              <motion.article className="project-card project-dark" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className="project-art printops-art screenshot-art">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.img className="project-screenshot" key={printopsShots[printopsShotIndex].src} src={printopsShots[printopsShotIndex].src} alt={printopsShots[printopsShotIndex].alt} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }} />
                  </AnimatePresence>
                  <div className="screenshot-shade" />
                  <div className="shot-controls" aria-label="Navegar pelas imagens do PrintOps">
                    <button type="button" aria-label="Imagem anterior" onClick={(event) => { event.stopPropagation(); setPrintopsShotIndex((current) => (current - 1 + printopsShots.length) % printopsShots.length) }}>←</button>
                    <span>{String(printopsShotIndex + 1).padStart(2, '0')} / {String(printopsShots.length).padStart(2, '0')}</span>
                    <button type="button" aria-label="Próxima imagem" onClick={(event) => { event.stopPropagation(); setPrintopsShotIndex((current) => (current + 1) % printopsShots.length) }}>→</button>
                  </div>
                  <span className="art-index">01</span>
                </div>
                <div className="project-info"><div><span className="project-tag">{t.inProgress}</span><h3>PrintOps</h3></div><span className="project-arrow">↗</span><p>{t.printops}</p><div className="project-tech"><span>Python</span><span>FastAPI</span><span>React</span><span>PostgreSQL</span><span>SNMP</span></div><a className="project-repo" href="https://github.com/gabriel-arnon/PrintOps" target="_blank" rel="noreferrer">{t.printopsRepo}<Arrow diagonal /></a></div>
              </motion.article>
              <motion.article className="project-card project-nexa" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className="project-art nexa-art"><div className="nexa-mark"><span>✦</span><strong>Nexa<span>Help</span></strong><small>AI / KNOWLEDGE SYSTEM</small></div><div className="nexa-chat"><i /><i /><i /></div><span className="art-index">02</span></div>
                <div className="project-info"><div><span className="project-tag">{t.nexahelpTag}</span><h3>NexaHelp AI</h3></div><span className="project-arrow">↗</span><p>{t.nexahelp}</p><div className="project-tech"><span>React</span><span>TypeScript</span><span>TanStack</span><span>OpenAI</span><span>Vitest</span></div><div className="project-links"><a className="project-repo" href="https://github.com/gabriel-arnon/nexahelp" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a className="project-repo" href="https://nexahelp.vercel.app/" target="_blank" rel="noreferrer">{t.visitSite}<Arrow diagonal /></a></div></div>
              </motion.article>
              <motion.article className="project-card project-almeida" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className="project-art almeida-art screenshot-art"><img className="project-screenshot" src="https://raw.githubusercontent.com/gabriel-arnon/almeida-junior-advogado/main/public/images/og-image.png" alt="Landing page Almeida Junior Advogado" /><div className="screenshot-shade" /><span className="art-index">03</span></div>
                <div className="project-info"><div><span className="project-tag">{t.landingPageTag}</span><h3>Almeida Junior Advogado</h3></div><span className="project-arrow">↗</span><p>{t.landingPage}</p><div className="project-tech"><span>Next.js</span><span>TypeScript</span><span>Tailwind</span><span>Playwright</span></div><div className="project-links"><a className="project-repo" href="https://github.com/gabriel-arnon/almeida-junior-advogado" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a className="project-repo" href="https://www.almeidajunioradvogado.com.br" target="_blank" rel="noreferrer">{t.visitSite}<Arrow diagonal /></a></div></div>
              </motion.article>
              <motion.article className="project-card project-accent" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className="project-art financy-art"><div className="finance-card"><span>saldo total</span><strong>R$ 8.420,00</strong><div className="finance-line" /></div><div className="finance-pills"><i /><i /><i /></div><span className="art-index">04</span></div>
                <div className="project-info"><div><span className="project-tag">{t.inProgress}</span><h3>Financy</h3></div><span className="project-arrow">↗</span><p>{t.financy}</p><div className="project-tech"><span>Next.js</span><span>TypeScript</span><span>PostgreSQL</span><span>Supabase</span></div></div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="stack section-wrap section-grid" id="stack">
          <div className="section-kicker"><span>{t.stackLabel}</span><span className="kicker-line" /></div>
          <div className="stack-content"><h2>{t.stackTitle}</h2><p>{t.stackText}</p><div className="stack-cloud">{stack.map((item, index) => <motion.span key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}>{item}</motion.span>)}</div></div>
        </section>

        <section className="experience section-wrap section-grid" id="experiencia">
          <div className="section-kicker"><span>{t.experienceLabel}</span><span className="kicker-line" /></div>
          <div className="experience-content"><h2>{t.experienceTitle}</h2><div className="timeline"><div className="timeline-item"><div className="timeline-date">10.2024 — <span>{t.current}</span></div><div><h3>Técnico de TI</h3><p>INTS — Instituto Nacional de Tecnologia e Saúde</p><small>Hospital Municipal de Bertioga</small></div></div><div className="timeline-item"><div className="timeline-date">09.2023 — 08.2024</div><div><h3>Líder de atendimento ao cliente</h3><p>Linkfort Telecom</p><small>Bertioga, São Paulo</small></div></div><div className="timeline-item"><div className="timeline-date">08.2025 — 03.2027</div><div><h3>{t.degree}</h3><p>UniFECAF</p><small>Em andamento</small></div></div></div></div>
        </section>

        <section className="contact section-wrap" id="contato"><div className="contact-inner"><div className="section-kicker"><span>{t.contactLabel}</span><span className="kicker-line" /></div><h2>{t.contactTitle}</h2><p>{t.contactText}</p><a className="button button-light" href="mailto:gabriel.drtroll@gmail.com">{t.email}<Arrow diagonal /></a><div className="contact-links"><a href="https://github.com/gabriel-arnon" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/gabriel-arnon" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href={publicAsset('curriculo.pdf')} target="_blank" rel="noreferrer">Currículo · {t.resume}<Arrow diagonal /></a></div></div></section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Gabriel Arnon</span><span>{t.footer}</span><a href="#inicio">Voltar ao topo ↑</a></footer>
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
