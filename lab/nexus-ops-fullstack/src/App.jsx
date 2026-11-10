import { useEffect, useMemo, useState } from 'react'
import {
  Activity, AlertTriangle, ArrowUpRight, Check, ChevronDown, CircleHelp,
  Clock3, Cpu, Database, GitBranch, Layers3, LoaderCircle, Network,
  RefreshCw, Search, Server, ShieldCheck, Terminal, Zap
} from 'lucide-react'

const API = '/api'

function Metric({ label, value, note, icon: Icon, tone = 'cyan' }) {
  return <article className="metric panel">
    <div className="metric-top"><span>{label}</span><Icon size={17} className={`tone-${tone}`} /></div>
    <strong>{value ?? '—'}</strong>
    <small>{note}</small>
  </article>
}

function Status({ value }) {
  const labels = { operational: 'Operacional', degraded: 'Degradado', investigating: 'Investigando', monitoring: 'Monitorando', resolved: 'Resolvido' }
  return <span className={`status status-${value}`}><i />{labels[value] || value}</span>
}

export default function App() {
  const [overview, setOverview] = useState(null)
  const [services, setServices] = useState([])
  const [incidents, setIncidents] = useState([])
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState('')
  const [pipeline, setPipeline] = useState(null)
  const [running, setRunning] = useState(false)
  const [ref, setRef] = useState('main')
  const [lastUpdated, setLastUpdated] = useState(new Date())

  async function loadData() {
    try {
      const [o, s, i] = await Promise.all([
        fetch(`${API}/overview`), fetch(`${API}/services`), fetch(`${API}/incidents`)
      ])
      if (![o, s, i].every(r => r.ok)) throw new Error('A API respondeu com erro.')
      const [ov, sv, iv] = await Promise.all([o.json(), s.json(), i.json()])
      setOverview(ov); setServices(sv); setIncidents(iv)
      setLastUpdated(new Date()); setApiError('')
    } catch (err) {
      setApiError('API indisponível. Inicie o backend Python na porta 8000.')
    } finally { setLoading(false) }
  }

  useEffect(() => { loadData() }, [])

  const filtered = useMemo(() => incidents.filter(item => {
    const matchesQuery = `${item.id} ${item.title} ${item.service}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'all' || item.severity === filter
    return matchesQuery && matchesFilter
  }), [incidents, query, filter])

  async function runPipeline() {
    setRunning(true); setPipeline(null)
    try {
      const response = await fetch(`${API}/pipeline/run`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ref })
      })
      if (!response.ok) throw new Error('Falha ao executar simulação')
      setPipeline(await response.json())
    } catch { setApiError('Não foi possível executar o pipeline. Verifique o backend.') }
    finally { setRunning(false) }
  }

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Layers3 size={21}/></div><div><b>NEXUS<span>//</span></b><small>OPS CONSOLE</small></div></div>
      <div className="workspace"><span className="workspace-dot"/><div><b>LAB ENVIRONMENT</b><small>São Paulo · Demo cluster</small></div><ChevronDown size={14}/></div>
      <div className="nav-label">WORKSPACE</div>
      <nav>
        <a className="nav-item active"><Activity size={17}/> Overview <span className="nav-current"/></a>
        <a className="nav-item"><AlertTriangle size={17}/> Incidents <span className="nav-count">{overview?.active_incidents ?? '—'}</span></a>
        <a className="nav-item"><Server size={17}/> Infrastructure</a>
        <a className="nav-item"><GitBranch size={17}/> Delivery pipeline</a>
      </nav>
      <div className="sidebar-bottom">
        <div className="side-card"><div className="side-card-icon"><CircleHelp size={16}/></div><b>Operations handbook</b><p>Notas e referências do ambiente de demonstração.</p><span>OPEN GUIDE <ArrowUpRight size={12}/></span></div>
        <div className="profile"><div className="avatar">NX</div><div><b>Local operator</b><small>LAB ACCESS</small></div><span className="online-dot"/></div>
      </div>
    </aside>

    <main className="main">
      <header className="topbar"><div className="breadcrumbs">Workspace <span>/</span> <b>Overview</b></div><div className="top-actions"><span className="env-pill"> <i/> DEMO ENVIRONMENT</span><button className="icon-button" onClick={loadData} title="Atualizar"><RefreshCw size={16}/></button><div className="avatar mini">NX</div></div></header>
      <div className="content">
        <section className="page-heading"><div><div className="eyebrow"><span/> OPERATIONS & DELIVERY</div><h1>Command center<span>.</span></h1><p>Visão geral da saúde operacional e do fluxo de entrega.</p></div><div className="updated"><span>LAST SYNC</span><b>{lastUpdated.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit', second:'2-digit'})}</b><button onClick={loadData}><RefreshCw size={13}/> Refresh</button></div></section>

        {apiError && <div className="alert"><AlertTriangle size={17}/><span>{apiError}</span><button onClick={loadData}>Tentar novamente</button></div>}

        <div className="section-heading"><div><span className="section-kicker">01 / LIVE TELEMETRY</span><h2>Operational pulse</h2></div><span className="live-label"><i/> LIVE DATA · MOCK API</span></div>
        <section className="metrics-grid">
          <Metric label="SERVICE AVAILABILITY" value={overview?.availability} note="Meta de referência: 99.9%" icon={ShieldCheck}/>
          <Metric label="ACTIVE INCIDENTS" value={overview?.active_incidents ?? '—'} note="Ocorrências não resolvidas" icon={AlertTriangle} tone="amber"/>
          <Metric label="REQUESTS / MIN" value={overview?.requests_per_minute?.toLocaleString('pt-BR') ?? '—'} note="Volume ilustrativo" icon={Zap}/>
          <Metric label="AVG. API LATENCY" value={overview ? `${overview.avg_latency_ms} ms` : '—'} note="Média ilustrativa" icon={Activity}/>
        </section>

        <div className="two-column">
          <section className="panel section-panel"><div className="panel-heading"><div><span className="section-kicker">02 / SYSTEM STATUS</span><h2>Service health</h2></div><span className="subtle">{overview?.services_online ?? '—'}/{overview?.services_total ?? '—'} healthy</span></div>
            <div className="service-list">{services.map(service => <div className="service-row" key={service.id}><div className="service-icon"><Server size={16}/></div><div className="service-name"><b>{service.name}</b><small>{service.group} · {service.id.toUpperCase()}</small></div><div className="service-latency"><b>{service.latency} ms</b><small>LATENCY</small></div><Status value={service.status}/></div>)}</div>
            <div className="panel-foot"><span><i className="legend-dot green"/> Operational</span><span><i className="legend-dot amber"/> Degraded</span><span>Source: FastAPI</span></div>
          </section>

          <section className="panel section-panel"><div className="panel-heading"><div><span className="section-kicker">03 / DELIVERY</span><h2>Pipeline control</h2></div><span className="subtle"><GitBranch size={13}/> CI / CD LAB</span></div>
            <div className="pipeline-track">{['Source','Build','Test','Release','Deploy'].map((stage, idx) => <div className="pipeline-stage" key={stage}><div className={`stage-node ${pipeline ? 'done' : ''}`}>{pipeline ? <Check size={14}/> : idx + 1}</div><span>{stage}</span>{idx < 4 && <div className={`stage-line ${pipeline ? 'done' : ''}`}/>}</div>)}</div>
            <div className="pipeline-info"><div><small>LAST EXECUTION</small><b>{pipeline ? new Date(pipeline.completed_at).toLocaleTimeString('pt-BR') : 'No runs yet'}</b></div><div><small>BRANCH / REF</small><b>{pipeline?.ref || ref}</b></div></div>
            <div className="run-controls"><label><Terminal size={14}/><input value={ref} onChange={e=>setRef(e.target.value)} aria-label="Git reference" /></label><button className="primary-button" onClick={runPipeline} disabled={running || !ref.trim()}>{running ? <LoaderCircle className="spin" size={15}/> : <Zap size={15}/>} {running ? 'Running...' : 'Run simulation'}</button></div>
            {pipeline && <div className="run-result"><div className="result-title"><Check size={15}/> RUN #{pipeline.run_id} · SUCCESS</div>{pipeline.stages.map(stage=><div className="result-stage" key={stage.name}><Check size={13}/><b>{stage.name}</b><span>{stage.detail}</span></div>)}<small>Simulação local. Nenhum deploy real foi realizado.</small></div>}
          </section>
        </div>

        <section className="panel incidents-panel"><div className="panel-heading"><div><span className="section-kicker">04 / EVENT STREAM</span><h2>Incident log</h2></div><span className="subtle">{filtered.length} records</span></div>
          <div className="table-tools"><label className="search-box"><Search size={15}/><input placeholder="Buscar incidente, serviço..." value={query} onChange={e=>setQuery(e.target.value)}/></label><div className="filter-group">{['all','high','medium','low'].map(f=><button key={f} className={filter===f?'selected':''} onClick={()=>setFilter(f)}>{f==='all'?'All':f}</button>)}</div></div>
          <div className="incident-table"><div className="table-head"><span>INCIDENT</span><span>SERVICE</span><span>SEVERITY</span><span>STATUS</span><span>AGE</span></div>
            {filtered.map(item=><div className="incident-wrap" key={item.id}><button className="incident-row" onClick={()=>setExpanded(expanded===item.id?null:item.id)}><span><b>{item.id}</b><small>{item.title}</small></span><span>{item.service}</span><span className={`severity severity-${item.severity}`}>{item.severity}</span><Status value={item.status}/><span className="age">{item.age}<ChevronDown size={13}/></span></button>{expanded===item.id && <div className="incident-detail"><b>INVESTIGATION NOTE</b><p>{item.description}</p></div>}</div>)}
            {!filtered.length && <div className="empty-state">Nenhum incidente corresponde a essa busca.</div>}
          </div>
          <div className="panel-foot"><span><Database size={13}/> Mock incident dataset</span><span>Expand a record to inspect details</span></div>
        </section>

        <footer><span>NEXUS OPS <b>·</b> OPERATIONS & DELIVERY</span><span>Built for exploration. Powered by React + FastAPI.</span><span>v0.1.0</span></footer>
      </div>
    </main>
  </div>
}