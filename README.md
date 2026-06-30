This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# APP Projeto Teste - Frontend

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8)
![Node.js](https://img.shields.io/badge/Node.js-22.x-339933)
![License](https://img.shields.io/badge/License-Private-red)

---

# Sumário

- Sobre o Projeto
- Arquitetura
- Tecnologias
- Pré-requisitos
- Estrutura do Projeto
- Instalação
- Configuração
- Executando a Aplicação
- Build
- Scripts
- Estrutura Recomendada
- Convenções
- Qualidade de Código
- Troubleshooting
- Roadmap
- Pipeline CI/CD
- Versionamento
- Contribuição
- Licença

---

# Sobre o Projeto

O **APP Projeto Teste** é um projeto base (template) desenvolvido com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**, criado para padronizar o desenvolvimento de aplicações frontend da organização.

Este template foi projetado para oferecer:

- Arquitetura escalável
- Organização padronizada
- Fácil manutenção
- Boas práticas de desenvolvimento
- Preparação para CI/CD
- Integração com APIs REST
- Suporte à observabilidade

---

# Arquitetura

```
Browser
    │
    ▼
Next.js
    │
    ▼
Pages / App Router
    │
    ▼
Components
    │
    ▼
Hooks
    │
    ▼
Services
    │
    ▼
REST API
```

Arquitetura recomendada:

- Component Based Architecture
- Feature-Based Organization
- Clean Code
- SOLID
- Design Patterns
- Atomic Design (opcional)

---

# Tecnologias

| Tecnologia | Versão |
|------------|---------|
| Next.js | 16.2.9 |
| React | 19.2.4 |
| TypeScript | 5.x |
| TailwindCSS | 4.x |
| ESLint | 9.x |
| Node.js | 22 LTS |

---

# Pré-requisitos

Instalar:

- Node.js 22 LTS ou superior
- npm 10+
- Git

Verifique:

```bash
node -v

npm -v

git --version
```

---

# Estrutura do Projeto

```
app-projeto-teste/

├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│
├── features/
│
├── hooks/
│
├── services/
│
├── contexts/
│
├── providers/
│
├── types/
│
├── utils/
│
├── styles/
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# Clonando o Projeto

```bash
git clone https://url-do-repositorio.git

cd app-projeto-teste
```

---

# Instalação

Instale as dependências:

```bash
npm install
```

ou

```bash
npm ci
```

---

# Configuração

Crie um arquivo:

```
.env.local
```

Exemplo:

```properties
NEXT_PUBLIC_API_URL=http://localhost:8080

NEXT_PUBLIC_ENV=LOCAL
```

Nunca realizar commit dos arquivos:

```
.env

.env.local
```

---

# Executando a Aplicação

Modo desenvolvimento:

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

# Build

Gerar build:

```bash
npm run build
```

Executar aplicação compilada:

```bash
npm run start
```

---

# Scripts

| Script | Descrição |
|----------|-----------|
| npm run dev | Executa aplicação em modo desenvolvimento |
| npm run build | Gera build para produção |
| npm run start | Executa build de produção |
| npm run lint | Executa análise estática |

---

# Estrutura Recomendada

```
components/
    Button/
        Button.tsx
        Button.module.css
        index.ts

features/
    login/
        LoginPage.tsx
        LoginService.ts
        LoginTypes.ts

hooks/
    useAuth.ts

services/
    api.ts
    auth.service.ts

utils/
    formatter.ts
    validator.ts

types/
    User.ts
```

---

# Organização por Camadas

```
UI

↓

Components

↓

Hooks

↓

Services

↓

API REST
```

---

# Convenções

## Componentes

Utilizar PascalCase.

Exemplo:

```
UserCard.tsx

LoginForm.tsx

Header.tsx
```

---

## Hooks

Sempre iniciar com **use**.

```
useAuth.ts

useTheme.ts

useUser.ts
```

---

## Services

```
auth.service.ts

user.service.ts

api.ts
```

---

## Types

```
User.ts

LoginRequest.ts

LoginResponse.ts
```

---

# Boas Práticas

- Componentes pequenos e reutilizáveis
- Evitar lógica de negócio na camada de apresentação
- Centralizar chamadas HTTP em `services`
- Utilizar tipagem forte
- Evitar uso de `any`
- Separar responsabilidades
- Utilizar Context API apenas quando necessário
- Padronizar nomenclatura de arquivos e pastas

---

# Qualidade de Código

Ferramentas recomendadas:

- ESLint
- Prettier
- Husky
- CommitLint
- SonarQube
- Jest
- React Testing Library
- Playwright
- Lighthouse

---

# Troubleshooting

### Limpar dependências

```bash
rm -rf node_modules

rm package-lock.json

npm install
```

---

### Limpar cache

```bash
npm cache clean --force
```

---

### Erro de Build

```bash
npm run lint

npm run build
```

Corrija os erros apresentados antes de realizar o deploy.

---

# Roadmap

Evoluções recomendadas para este template:

- Axios
- React Query / TanStack Query
- Zustand ou Redux Toolkit
- React Hook Form
- Zod
- NextAuth
- Internacionalização (i18n)
- Storybook
- Testes Unitários
- Testes E2E
- Docker
- Docker Compose
- Observabilidade
- Monitoramento

---

# Pipeline CI/CD

Fluxo recomendado:

```
Checkout

↓

Install

↓

Lint

↓

Test

↓

Build

↓

SonarQube

↓

Security Scan

↓

Artifact

↓

Deploy DEV

↓

Deploy HML

↓

Deploy PROD
```

Ferramentas sugeridas:

- Azure DevOps
- GitHub Actions
- SonarQube
- Docker
- Kubernetes
- Trivy
- OWASP Dependency Check

---

# Versionamento

Modelo recomendado:

```
main

develop

feature/*

release/*

hotfix/*
```

---

# Contribuição

Fluxo de trabalho:

1. Criar uma branch:

```bash
git checkout -b feature/nome-da-feature
```

2. Desenvolver a funcionalidade.

3. Executar validações locais:

```bash
npm run lint

npm run build
```

4. Realizar commit seguindo o padrão da equipe.

5. Abrir Pull Request para revisão.

---

# Segurança

Não versionar:

```
.env
.env.local
node_modules
.next
dist
coverage
```

Adicionar essas entradas ao `.gitignore`.

---

# Licença

Projeto privado.

Todos os direitos reservados.

```
Copyright © 2026
```

---

# Responsável Técnico

**Saulo M. Costa**

**Senior Systems Developer**

Especializações:

- Java
- TypeScript
- SQL
- Arquitetura de Software
- Desenvolvimento Full Stack
- Arquitetura de Soluções com Inteligência Artificial

---

# Princípios Adotados

Este projeto segue os princípios de:

- Clean Code
- SOLID
- Component-Based Architecture
- Responsive Design
- Accessibility (WCAG)
- Performance First
- Mobile First
- DevSecOps
- Observabilidade
- Engenharia de Software Moderna