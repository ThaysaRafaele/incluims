# Diretrizes de Acessibilidade - INCLUIMS

Este documento define as diretrizes de acessibilidade que devem ser seguidas durante o desenvolvimento do projeto INCLUIMS, visando atender o nível AA das Web Content Accessibility Guidelines (WCAG) 2.1.

## Princípios Fundamentais (WCAG)

### 1. Perceptível
- **1.1 Alternativas de Texto**: Fornecer alternativas de texto para conteúdo não textual.
- **1.2 Mídia Baseada em Tempo**: Fornecer alternativas para mídia baseada em tempo.
- **1.3 Adaptável**: Criar conteúdo que possa ser apresentado de diferentes formas sem perder informação.
- **1.4 Distinguível**: Facilitar aos usuários ver e ouvir o conteúdo.

### 2. Operável
- **2.1 Acessível por Teclado**: Tornar todas as funcionalidades disponíveis a partir do teclado.
- **2.2 Tempo Suficiente**: Fornecer aos usuários tempo suficiente para ler e usar o conteúdo.
- **2.3 Convulsões e Reações Físicas**: Não criar conteúdo que possa causar convulsões ou reações físicas.
- **2.4 Navegável**: Fornecer maneiras de ajudar os usuários a navegar e encontrar conteúdo.
- **2.5 Modalidades de Entrada**: Facilitar o uso de funcionalidades através de várias entradas além do teclado.

### 3. Compreensível
- **3.1 Legível**: Tornar o texto legível e compreensível.
- **3.2 Previsível**: Fazer com que as páginas da Web apareçam e operem de maneira previsível.
- **3.3 Assistência de Entrada**: Ajudar os usuários a evitar e corrigir erros.

### 4. Robusto
- **4.1 Compatível**: Maximizar a compatibilidade com agentes de usuário atuais e futuros, incluindo tecnologias assistivas.

## Implementação no INCLUIMS

### Componentes de Interface
- Todos os componentes devem ser navegáveis por teclado
- Contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande
- Tamanho de fonte ajustável sem perda de funcionalidade
- Foco visível em todos os elementos interativos

### Formulários
- Todos os campos devem ter labels associados
- Mensagens de erro claras e acessíveis
- Agrupamento lógico de campos relacionados com fieldsets
- Indicação clara de campos obrigatórios

### Conteúdo Dinâmico
- Alterações de conteúdo devem ser anunciadas para tecnologias assistivas
- Modais e diálogos devem seguir padrões de acessibilidade ARIA
- Notificações devem ser perceptíveis sem depender apenas de cores

### Mapa Interativo
- Alternativas não-visuais para informações do mapa
- Controles acessíveis por teclado
- Filtros e controles facilmente identificáveis
- Informações completas disponíveis em formato textual

## Métricas de Verificação

Para cada critério de sucesso WCAG 2.1 nível AA, utilizaremos as seguintes métricas para verificação:

1. **Teste automatizado**: Uso de ferramentas como axe-core, Lighthouse e WAVE
2. **Revisão manual**: Checklist de verificação para cada componente
3. **Teste com usuários**: Sessões de teste com pessoas com deficiência
4. **Conformidade documentada**: Registro da conformidade de cada componente

## Ferramentas Recomendadas

- [axe DevTools](https://www.deque.com/axe/)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)
- Leitores de Tela: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android)
