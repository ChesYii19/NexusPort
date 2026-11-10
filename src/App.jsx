import { useMemo, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Menu, X, Terminal, Cpu,
  Network, Code2, Workflow, Command, ChevronRight, Layers3, Sparkles
} from 'lucide-react'

const projects = [
  {
    name: 'CST Portal Recovery',
    category: 'Infraestrutura',
    status: 'Em evolução',
    description: 'Portal interno de gestão com autenticação, usuários, documentos, tarefas e dados tabulares. Projeto full-stack com frontend, API e banco relacional.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Drizzle ORM'],
    icon: Layers3,
    accent: 'gold',
    link: 'https://github.com/ChesYii19/CST-Portal-Recovery'
  },
  {
    name: 'CodeNotes',
    category: 'Desenvolvimento',
    status: 'Em construção',
    description: 'Caderno digital local-first para organizar anotações, estudos e conhecimento técnico, com foco em uso offline e controle local dos dados.',
    stack: ['React', 'TypeScript', 'IndexedDB', 'Vite'],
    icon: Code2,
    accent: 'blue',
    link: 'https://github.com/ChesYii19/CodeNotes'
  },
  {
    name: 'DraftLab',
    category: 'Desenvolvimento',
    status: 'MVP em evolução',
    description: 'Laboratório de draft para League of Legends que combina dados de campeões, contexto das composições e heurísticas para apoiar decisões sem inventar estatísticas.',
    stack: ['React', 'TypeScript', 'Data Dragon', 'Testes'],
    icon: Workflow,
    accent: 'purple',
    link: 'https://github.com/ChesYii19/DraftLab'
  },
  {
    name: 'DiceRoller',
    category: 'Automação',
    status: 'Primeira versão',
    description: 'Rolador de dados web com múltiplos tipos, modificadores, histórico persistido no navegador e interface responsiva. Não depende de backend.',
    stack: ['JavaScript', 'CSS', 'localStorage', 'Web'],
    icon: Sparkles,
    accent: 'green',
    link: 'https://github.com/ChesYii19/DiceRoller'
  }
]

const areas = [
  { icon: Network, title: 'Infraestrutura & Redes', text: 'Fundamentos de redes, conectividade, diagnóstico e compreensão de ambientes de TI.' },
  { icon: Terminal, title: 'Suporte & NOC', text: 'Experiência operacional com triagem técnica, acompanhamento de incidentes e resolução estruturada.' },
  { icon: Code2, title: 'Desenvolvimento', text: 'Prática com interfaces, lógica de programação e evolução incremental de projetos próprios.' },
  { icon: Cpu, title: 'Automação & IA', text: 'Exploração de APIs, ferramentas de IA e automações aplicadas a problemas do cotidiano.' }
]

const filters = ['Todos', 'Infraestrutura', 'Desenvolvimento', 'Automação']
const github = 'https://github.com/ChesYii19'

function SectionHeading({ eyebrow, title, number }) {
  return <div className="section-heading">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    <span className="section-number">{number}</span>
  </div>
}

