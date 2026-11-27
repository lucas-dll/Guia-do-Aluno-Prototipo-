import React, { useState } from 'react';
import './guide-pages.css';

// Textos confirmados no AGENTS.md. Canais individuais e rotas aguardam validação do grupo.
const sources = {
  ava: 'https://ead.ceuma.br/',
  fies: 'https://acessounico.mec.gov.br/fies',
  prouni: 'https://acessounico.mec.gov.br/prouni',
};

function Question({ title, children }) {
  return (
    <details className="guide-question">
      <summary><span>{title}</span><span className="guide-chevron" aria-hidden="true" /></summary>
      <div className="guide-answer">{children}</div>
    </details>
  );
}

function Topic({ title, children }) {
  return <section className="guide-topic"><h2>{title}</h2><div className="guide-list">{children}</div></section>;
}

export function AvaPage() {
  return (
    <div className="guide-content">
      <p className="guide-intro">O AVA é a Sala de Aula Virtual do CEUMA, onde você encontra disciplinas, acompanha atividades e prazos, envia tarefas e consulta as notas disponíveis.</p>

      <Topic title="Acesso e disciplinas">
        <Question title="Onde acesso o AVA do CEUMA?">
          <p>Acesse a Sala de Aula Virtual pelo endereço <strong>ead.ceuma.br</strong>.</p>
          <a className="guide-action" href={sources.ava}>Abrir o AVA <span aria-hidden="true">↗</span></a>
          <p className="guide-note">No painel público, continue no seu celular pelo QR Code da tela inicial antes de entrar na sua conta.</p>
        </Question>
        <Question title="Onde encontro minhas disciplinas?">
          <p>Depois de entrar no AVA, procure <strong>Meus cursos</strong> e escolha uma disciplina. Para consultar atividades, abra <strong>Painel</strong>.</p>
        </Question>
      </Topic>

      <Topic title="Atividades e entregas">
        <Question title="Onde vejo as atividades e os prazos?">
          <ol>
            <li>Abra <strong>Painel</strong> e procure a <strong>Linha do tempo</strong>.</li>
            <li>Selecione o título da tarefa para ler as instruções. Você também pode usar <strong>Buscar por tipo de atividade ou nome</strong> ou <strong>Mostrar mais atividades</strong>.</li>
            <li>Na tarefa, procure <strong>Vencimento</strong> para conferir o dia e a hora da entrega.</li>
          </ol>
          <p><strong>Aberto</strong> indica quando a atividade ficou disponível. A seção <strong>Status de envio</strong> também mostra o <strong>Tempo restante</strong>. Confira o horário de cada tarefa.</p>
        </Question>
        <Question title="Como entrego uma atividade?">
          <ol>
            <li>Abra a tarefa e leia o que foi pedido.</li>
            <li>Selecione <strong>Adicionar envio</strong> e siga as instruções da própria atividade para inserir o trabalho.</li>
            <li>Depois, confira <strong>Status de envio</strong> na página da tarefa.</li>
          </ol>
        </Question>
        <Question title="Como sei se minha entrega deu certo?">
          <p>Em <strong>Status de envio</strong>, a mensagem <strong>Enviado para avaliação</strong> confirma que o AVA registrou sua entrega, mesmo que o campo <strong>Status da avaliação</strong> ainda mostre <strong>Não há notas</strong>.</p>
          <p>Se aparecer <strong>Nenhum envio foi feito ainda</strong>, ainda não há entrega registrada.</p>
        </Question>
      </Topic>

      <Topic title="Notas e suporte">
        <Question title="Onde consulto minhas notas?">
          <p>Abra o menu com as iniciais do seu nome e selecione <strong>Notas</strong>. A tela <strong>Cursos que estou cursando</strong> lista os cursos e a coluna <strong>Nota</strong>.</p>
          <p>Outro caminho disponível é <strong>Perfil → Relatórios → Visão geral das notas</strong>.</p>
        </Question>
        <Question title="O que faço se o AVA não abrir?">
          <p>Confira sua conexão e tente abrir a Sala de Aula Virtual novamente. Se o erro continuar, registre a mensagem e o horário, especialmente se houver uma entrega próxima.</p>
          <p>Se você ainda conseguir navegar no AVA, o rodapé da página de notas oferece <strong>Contate o suporte do site</strong>.</p>
        </Question>
      </Topic>
    </div>
  );
}

const programs = {
  fies: { name: 'FIES', description: 'Financiamento estudantil', ongoing: 'Já uso o FIES' },
  prouni: { name: 'ProUni', description: 'Bolsa de estudos', ongoing: 'Já tenho bolsa ProUni' },
};

export function ProgramsPage() {
  const [selected, setSelected] = useState('');
  const program = programs[selected];

  return (
    <div className="guide-content">
      <fieldset className="program-selector">
        <legend>Sobre qual programa você tem dúvida?</legend>
        <div className="program-options">
          {Object.entries(programs).map(([id, item]) => (
            <label key={id} className={selected === id ? 'program-option selected' : 'program-option'}>
              <input type="radio" name="program" value={id} checked={selected === id} onChange={() => setSelected(id)} />
              <span><strong>{item.name}</strong><span> — {item.description}</span></span>
            </label>
          ))}
        </div>
      </fieldset>

      {program && (
        <div key={selected}>
          <p className="program-current" role="status">Programa selecionado: <strong>{program.name}</strong>. Você pode trocar a opção acima.</p>
          <Topic title={`Orientações sobre ${program.name}`}>
            <Question title="Quero me inscrever">
              <p>Abra a página do <strong>{program.name}</strong> no Portal Único de Acesso ao Ensino Superior. Consulte o edital e o calendário da edição em que pretende participar para conferir os prazos e as condições de participação.</p>
              <a className="guide-action" href={sources[selected]}>Consultar inscrição no {program.name} <span aria-hidden="true">↗</span></a>
              <p className="guide-note">Vai acessar um serviço que pede identificação? Continue no seu celular usando o QR Code da tela inicial.</p>
            </Question>
            <Question title="Fui pré-selecionado. E agora?">
              <p>Confira as orientações da sua chamada do <strong>{program.name}</strong> e o prazo da próxima etapa.</p>
              <p>Para conferir documentos e forma de apresentação ao CEUMA, consulte a orientação da instituição específica para sua edição e unidade.</p>
            </Question>
            <Question title={program.ongoing}>
              {selected === 'fies' ? (
                <><p>A orientação sobre renovação depende da etapa do seu financiamento.</p><p>Tenha em mãos a descrição da pendência para consultar o canal responsável pelo seu caso.</p></>
              ) : (
                <><p>Consulte a orientação do CEUMA para bolsistas do seu campus e semestre.</p><p>Ao solicitar ajuda, informe que sua dúvida é sobre a atualização de uma bolsa já concedida.</p></>
              )}
            </Question>
          </Topic>
        </div>
      )}
    </div>
  );
}
