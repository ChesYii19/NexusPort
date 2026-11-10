# NEXUS OPS · Operations & Delivery

Dashboard demonstrativo independente que combina três direções visuais e funcionais:

- **Command Center:** indicadores, saúde de serviços e visão de infraestrutura.
- **Turno da Noite:** registro operacional, ritmo do turno e passagem de contexto.
- **Field Report:** hierarquia editorial, narrativa visual, fila pesquisável e detalhes expansíveis.

## Como visualizar

1. Extraia o pacote ZIP.
2. Abra `nexus-ops-unified.html` em um navegador moderno.
3. Para desenvolver no Codespaces, coloque o arquivo no repositório e abra a prévia local com uma extensão de servidor estático ou execute `python -m http.server 8000` no terminal.

O dashboard é um arquivo HTML independente. Não exige `npm install`, backend ou banco de dados. As fontes podem ser carregadas do Google Fonts; sem internet, entram em ação as fontes alternativas do sistema.

## Interações incluídas

- Navegação por âncoras entre as cinco áreas do painel.
- Filtros de prioridade e estado na fila de incidentes.
- Busca por identificador ou assunto.
- Expansão dos detalhes de cada incidente.
- Simulação visual de pipeline em cinco etapas (Source, Build, Test, Release e Deploy).
- Atualização do relógio local da demonstração.
- Layout responsivo para desktop, tablet e celular.

## Limites importantes

Este é um **protótipo demonstrativo**, não uma plataforma de monitoramento. Os números, incidentes, dispositivos, serviços, rotinas, eventos e execuções são dados sintéticos. O botão de pipeline altera apenas a interface no navegador e não aciona GitHub Actions, Jenkins, cloud, servidores ou qualquer ambiente real. Não há integração, coleta ou transmissão de dados.

O dashboard não apresenta o Portal CSTL nem qualquer projeto de terceiros como propriedade ou autoria do portfólio. O conteúdo foi estruturado como cenário independente e fictício.

## Direção visual

Modo escuro profundo, grafite e azul-petróleo, com ciano para informação, âmbar para atenção e coral para criticidade. A tipografia editorial nos títulos convive com texto funcional e rótulos monoespaçados. O objetivo é equilibrar legibilidade, personalidade e densidade de informação sem cair no painel genérico de cartões.