function App() {
  const [filter, setFilter] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const visibleProjects = useMemo(
    () => filter === 'Todos' ? projects : projects.filter(project => project.category === filter),
    [filter]
  )
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="ambient ambient-one" />
    <div className="ambient ambient-two" />

    <header className="topbar">
      <a className="brand" href="#inicio" onClick={closeMenu}>
        <span className="brand-mark"><Command size={18} /></span>
        <span>NEXUS<span className="brand-slash"> //</span></span>
      </a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#competencias" onClick={closeMenu}>Competências</a>
        <a href="#projetos" onClick={closeMenu}>Projetos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
      </nav>
      <a className="top-cta" href={github} target="_blank" rel="noreferrer">
        GitHub <ArrowUpRight size={15} />
      </a>
    </header>

    <main>
      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> PORTFÓLIO EM CONSTRUÇÃO <span className="availability-line" /></div>
          <p className="hero-kicker">TECNOLOGIA // APRENDIZADO // SOLUÇÕES</p>
          <h1>Transformando<br /><span>curiosidade</span> em<br />soluções reais<span className="gold-dot">.</span></h1>
          <p className="hero-description">
            Estudante de TI e profissional de suporte técnico, explorando infraestrutura,
            desenvolvimento, automação e inteligência artificial na prática.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Explorar projetos <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href="#sobre">Conhecer trajetória <ChevronRight size={16} /></a>
          </div>
          <div className="hero-meta">
            <div><span className="meta-label">BASE</span><strong>São Paulo, BR</strong></div>
            <div><span className="meta-label">FOCO</span><strong>TI & Tecnologia</strong></div>
            <div><span className="meta-label">MINDSET</span><strong>Aprender fazendo</strong></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Visualização abstrata do ecossistema NEXUS">
          <div className="visual-topline"><span>SYS_OVERVIEW</span><span className="live"><i /> ONLINE</span></div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="core"><div className="core-inner"><Command size={42} /><span>N</span></div></div>
          <div className="visual-label label-top"><span className="label-icon"><Network size={15} /></span><span>NETWORK<br /><b>FOUNDATIONS</b></span></div>
          <div className="visual-label label-right"><span className="label-icon blue"><Code2 size={15} /></span><span>DEVELOPMENT<br /><b>IN PROGRESS</b></span></div>
          <div className="visual-label label-bottom"><span className="label-icon green"><Cpu size={15} /></span><span>AI & AUTOMATION<br /><b>EXPLORING</b></span></div>
          <div className="visual-coordinates">N 23°33' // W 46°38'<br />BUILD: 0.1.0</div>
          <div className="visual-corner corner-a" />
          <div className="visual-corner corner-b" />
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">
        <span>SUPORTE TÉCNICO</span><b>✳</b><span>INFRAESTRUTURA</span><b>✳</b><span>DESENVOLVIMENTO</span><b>✳</b><span>AUTOMAÇÃO</span><b>✳</b><span>INTELIGÊNCIA ARTIFICIAL</span><b>✳</b><span>SUPORTE TÉCNICO</span>
      </div></div>

      <section className="section-wrap content-section" id="sobre">
        <SectionHeading eyebrow="01 // QUEM ESTÁ POR TRÁS" title="Sobre mim" number="01" />
        <div className="about-grid">
          <div><p className="big-statement">Tecnologia não é só sobre ferramentas. É sobre <em>entender problemas</em> e construir caminhos.</p></div>
          <div className="about-body">
            <p>Minha trajetória passa pelo suporte técnico e pela rotina operacional de TI, incluindo atividades de NOC. Gosto de investigar, entender como as coisas se conectam e transformar conhecimento em algo utilizável.</p>
            <p>Atualmente, curso Tecnologia da Informação e amplio minha base em redes, infraestrutura e desenvolvimento. Em paralelo, construo projetos próprios e experimento APIs, automações e ferramentas de inteligência artificial.</p>
            <div className="principles"><span><i /> Curiosidade prática</span><span><i /> Evolução contínua</span><span><i /> Documentar para aprender</span></div>
          </div>
        </div>
      </section>

      <section className="section-wrap content-section" id="competencias">
        <SectionHeading eyebrow="02 // CAIXA DE FERRAMENTAS" title="Frentes em desenvolvimento" number="02" />
        <div className="areas-grid">
          {areas.map((area, index) => {
            const Icon = area.icon
            return <article className="area-card" key={area.title}>
              <div className="area-card-top"><span className="area-icon"><Icon size={19} /></span><span className="card-index">0{index + 1}</span></div>
              <h3>{area.title}</h3><p>{area.text}</p><div className="card-rule" />
            </article>
          })}
        </div>
        <div className="skill-strip"><span>EM ESTUDO / PRÁTICA</span><div>
          {['Windows 10/11', 'Hardware', 'Redes', 'Python', 'JavaScript', 'TypeScript', 'Git & GitHub', 'APIs', 'Docker'].map(skill => <b key={skill}>{skill}</b>)}
        </div></div>
      </section>

      <section className="section-wrap content-section" id="projetos">
        <SectionHeading eyebrow="03 // FEITO, TESTADO, APRENDIDO" title="Projetos selecionados" number="03" />
        <div className="projects-intro">
          <p>Projetos próprios, experimentos e laboratórios. Cada construção é uma oportunidade de transformar teoria em prática.</p>
          <a href={github} target="_blank" rel="noreferrer" className="text-link">Ver repositórios <ArrowUpRight size={15} /></a>
        </div>
        <div className="filter-row" role="group" aria-label="Filtrar projetos">
          {filters.map(item => <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon
            return <article className={\`project-card accent-\${project.accent}\`} key={project.name}>
              <div className="project-top"><span className="project-icon"><Icon size={20} /></span><span className="project-status"><i />{project.status}</span></div>
              <span className="project-category">{project.category} / 0{index + 1}</span>
              <h3>{project.name}</h3><p>{project.description}</p>
              <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">Explorar projeto <ArrowUpRight size={16} /></a>
            </article>
          })}
        </div>
        <p className="project-note">Projetos em diferentes estágios de desenvolvimento. Consulte cada repositório para ver código, documentação e evolução.</p>
      </section>

      <section className="section-wrap contact-section" id="contato">
        <div className="contact-panel">
          <div><span className="eyebrow">04 // PRÓXIMA CONEXÃO</span><h2>Vamos construir<br /><em>algo interessante?</em></h2><p>Aberto a conexões, troca de conhecimento e oportunidades na área de tecnologia. O GitHub reúne meus projetos e experimentos em andamento.</p></div>
          <div className="contact-actions">
            <a href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a>
            <button onClick={() => setTerminalOpen(!terminalOpen)} aria-expanded={terminalOpen}><Terminal size={18} /> {terminalOpen ? 'Fechar terminal' : 'Abrir terminal'} <ArrowUpRight size={15} /></button>
          </div>
          {terminalOpen && <div className="terminal-box">
            <div><i /><i /><i /><span>nexus@portfolio:~</span></div>
            <p><b>$</b> whoami</p>
            <p className="terminal-output">Estudante de TI // Suporte técnico // Builder in progress.</p>
            <p><b>$</b> echo "Sempre aprendendo."</p>
            <p className="terminal-output">Sempre aprendendo.</p><span className="cursor">▌</span>
          </div>}
        </div>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a className="brand" href="#inicio"><span className="brand-mark"><Command size={16} /></span><span>NEXUS<span className="brand-slash"> //</span></span></a>
      <span>DESIGNED TO LEARN. BUILT TO EVOLVE.</span>
      <span>© 2026 // VERSÃO 0.1.0</span>
    </footer>
  </div>
}

export default App
