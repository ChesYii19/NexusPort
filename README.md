# NEXUS // Portfólio de Tecnologia

Portfólio pessoal desenvolvido com React + Vite. O foco é apresentar trajetória, áreas de atuação e materiais demonstrativos genéricos para tecnologia.

## Diretriz de apresentação

O **CSTL Recovery** é mencionado exclusivamente como referência de experiência prática relacionada à recuperação e evolução de um portal institucional. Esta menção não reivindica autoria, titularidade ou propriedade sobre o portal, seu código, seus dados, sua identidade visual ou outros ativos.

A seção de modelos demonstrativos apresenta ideias de materiais genéricos que serão criados independentemente, do zero. Não devem reproduzir código-fonte, telas, bases de dados, nomenclaturas, documentação ou arquitetura interna do CSTL Recovery. Antes de publicar qualquer material relacionado ao contexto, confirmar autorização e limites de divulgação com os responsáveis.

Projetos pessoais e acadêmicos que não foram selecionados para divulgação não devem ser adicionados à vitrine.

## Stack

- React 18
- Vite 6
- JavaScript (ES Modules)
- Lucide React
- CSS responsivo

## Rodar no GitHub Codespaces

1. Abra este repositório no GitHub.
2. Clique em **Code → Codespaces → Create codespace on main**.
3. No terminal do Codespace:

\`\`\`bash
npm install
npm run dev -- --host 0.0.0.0
\`\`\`

4. Abra a porta \`5173\` na aba **Ports** do Codespaces.

Também funciona localmente com Node.js 20 LTS ou superior usando os mesmos comandos.

## Build de produção

\`\`\`bash
npm run build
npm run preview
\`\`\`

Os arquivos finais são gerados na pasta \`dist/\`.

## Publicação no GitHub Pages

O deploy é automatizado por GitHub Actions em \`.github/workflows/deploy.yml\`. A build aplica automaticamente o caminho \`/NexusPort/\` quando executada no GitHub Actions; no desenvolvimento local e no Codespaces, o Vite usa a raiz.

Na primeira publicação, confirme em **Settings → Pages** que a fonte está configurada como **GitHub Actions**. Depois, cada push na branch \`main\` executa a build e publica o site.

Endereço esperado: <https://chesyii19.github.io/NexusPort/>

## Estrutura

\`\`\`text
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
\`\`\`
