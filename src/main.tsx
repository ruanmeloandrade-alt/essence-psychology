import React from "react";
import { createRoot } from "react-dom/client";
import { Brain, CalendarCheck, CheckCircle2, Lock, MessageCircle, Sparkles, Target } from "lucide-react";
import "./styles.css";

const calendly = "https://calendly.com/rbmidia/reuniao-de-automacao-e-trafego-pago";
const whatsapp = "https://wa.me/5522997330669?text=Quero%20agendar%20uma%20sess%C3%A3o";

const services = [
  [Brain, "Atendimento Psicologico Individual", "Sessoes individuais focadas nas suas necessidades especificas, em ambiente confidencial e acolhedor."],
  [Sparkles, "Acompanhamento Emocional Continuo", "Processo terapeutico estruturado para promover evolucao constante na saude emocional e mental."],
  [Target, "Terapia para Alta Performance", "Abordagem direcionada para profissionais que precisam manter clareza e equilibrio sob alta exigencia."],
  [Lock, "Atendimento Personalizado e Confidencial", "Cada processo e unico, adaptado ao seu ritmo, demandas e momento de vida."],
] as const;

function App() {
  return (
    <main>
      <section className="hero">
        <nav><strong>Essence Psychology</strong><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></nav>
        <div className="heroContent">
          <p className="eyebrow">Milena Melo Psicologa</p>
          <h1>Clareza emocional para quem precisa tomar decisoes importantes</h1>
          <p className="lead">Atendimento psicologico exclusivo para empresarios, executivos e profissionais que lidam com alta pressao.</p>
          <div className="actions">
            <a className="button primary" href={calendly} target="_blank" rel="noreferrer"><CalendarCheck size={20} /> Agendar sessao</a>
            <a className="button secondary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section intro">
        <p className="eyebrow">Psicologia para alta demanda</p>
        <h2>Um espaco reservado para organizar pensamentos, regular emocoes e sustentar decisoes com mais presenca.</h2>
      </section>

      <section className="section services">
        {services.map(([Icon, title, description], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Para quem</p>
          <h2>Empresarios, lideres e profissionais que carregam pressao constante.</h2>
        </div>
        <ul>
          <li><CheckCircle2 /> Decisoes de alto impacto</li>
          <li><CheckCircle2 /> Sobrecarga mental e emocional</li>
          <li><CheckCircle2 /> Necessidade de sigilo e escuta qualificada</li>
          <li><CheckCircle2 /> Busca por clareza e estabilidade interna</li>
        </ul>
      </section>

      <section className="section cta">
        <p className="eyebrow">Comece com uma conversa</p>
        <h2>Agende uma sessao ou fale pelo WhatsApp.</h2>
        <a className="button primary" href={calendly} target="_blank" rel="noreferrer">Agendar sessao</a>
      </section>

      <footer>© {new Date().getFullYear()} Milena Melo — Psicologa | CRP 05/85609</footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
