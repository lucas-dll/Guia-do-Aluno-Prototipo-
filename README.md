# Guia do Aluno CEUMA · M16

Protótipo acadêmico em React, JavaScript, Vite e CSS. O protótipo contém a tela inicial com logo e QR Code, conteúdo nas páginas AVA e FIES/ProUni e duas páginas de campus ainda em estrutura. A navegação usa fragmentos da URL (`#mapa`, por exemplo), permitindo usar Voltar e Avançar do navegador.

O logo está em `public/Logo-Ceuma.png`. O print de referência foi mantido apenas na cópia local e não integra este repositório.

## Abrir no notebook

Com esta pasta aberta no VS Code, abra **Terminal → Novo Terminal**. É necessário Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Abra o endereço **Local** mostrado no terminal. O terminal deve continuar aberto enquanto usar o protótipo. Para parar, pressione `Ctrl+C`.

## Configurar e testar o QR no celular

1. Conecte notebook e celular à mesma rede Wi-Fi.
2. Copie o endereço **Network** mostrado pelo Vite, incluindo a porta real. Se houver mais de um, use o IP da conexão Wi-Fi do notebook.
3. Copie `.env.example` para `.env.local` dentro desta pasta. Preencha `VITE_GUIA_URL` com aquele endereço. Exemplo ilustrativo (substitua pelo endereço real):

   ```env
   VITE_GUIA_URL=http://192.168.1.10:5173/
   ```

4. Pare o servidor com `Ctrl+C` e execute novamente `npm run dev -- --host 0.0.0.0`. Confira se a porta permanece igual à configurada.
5. Abra o guia no notebook e escaneie o QR com a câmera do celular. Confirme que ele abre a tela inicial e permite navegar nas quatro páginas.

Sem `VITE_GUIA_URL`, abrir o guia pelo endereço **Network** no notebook também gera o QR automaticamente. Ao abrir por `localhost`, aparece um aviso de configuração, pois esse endereço aponta para o próprio aparelho de quem acessa.

Não use `localhost`, `127.0.0.1` ou `0.0.0.0` como destino do QR. Se a rede mudar, confira o IP novamente. Redes de convidados ou da faculdade podem bloquear a comunicação entre aparelhos; nesse caso, tente uma rede que permita essa comunicação. Se necessário, libere somente a porta do servidor no firewall.

## Deixar rodando para a apresentação

Pare o servidor de desenvolvimento com `Ctrl+C`. Para apresentar a versão compilada, configure primeiro `.env.local` com o IP atual e a porta **5173**. Depois execute:

```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 5173 --strictPort
```

Abra o endereço mostrado pelo terminal. Mantenha o notebook ligado, sem suspensão, o terminal aberto e os dois aparelhos na mesma rede. Use `F11` no navegador do notebook se quiser simular um painel em tela cheia. `Ctrl+C` encerra o servidor.

A variável do QR é incorporada durante a compilação: se mudar o endereço, execute `npm run build` novamente antes do preview. A opção `--strictPort` impede que a apresentação mude silenciosamente de porta se 5173 estiver ocupada.

Esse modo serve para a demonstração local. Ele não mantém o guia disponível quando o notebook está desligado. Uma publicação permanente será uma etapa separada.

## Roteiro de demonstração

- Abrir cada aba e conferir o título correspondente.
- Usar “Voltar ao início” nas quatro páginas.
- Usar os botões Voltar e Avançar do navegador.
- Navegar com `Tab` e `Enter` e observar o foco.
- Conferir a tela inicial no notebook e no celular, sem textos cortados.
- Escanear o QR e repetir a navegação no celular.

## Arquivos

- `src/main.jsx`: cadastro único das abas, navegação e geração do QR.
- `src/styles.css`: visual, foco de teclado e adaptação ao celular.
- `.env.example`: modelo de configuração do endereço do guia.
- `package.json` e `package-lock.json`: comandos e dependências.
- `dist/`: versão compilada, gerada por `npm run build`.
- `node_modules/`: dependências locais, necessárias para executar os comandos.

O QR é gerado localmente pela biblioteca, sem enviar o endereço a um serviço externo. Confirmar sua leitura por software não substitui o teste com um celular real.

## Trabalho em grupo

Cada integrante pode clonar este repositório e executar `npm install` e `npm run dev`. Para colaborar, crie uma branch para sua alteração e abra um pull request antes de integrar à `main`.

```bash
git clone https://github.com/lucas-dll/Guia-do-Aluno-Prototipo-.git
cd Guia-do-Aluno-Prototipo-
npm install
npm run dev
```

Configure seu próprio `.env.local` para testar o QR na sua rede. A cópia original de Lucas permanece independente; alterações neste repositório não modificam automaticamente a pasta dele.
