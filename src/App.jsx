import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, Github, Menu, X, Terminal, Cpu,
  Network, Code2, Command, ChevronRight, Layers3, ClipboardList,
  Workflow, ShieldCheck
} from 'lucide-react'

const referenceModels = [
  { icon: ClipboardList, title: 'Levantamento de requisitos', text: 'Estrutura genérica para registrar necessidades, escopo e critérios de aceite.' },
  { icon: Workflow, title: 'Mapeamento de fluxos', text: 'Modelo visual para representar etapas, responsáveis e pontos de decisão.' },
  { icon: ShieldCheck, title: 'Matriz de acesso', text: 'Exemplo independente para organizar perfis, permissões e responsabilidades.' },
  { icon: Layers3, title: 'Documentação técnica', text: 'Estrutura-base para registrar componentes, integrações e procedimentos.' }
]

const areas = [
  { icon: Network, title: 'Infraestrutura & Redes', text: 'Fundamentos de redes, conectividade, diagnóstico e compreensão de ambientes de TI.' },
  { icon: Terminal, title: 'Suporte & NOC', text: 'Experiência operacional com triagem técnica, acompanhamento de incidentes e resolução estruturada.' },
  { icon: Code2, title: 'Desenvolvimento', text: 'Prática com interfaces, lógica de programação e evolução incremental de soluções.' },
  { icon: Cpu, title: 'Automação & IA', text: 'Exploração de APIs, ferramentas de IA e automações aplicadas a problemas do cotidiano.' }
]

const github = 'https://github.com/ChesYii19'

function SectionHeading({ eyebrow, title, number }) {
  return <div className="section-heading">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    <span className="section-number">{number}</span>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
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
        <a href="#referencia" onClick={closeMenu}>Referência</a>
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
          <p className="hero-kicker">DAN // TECNOLOGIA // APRENDIZADO // SOLUÇÕES</p>
          <h1>Transformando<br /><span>curiosidade</span> em<br />soluções reais<span className="gold-dot">.</span></h1>
          <p className="hero-description">
            Estudante de TI e profissional de suporte técnico, explorando infraestrutura,
            operações, desenvolvimento e automação na prática.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#referencia">Ver experiência de referência <ArrowDownRight size={17} /></a>
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
          <div className="visual-label label-bottom"><span className="label-icon green"><Cpu size={15} /></span><span>OPERATIONS<br /><b>CONTINUOUS LEARNING</b></span></div>
          <div className="visual-coordinates">N 23°33' // W 46°38'<br />BUILD: 0.1.2</div>
          <div className="visual-corner corner-a" />
          <div className="visual-corner corner-b" />
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">
        <span>SUPORTE TÉCNICO</span><b>✳</b><span>INFRAESTRUTURA</span><b>✳</b><span>OPERAÇÕES</span><b>✳</b><span>DOCUMENTAÇÃO</span><b>✳</b><span>AUTOMAÇÃO</span><b>✳</b><span>SUPORTE TÉCNICO</span>
      </div></div>

      <section className="section-wrap content-section" id="sobre">
        <SectionHeading eyebrow="01 // QUEM ESTÁ POR TRÁS" title="Sobre mim" number="01" />
        <div className="about-grid">
          <div><p className="big-statement">Tecnologia não é só sobre ferramentas. É sobre <em>entender problemas</em> e construir caminhos.</p></div>
          <div className="about-body">
            <p>Minha trajetória passa pelo suporte técnico e pela rotina operacional de TI, incluindo atividades de NOC. Gosto de investigar, entender como as coisas se conectam e transformar conhecimento em algo utilizável.</p>
            <p>Atualmente, curso Tecnologia da Informação e amplio minha base em redes, infraestrutura e desenvolvimento. Também exploro documentação, organização de processos, APIs e ferramentas de inteligência artificial.</p>
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
          {['Windows 10/11', 'Hardware', 'Redes', 'Python', 'JavaScript', 'Git & GitHub', 'APIs', 'Docker', 'Documentação'].map(skill => <b key={skill}>{skill}</b>)}
        </div></div>
      </section>

      <section className="section-wrap content-section" id="referencia">
        <SectionHeading eyebrow="03 // EXPERIÊNCIA E MODELOS" title="CSTL Recovery" number="03" />
        <div className="reference-intro">
          <div>
            <span className="reference-label"><span /> REFERÊNCIA DE EXPERIÊNCIA</span>
            <p>O CSTL Recovery aparece aqui como contexto de experiência prática com a recuperação e evolução de um portal institucional. A menção não representa reivindicação de autoria, titularidade ou propriedade sobre o portal, seu código ou seus ativos.</p>
          </div>
          <div className="reference-note">
            <span>RECORTE DO PORTFÓLIO</span>
            <strong>Contexto, não vitrine de produto.</strong>
            <p>Sem publicação do sistema, de seus dados, telas, código-fonte ou arquitetura interna.</p>
          </div>
        </div>

        <div className="models-heading">
          <div><span className="eyebrow">PRÓXIMA ETAPA // MATERIAL DEMONSTRATIVO</span><h3>Modelos genéricos e independentes</h3></div>
          <span className="models-status">EM PLANEJAMENTO</span>
        </div>
        <p className="models-description">A proposta é transformar aprendizados gerais em materiais de referência criados do zero, sem copiar ou reproduzir componentes, fluxos, dados ou documentação interna do CSTL Recovery.</p>
        <div className="models-grid">
          {referenceModels.map((model, index) => {
            const Icon = model.icon
            return <article className="model-card" key={model.title}>
              <div className="model-card-top"><span className="model-icon"><Icon size={18} /></span><span className="card-index">0{index + 1}</span></div>
              <h4>{model.title}</h4>
              <p>{model.text}</p>
              <span className="model-foot">MODELO DEMONSTRATIVO A DESENVOLVER</span>
            </article>
          })}
        </div>
      </section>

      <section className="section-wrap contact-section" id="contato">
        <div className="contact-panel">
          <div><span className="eyebrow">04 // PRÓXIMA CONEXÃO</span><h2>Vamos construir<br /><em>algo interessante?</em></h2><p>Aberto a conexões, troca de conhecimento e oportunidades na área de tecnologia. O GitHub reúne meus projetos públicos e materiais demonstrativos.</p></div>
          <div className="contact-actions">
            <a href={github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ArrowUpRight size={15} /></a>
            <button onClick={() => setTerminalOpen(!terminalOpen)} aria-expanded={terminalOpen}><Terminal size={18} /> {terminalOpen ? 'Fechar terminal' : 'Abrir terminal'} <ArrowUpRight size={15} /></button>
          </div>
          {terminalOpen && <div className="terminal-box">
            <div><i /><i /><i /><span>nexus@portfolio:~</span></div>
            <p><b>$</b> whoami</p>
            <p className="terminal-output">Dan // Estudante de TI // Suporte técnico.</p>
            <p><b>$</b> echo "Sempre aprendendo."</p>
            <p className="terminal-output">Sempre aprendendo.</p><span className="cursor">▌</span>
          </div>}
        </div>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a className="brand" href="#inicio"><span className="brand-mark"><Command size={16} /></span><span>NEXUS<span className="brand-slash"> //</span></span></a>
      <span>DESIGNED TO LEARN. BUILT TO EVOLVE.</span>
      <span>© 2026 // VERSÃO 0.1.2</span>
    </footer>
  </div>
}

export default App