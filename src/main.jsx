import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QRCodeSVG } from 'qrcode.react';
import './styles.css';
import { AvaPage, ProgramsPage } from './GuidePages.jsx';

const pages = [
  { id: 'mapa', title: 'Mapa do campus' },
  { id: 'ava', title: 'AVA (Ambiente Virtual de Aprendizagem)' },
  { id: 'fies-prouni', title: 'FIES e ProUni' },
  { id: 'campus', title: 'O que tem no campus?' },
];

// Sem configuração, permite o QR ao abrir pelo endereço de rede do notebook.
function getGuideUrl() {
  try {
    const configured = import.meta.env.VITE_GUIA_URL?.trim();
    const url = new URL(configured || window.location.href);
    const host = url.hostname.toLowerCase();
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password ||
        host === 'localhost' || host.endsWith('.localhost') ||
        host.startsWith('127.') || ['0.0.0.0', '[::1]', '[::]'].includes(host)) {
      return null;
    }
    url.hash = '';
    url.search = '';
    return url.href;
  } catch {
    return null;
  }
}

function App() {
  const [route, setRoute] = useState(window.location.hash.slice(1));
  const heading = useRef(null);
  const firstRender = useRef(true);
  const page = pages.find((item) => item.id === route);
  const guideUrl = getGuideUrl();

  useEffect(() => {
    const onNavigate = () => setRoute(window.location.hash.slice(1));
    window.addEventListener('hashchange', onNavigate);
    return () => window.removeEventListener('hashchange', onNavigate);
  }, []);

  useEffect(() => {
    document.title = page ? `${page.title} | Guia CEUMA` : 'Guia do Aluno CEUMA';
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus();
    window.scrollTo(0, 0);
  }, [route, page]);

  return (
    <div className="app">
      <a className="skip-link" href="#conteudo" onClick={(event) => {
        event.preventDefault();
        heading.current?.focus();
      }}>Pular para o conteúdo</a>
      <header className="topbar">
        <nav aria-label="Navegação principal">
          {pages.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={page?.id === item.id ? 'page' : undefined}>
              {item.title}
            </a>
          ))}
        </nav>
      </header>

      {page ? (
        <main id="conteudo" className={`inner-page${['ava', 'fies-prouni'].includes(page.id) ? ' guide-page' : ''}`}>
          <h1 ref={heading} tabIndex={-1}>{page.title}</h1>
          {page.id === 'ava' && <AvaPage />}
          {page.id === 'fies-prouni' && <ProgramsPage />}
          <a className="back-link" href="#"><span aria-hidden="true">←</span> Voltar ao início</a>
        </main>
      ) : (
        <main id="conteudo" className="home">
          <div className="identity">
          <img src="/Logo-Ceuma.png" alt="Universidade CEUMA" width={140} />
            <h1 ref={heading} tabIndex={-1}>Guia do Aluno</h1>
          </div>
          <section className="pocket" aria-labelledby="pocket-title">
            <p className="eyebrow">DO PAINEL PARA O CELULAR</p>
            <h2 id="pocket-title">Guia no seu bolso!</h2>
            <p className="intro">Escaneie o QR Code e leve o guia com você.</p>
            <div className="qr-frame">
              {guideUrl ? (
                <QRCodeSVG value={guideUrl} size={184} level="M" marginSize={4}
                  title="QR Code para abrir a página inicial do Guia do Aluno CEUMA" />
              ) : (
                <p className="qr-pending">QR Code disponível após configurar o endereço do guia.</p>
              )}
            </div>
            {guideUrl && <a className="mobile-link" href={guideUrl}>Abrir o guia neste aparelho <span aria-hidden="true">↗</span></a>}
          </section>
        </main>
      )}
      <footer><span>Guia do Aluno CEUMA</span><span>Protótipo acadêmico · Grupo M16</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
