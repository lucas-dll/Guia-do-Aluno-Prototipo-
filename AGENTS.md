r# Guia do Aluno CEUMA | Grupo M16

## Contexto para quem está começando neste repositório

A pasta PROTOTIPO contém o trabalho acadêmico do M16 no Desafio 1 do Ciclo 2 do CEUMA. Lucas desenvolve no VS Code e alinha o conteúdo com o grupo. Escreva em português do Brasil e explique decisões de código em passos que um estudante de Engenharia da Computação possa reproduzir na apresentação.

O desafio institucional envolve a Central de Atendimento. A equipe escolheu a experiência do aluno, especialmente do calouro. O diagnóstico inicial reuniu relatos de estudantes que desconhecem o AVA ou têm dificuldade para entender procedimentos e prazos. A equipe já preparou síntese, mapa de empatia, conclusão preliminar e fluxograma. Comparou guia passo a passo, assistente com perguntas guiadas e oficina de acolhimento. A proposta escolhida é um guia de consulta pública. A eventual redução de filas e o ganho de autonomia serão avaliados em testes. Evite apresentá-los como resultados medidos.

O estudante pode descobrir o guia em um painel físico, mesmo antes de conhecer o AVA. Cartazes podem indicar a localização do painel. A praça de alimentação é uma sugestão da equipe, ainda sujeita a confirmação. Para demonstrar o projeto basta um notebook simulando a tela. O aluno pode continuar a consulta no celular. A aplicação funciona de forma independente do site e do AVA do CEUMA. A eventual instalação de equipamento pela faculdade é uma etapa posterior.

## Etapas de desenvolvimento

Siga a etapa pedida por Lucas. Para a primeira implementação, entregue a tela inicial, as quatro páginas navegáveis, retorno ao início e o QR funcional. Se o pedido for apenas a estrutura, use somente o título e a navegação nas páginas internas. As seções de conteúdo abaixo são o briefing para quando Lucas solicitar o preenchimento. Se pedir o protótipo com conteúdo, use as respostas deste arquivo e mantenha internas as pendências indicadas.

Inspecione a pasta antes de iniciar o projeto. Use React com JavaScript, Vite e CSS. Reaproveite a configuração e os arquivos úteis que já existirem. Um único aplicativo responsivo atende painel e celular. A navegação é pública. Autenticação institucional, consulta a dados pessoais e entrega real de tarefas acontecem nos serviços oficiais, pelo dispositivo do estudante. Mantenha textos, links e dados dos destinos fáceis de revisar sem duplicá-los entre páginas.

## Tela inicial e navegação

A referência visual na raiz se chama exatamente `referencia.ceuma.png`. Ela mostra o site do CEUMA. Use a organização horizontal da navegação como referência. O conteúdo da campanha, as abas do navegador e o QR do e-MEC pertencem ao print.

1. Na faixa superior do painel, mostrar as quatro abas nesta ordem e com estes textos: **Mapa do campus**, **AVA (Ambiente Virtual de Aprendizagem)**, **FIES e ProUni**, **O que tem no campus?**.
2. Abaixo das abas, centralizar o logo do CEUMA. Usar o arquivo de marca fornecido pelo grupo. Se faltar, usar “CEUMA” em texto provisoriamente e informar Lucas.
3. Logo abaixo, exibir **Guia no seu bolso!** e o QR Code real que abre a página inicial do guia no celular. Manter esses elementos visíveis no notebook de apresentação sem exigir rolagem.
4. No celular, permitir que os controles se reorganizem para caber por inteiro. Usar contraste legível, foco visível e áreas de toque confortáveis. Em cada página, oferecer “Voltar ao início”. Preservar o funcionamento do botão Voltar do navegador.

Gerar o QR a partir de um endereço configurável, por exemplo VITE_GUIA_URL. Usar uma URL publicada ou de rede alcançável pelo celular. Para um ensaio local, iniciar o Vite com npm run dev -- --host 0.0.0.0 e configurar o endereço de rede e a porta reais mostrados no terminal. localhost, 127.0.0.1 e 0.0.0.0 são destinos impróprios para o QR. Se faltar a URL, informar a configuração pendente ao desenvolvedor. A confirmação final é escanear e abrir o guia em outro aparelho.

## Aba AVA | respostas para o aluno

