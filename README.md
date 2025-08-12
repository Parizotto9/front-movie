# 🎬 Front Movie

Aplicação frontend para gerenciamento e exibição de filmes.  
Este projeto foi desenvolvido como parte de um teste para uma empresa e inclui funcionalidades como autenticação, listagem de filmes, paginação e criação/edição de filmes.

---

## 🚀 Funcionalidades

- 🔐 **Autenticação** (login e registro de usuários)
- 🎞 **Listagem de filmes** com paginação
- 🆕 **Criação de filmes** com upload de imagem
- ✏ **Edição de filmes existentes**
- 📊 **Filtros por categoria e duração**
- 📱 **Layout responsivo** com TailwindCSS

---

## 🛠 Tecnologias Utilizadas

- **[React](https://react.dev/)** – Biblioteca para construção da interface
- **[Vite](https://vitejs.dev/)** – Build tool e ambiente de desenvolvimento rápido
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática
- **[TailwindCSS](https://tailwindcss.com/)** – Estilização
- **[TanStack Router](https://tanstack.com/router/latest)** – Gerenciamento de rotas
- **[TanStack Query](https://tanstack.com/query/latest)** – Data fetching e cache
- **[Axios](https://axios-http.com/)** – Cliente HTTP
- **[Zustand](https://zustand-demo.pmnd.rs/)** – Gerenciamento de estado global
- **[ESLint](https://eslint.org/)** – Padronização e linting de código

---

## 📦 Requisitos

- **Node.js** versão `22.x`
- Backend rodando e configurado ([veja o repositório do backend](#) ou siga as instruções dele)
- Gerenciador de pacotes **npm** ou **yarn**

---

## ⚙️ Instalação e Uso

```bash
git clone https://github.com/seu-usuario/front-movie.git
cd front-movie

npm install
# ou
yarn install

configure o .env Com VITE_API_URL

### Rode o projeto
npm run dev

src/
 ├── assets/           # Imagens, ícones e arquivos estáticos
 ├── components/       # Componentes reutilizáveis
 ├── helpers/          # Funções utilitárias (ex: manipulação de tokens)
 ├── hooks/            # Hooks customizados (ex: autenticação, requisições)
 ├── layout/           # Componentes de layout base
 ├── pages/            # Páginas da aplicação
 ├── routes/           # Definição das rotas (TanStack Router)
 ├── services/         # Configuração de API e chamadas HTTP
 ├── store/            # Gerenciamento de estado global (Zustand)
 ├── styles/           # Estilos globais e Tailwind
 ├── types/            # Tipos TypeScript globais
 └── main.tsx          # Entrada da aplicação
```

## ⚙️ Configure o backend https://github.com/Parizotto9/backend-movieApp
