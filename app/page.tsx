import Image from "next/image";

const concerns = [
  "Informações espalhadas",
  "Retrabalho recorrente",
  "Conferências manuais",
  "Relatórios demorados",
  "Baixa clareza operacional",
];

const pillars = [
  {
    number: "01",
    title: "Relatórios operacionais",
    text: "Transforme dados recorrentes em informações mais claras para acompanhamento.",
  },
  {
    number: "02",
    title: "Automação de planilhas e dados",
    text: "Reduza tarefas repetitivas, padronize informações e facilite controles do dia a dia.",
  },
  {
    number: "03",
    title: "Organização de processos administrativos",
    text: "Estruture etapas, responsabilidades e pontos de retrabalho.",
  },
];

const steps = [
  { title: "Entender", text: "Mapeamos a rotina atual, os dados usados e onde o trabalho perde tempo." },
  { title: "Organizar", text: "Definimos critérios, responsabilidades e o fluxo que precisa ganhar clareza." },
  { title: "Automatizar", text: "Criamos uma solução simples, alinhada à realidade da operação." },
  { title: "Acompanhar", text: "Orientamos o uso inicial e ajustamos o fluxo quando necessário." },
];

const statements = [
  "Automação não é sobre complicar a operação. É sobre tornar o que se repete mais simples, claro e confiável.",
  "Quando a rotina ganha padrão, a equipe ganha clareza para decidir com mais segurança.",
  "Informações organizadas reduzem ruído e tornam o acompanhamento mais previsível.",
];

const before = ["Conferência manual", "Dados repetidos", "Informações espalhadas", "Retrabalho recorrente"];
const after = ["Informações organizadas", "Critérios padronizados", "Acompanhamento mais claro", "Saída estruturada"];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <section className="hero" id="inicio">
        <header className="site-header" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Ergora, início"><Image src="/assets/ergora-carbon-horizontal.png" alt="" width={1392} height={352} priority /></a>
          <nav aria-label="Seções da página">
            <a href="#desafio">Desafio</a>
            <a href="#solucoes">Soluções</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <div className="hero-grid" id="conteudo">
          <div className="hero-copy">
            <p className="eyebrow">Automação administrativa</p>
            <h1>Automação para rotinas administrativas e relatórios operacionais.</h1>
            <p className="lead">A Ergora organiza informações, reduz retrabalho e transforma processos manuais em fluxos mais claros, consistentes e fáceis de acompanhar.</p>
            <div className="hero-actions">
              <a className="button primary-button" href="mailto:contato@ergora.com.br?subject=Quero%20organizar%20uma%20rotina">Quero organizar uma rotina <span aria-hidden="true">{"\u2197\uFE0E"}</span></a>
              <a className="text-link" href="#como-funciona">Entender como funciona <span aria-hidden="true">↓</span></a>
            </div>
          </div>

          <div className="operations-panel" aria-label="Fluxo operacional Ergora">
            <div className="panel-header"><span>Rotina 01</span><span>Fluxo claro</span></div>
            <div className="flow">
              <div><span>Entrada</span><strong>Dados recorrentes</strong></div>
              <div><span>Organização</span><strong>Padrão e critério</strong></div>
              <div><span>Saída</span><strong>Relatório confiável</strong></div>
            </div>
            <div className="panel-footer"><span>menos dispersão</span><span>mais previsibilidade</span></div>
          </div>
        </div>
      </section>

      <section className="section light problem" id="desafio">
        <div className="section-grid">
          <div><p className="eyebrow dark">O desafio</p><h2>O trabalho se perde quando a rotina não tem clareza.</h2></div>
          <div className="problem-detail">
            <p className="section-text">Planilhas espalhadas, conferências repetitivas e relatórios feitos manualmente consomem tempo, aumentam o risco de erro e dificultam enxergar o que acontece no dia a dia.</p>
            <ul className="concern-list" aria-label="Problemas comuns">
              {concerns.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section light solutions" id="solucoes">
        <div className="section-heading split-heading">
          <div><p className="eyebrow dark">Frentes práticas</p><h2>Organizar o que se repete.</h2></div>
          <p>Automação aplicada à rotina real, com foco em informação útil, menos etapas manuais e mais consistência.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <div className="card-index">{pillar.number}</div><span className="card-line" aria-hidden="true" />
              <h3>{pillar.title}</h3><p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="Manifesto Ergora">
        <div className="statement-slider" aria-live="off">
          <div className="statement-counter" aria-hidden="true">
            <span>Manifesto / 01</span>
            <span>Manifesto / 02</span>
            <span>Manifesto / 03</span>
          </div>
          {statements.map((statement) => <p className="statement-slide" key={statement}>{statement}</p>)}
          <div className="statement-markers" aria-hidden="true"><span /><span /><span /></div>
        </div>
      </section>

      <section className="section practical" id="aplicacao">
        <div className="practical-intro">
          <p className="eyebrow dark">Exemplo de aplicação</p>
          <h2>De uma rotina dispersa para um fluxo mais claro.</h2>
          <p>Uma demonstração conceitual de como organizar uma rotina administrativa.</p>
        </div>
        <div className="comparison" aria-label="Comparação conceitual antes e depois">
          <article className="compare-card before-card">
            <div className="compare-label"><span>Antes</span></div>
            <ul>{before.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <div className="flow-shift" aria-hidden="true"><span>→</span></div>
          <article className="compare-card after-card">
            <div className="compare-label"><span>Depois</span></div>
            <ul>{after.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section light process" id="como-funciona">
        <div className="section-heading split-heading">
          <div><p className="eyebrow dark">Como funciona</p><h2>Como trabalhamos</h2></div>
          <p>Quatro etapas para entender o problema antes de definir a automação.</p>
        </div>
        <div className="steps" aria-label="Etapas de trabalho">
          {steps.map((step, index) => <article className="step" key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
        </div>
      </section>

      <section className="final-call" id="contato">
        <div className="contact-copy"><p className="eyebrow">Vamos conversar</p><h2>Qual rotina está consumindo tempo demais?</h2><p>Conte qual rotina consome tempo, como ela é feita hoje e onde aparece mais retrabalho.</p></div>
        <div className="contact-block">
          <a className="button light-button" href="mailto:contato@ergora.com.br?subject=Quero%20organizar%20uma%20rotina">Quero organizar uma rotina <span aria-hidden="true">{"\u2197\uFE0E"}</span></a>
        </div>
      </section>

      <footer>
        <div><a className="brand footer-brand" href="#inicio" aria-label="Ergora, voltar ao início"><Image src="/assets/ergora-carbon-horizontal.png" alt="" width={1392} height={352} /></a><p>Automação para rotinas administrativas e relatórios operacionais.</p></div>
        <div><a href="mailto:contato@ergora.com.br">contato@ergora.com.br</a><span>© {new Date().getFullYear()} Ergora Automações</span></div>
      </footer>
    </main>
  );
}