As instruções abaixo usam capturas reais da visão de estudante enviadas por Lucas em 18/11/2026. Preservar os rótulos da interface em negrito. Um único tutorial atende ambos os dispositivos. Se usar imagens, incluir uma observação curta: “As imagens mostram o AVA no computador. No celular, alguns botões podem aparecer em posições diferentes.”

| Pergunta na interface | Texto para o aluno |
|---|---|
| O que é o AVA? | AVA significa Ambiente Virtual de Aprendizagem. É a Sala de Aula Virtual do CEUMA, onde você encontra suas disciplinas, acompanha atividades e prazos, envia tarefas e consulta as notas disponíveis. |
| Onde encontro a Sala de Aula Virtual? | O endereço mostrado nas telas do CEUMA é ead.ceuma.br. Depois de entrar, procure **Meus cursos** para escolher uma disciplina ou **Painel** para consultar atividades. |
| Onde encontro minhas atividades? | Abra **Painel** e procure a **Linha do tempo**. Selecione o título da tarefa para ler as instruções. Você também pode usar **Buscar por tipo de atividade ou nome** ou **Mostrar mais atividades**. |
| Onde vejo o prazo? | Abra a tarefa e procure **Vencimento** para ver o dia e a hora da entrega. **Aberto** indica quando a atividade ficou disponível. A seção **Status de envio** também mostra o **Tempo restante**. Confira o horário de cada tarefa. |
| Como entrego uma atividade? | Abra a tarefa, leia o que foi pedido e selecione **Adicionar envio**. Siga as instruções da própria atividade para inserir o trabalho. Depois, confira **Status de envio** na página da tarefa. |
| Como sei se a entrega deu certo? | Em **Status de envio**, a mensagem **Enviado para avaliação** confirma que o AVA registrou a entrega. Se aparecer **Nenhum envio foi feito ainda**, ainda não há entrega registrada. O campo **Status da avaliação** pode mostrar **Não há notas** mesmo depois do envio. |
| Onde consulto minhas notas? | Abra o menu com as iniciais do seu nome e selecione **Notas**. A tela **Cursos que estou cursando** lista os cursos e a coluna **Nota**. Outro caminho disponível é **Perfil → Relatórios → Visão geral das notas**. |
| Onde encontro o calendário? | Abra o menu com as iniciais do seu nome e selecione **Calendário**. Para conferir a data e a hora de uma entrega específica, abra a tarefa e consulte **Vencimento**. |
| O que faço se o AVA não abrir? | Confira sua conexão e tente abrir a Sala de Aula Virtual novamente. Se o erro continuar, registre a mensagem e o horário, especialmente se houver uma entrega próxima. Se você ainda conseguir navegar no AVA, o rodapé da página de notas oferece **Contate o suporte do site**. |

**Pendências internas do AVA.** As capturas começam com a sessão já aberta. Ainda falta confirmar como o calouro obtém as credenciais de primeiro acesso, quais controles aparecem após “Adicionar envio” para cada tipo de tarefa e qual contato institucional funciona durante uma queda total. Não deduzir nomes de botões de uma instalação genérica do Moodle. Não interpretar um traço na coluna Nota como zero ou média oficial. A orientação sobre indisponibilidade pode ser complementada assim que a equipe verificar o canal externo. Para a ação “Abrir o AVA”, conferir o acesso público a partir de https://ead.ceuma.br/ antes da demonstração.

**Uso dos prints.** Se estiverem disponíveis na pasta, ava-painel.png mostra a linha do tempo, ava-clicando-em-perfil.png mostra o menu das iniciais e ava-entregado.png mostra o estado da entrega. Os demais prints complementam a página inicial, os cursos, a tarefa, o perfil e as notas. A implementação pode avançar com os textos caso os prints estejam apenas no chat. Para exibir imagens no protótipo, use somente recortes relevantes e sem nome, e-mail, links pessoais, abas do navegador ou outras informações do aluno. Evite colocar os originais pessoais no pacote público.

## Aba FIES e ProUni | fluxo e respostas

Na entrada, perguntar **Sobre qual programa você tem dúvida?** Oferecer **FIES — Financiamento estudantil** e **ProUni — Bolsa de estudos**. Manter o programa selecionado visível, permitir trocá-lo e abrir três situações por programa. Cada resposta deve dar uma próxima ação compatível com a situação do estudante.

