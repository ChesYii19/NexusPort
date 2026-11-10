# NEXUS // Portfólio de Tecnologia

Portfólio pessoal desenvolvido com React + Vite. O projeto apresenta a trajetória em TI, competências em desenvolvimento e projetos publicados no GitHub.

## Stack

- React 18
- Vite 6
- JavaScript (ES Modules)
- Lucide React
- CSS responsivo

## Rodar no GitHub Codespaces

1. Abra este repositório no GitHub.
2. Clique em **Code → Codespaces → Create codespace on main**.
3. No terminal do Codespace, instale as dependências e inicie o Vite:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

4. Abra a porta `5173` na aba **Ports** do Codespaces.

Também funciona localmente com Node.js 20 LTS ou superior usando os mesmos comandos.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais são gerados na pasta `dist/`.

## Publicação no GitHub Pages

O deploy é automatizado por GitHub Actions em `.github/workflows/deploy.yml`. A build aplica automaticamente o caminho `/NexusPort/` quando executada no GitHub Actions; no desenvolvimento local e no Codespaces, o Vite usa a raiz.

Na primeira publicação, confirme em **Settings → Pages** que a fonte está configurada como **GitHub Actions**. Depois, cada push na branch `main` executa a build e publica o site.

Endereço esperado: <https://chesyii19.github.io/NexusPort/>

## Conteúdo e manutenção

- O conteúdo dos quatro projetos aponta para seus repositórios reais.
- Atualize as descrições quando os projetos evoluírem.
- Adicione links de contato adicionais somente quando os endereços estiverem definidos.
- Evite publicar credenciais, tokens, dados pessoais ou arquivos `.env`.

## Estrutura

```text
NexusPort/
├── .github/workflows/deploy.yml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```
