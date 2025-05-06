# INCLUIMS - Plataforma de Acessibilidade para Pessoas com Deficiência

![Logo do INCLUIMS](./src/assets/images/IncluiMS_Logos/4.png)

[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-3178c6.svg)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.0.0-db7093.svg)](https://styled-components.com/)

## 📋 Sobre o Projeto

O INCLUIMS é uma plataforma web desenvolvida para centralizar informações relevantes sobre serviços, direitos, locais com acessibilidade e oportunidades para pessoas com deficiência física em Campo Grande - MS. 

O projeto busca preencher uma lacuna significativa no acesso à informação para este público, oferecendo uma interface acessível e adaptada às diferentes necessidades dos usuários.

### 🎯 Objetivo

Promover maior autonomia e inclusão social para pessoas com deficiência física através da democratização do acesso à informação relevante para o seu dia a dia.

## ✨ Funcionalidades

- **Mapa de Acessibilidade**: Localização georreferenciada de locais com acessibilidade em Campo Grande
- **Diretório de Serviços**: Catálogo organizado de serviços especializados para pessoas com deficiência
- **Banco de Informações Legais**: Repositório de legislação, direitos e políticas públicas em linguagem acessível
- **Fórum Comunitário**: Espaço para troca de experiências e suporte mútuo entre usuários
- **Notícias e Eventos**: Divulgação de informações atualizadas sobre inclusão e acessibilidade

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Styled Components](https://styled-components.com/) - Biblioteca para estilização de componentes
- [React Router](https://reactrouter.com/) - Navegação entre páginas
- [Axios](https://axios-http.com/) - Cliente HTTP para requisições
- [Leaflet](https://leafletjs.com/) - Biblioteca para mapas interativos
- [Jest](https://jestjs.io/) - Framework de testes

## 🔧 Requisitos de Sistema

- Node.js 18.x ou superior
- npm 9.x ou superior
- Navegador moderno compatível com ES6

## 📥 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/incluims.git

# Acesse a pasta do projeto
cd incluims

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 🔨 Estrutura do Projeto

```
/src
  /assets         # Imagens, ícones e recursos estáticos
  /components     # Componentes reutilizáveis
    /ui           # Componentes de interface (botões, inputs, etc)
    /layout       # Componentes estruturais (header, footer, etc)
    /features     # Componentes específicos de funcionalidades
  /contexts       # Contextos React para gerenciamento de estado
  /hooks          # Hooks personalizados
  /pages          # Componentes de página
  /services       # Serviços de API e integração externa
  /styles         # Estilos globais e temas
  /utils          # Funções utilitárias
  /types          # Definições de tipos TypeScript
```

## ♿ Acessibilidade

O INCLUIMS foi desenvolvido seguindo as diretrizes WCAG 2.1 nível AA, implementando:

- HTML semântico e estruturado
- Contraste adequado para elementos visuais
- Suporte completo à navegação por teclado
- Atributos ARIA para melhor interação com tecnologias assistivas
- Textos alternativos para conteúdo não-textual
- Temas de cores alternativos (modo escuro, alto contraste)
- Redimensionamento de texto sem perda de funcionalidade

## 🧪 Testes

O projeto utiliza Jest e React Testing Library para testes. Para executar os testes:

```bash
# Executar todos os testes
npm test

# Executar testes com cobertura
npm test -- --coverage
```

## 📝 Guia de Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Implemente as mudanças e adicione testes quando aplicável
4. Execute os testes para garantir que tudo está funcionando
5. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
6. Push para a branch (`git push origin feature/nova-funcionalidade`)
7. Abra um Pull Request

Por favor, consulte o arquivo [CONTRIBUTING.md](./CONTRIBUTING.md) para mais detalhes sobre nosso código de conduta e processo de desenvolvimento.

## 📊 Roadmap

- **Versão 1.1** (Junho/2025)
  - Sistema de avaliação colaborativa de locais
  - Perfis de usuário personalizáveis
  
- **Versão 1.2** (Agosto/2025)
  - Integração com serviços públicos
  - Notificações personalizadas
  
- **Versão 2.0** (Dezembro/2025)
  - Aplicativo mobile nativo
  - Recursos de acessibilidade avançados

## 👥 Equipe

- **Thaysa Lacerda** - Desenvolvedora Frontend e Idealizadora

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE.md](./LICENSE.md) para detalhes.

## 📞 Contato

Para dúvidas, sugestões ou parcerias, entre em contato:

- Email: thaysarafaele@gmail.com

---

Desenvolvido com ❤️ em Campo Grande, MS - Brasil