| Situação | Pergunta do aluno | Resposta para o guia |
|---|---|---|
| Quero me inscrever | Onde vejo os prazos e as condições para participar? | Abra a página do seu programa no Portal Único de Acesso ao Ensino Superior. Consulte o edital e o calendário da edição em que pretende participar. |
| Fui pré-selecionado | O que preciso consultar agora? | Confira as orientações da sua chamada e o prazo da próxima etapa no programa selecionado. Para conferir documentos e forma de apresentação ao CEUMA, consulte a orientação da instituição específica para sua edição e unidade. |
| Já uso o FIES | Com quem verifico uma dúvida sobre renovação do financiamento? | A orientação depende da etapa do seu financiamento. Tenha em mãos a descrição da pendência para consultar o canal responsável pelo seu caso. |
| Já tenho bolsa ProUni | Onde confirmo uma pendência sobre a atualização da minha bolsa? | Consulte a orientação do CEUMA para bolsistas do seu campus e semestre. Ao solicitar ajuda, informe que sua dúvida é sobre a atualização de uma bolsa já concedida. |

Fontes para a seleção: [FIES](https://acessounico.mec.gov.br/fies) e [ProUni](https://acessounico.mec.gov.br/prouni). Associar o botão ao programa escolhido. No painel público, permitir continuar no celular antes de acessar um serviço que exija identificação.

Nas orientações de pré-seleção e de quem já participa, completar a ação com o canal do **procedimento específico** assim que confirmado. Registrar internamente a fonte, edição, campus e data da conferência. Reaproveitar os links de seleção apenas nas dúvidas que eles realmente respondem. Não criar formulários para CPF, renda ou envio de documentos no painel.

Ao escolher **Ainda preciso de ajuda**, apresentar somente canais verificados. Para um atendimento presencial confirmado, mostrar nome do setor, campus, localização e horário conhecido. **Ver caminho até o setor** deve abrir o mapa com o destino já selecionado. Se o atendimento for online, dar acesso ao canal correspondente. Enquanto faltar fonte para um encaminhamento, deixar a ação específica pendente internamente e apresentar apenas a orientação confirmada. Não reutilizar locais e datas de editais anteriores como dados atuais.

## Mapa do campus e O que tem no campus?

O mapa responde **“Como chego a um lugar?”**. O aluno escolhe o destino e vê o caminho a partir do local do painel. A biblioteca e a Central de Atendimento são destinos iniciais sugeridos. Quando a equipe fornecer o percurso, usar referências visuais fáceis de encontrar, como entrada, andar e placa. No celular, identificar a origem como “A partir do painel”. O QR Code não identifica a posição atual do aluno. Enquanto não houver planta ou trajeto validado, manter a página navegável e adiar a exibição da rota.

A aba de serviços responde **“O que a faculdade oferece e como posso usar?”**. A biblioteca é o primeiro destaque escolhido. Exibir seu nome e, conforme o grupo confirmar, os serviços disponíveis, como utilizá-los, horários e destino do mapa. Perguntas candidatas são “Posso estudar na biblioteca?”, “Como consulto o acervo?” e “Como funciona o empréstimo?”. A equipe ainda precisa verificar as respostas para a unidade escolhida. Horários, regras de empréstimo, salas e rotas devem vir da unidade. Um único cadastro de destinos pode servir às duas abas e aos encaminhamentos do FIES e do ProUni.

## Quando considerar a etapa entregue

- Conferir os quatro nomes no menu, na ordem combinada, e testar ida e volta em todas as páginas.
- Conferir a tela inicial em tamanho de notebook e em largura de celular. Verificar toque, teclado, foco e ausência de texto cortado.
- Conferir a URL decodificada do QR. Distinguir a verificação por software do ensaio físico com celular real.
- Se o escopo incluir conteúdo, testar pelo menos dois percursos: localizar uma data de entrega no guia do AVA e encontrar a fonte de seleção do programa escolhido. Verificar que as ações de rota só aparecem para destinos confirmados.
- Executar a compilação e verificações existentes. Informar a Lucas os comandos reais para rodar o projeto e os testes efetivamente realizados.

A equipe apresentará o protótipo, fará teste com alunos e usará os resultados no pitch e no relatório. Um teste simples observa se o calouro encontra a orientação e consegue explicar a próxima ação sem ajuda. As escolhas de conteúdo podem evoluir conforme o grupo confirmar as informações de cada campus.
