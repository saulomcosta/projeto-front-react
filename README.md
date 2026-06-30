# APP Projeto Teste

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node](https://img.shields.io/badge/Node-22.x-green)
![License](https://img.shields.io/badge/license-Private-red)

---

# Índice

- Sobre o Projeto
- Arquitetura
- Tecnologias
- Pré-requisitos
- Instalação
- Configuração
- Executando o Projeto
- Build para Produção
- Estrutura do Projeto
- Padrões de Desenvolvimento
- Scripts Disponíveis
- Qualidade de Código
- Troubleshooting
- Roadmap
- Contribuição
- Licença

---

# Sobre o Projeto

O **APP Projeto Teste** é uma aplicação frontend desenvolvida utilizando **Next.js**, **React**, **TypeScript** e **TailwindCSS**, preparada para servir como base para novos projetos da organização.

Seu objetivo é fornecer uma arquitetura inicial padronizada, escalável e de fácil manutenção.

---

# Arquitetura

```
┌─────────────────────────────┐
│         Browser             │
└─────────────┬───────────────┘
              │
              ▼
      Next.js Application
              │
     ┌────────┴────────┐
     │                 │
     ▼                 ▼
 React Components   API Routes
     │
     ▼
 Tailwind CSS
```

---

# Tecnologias

| Tecnologia | Versão |
|------------|---------|
| Next.js | 16.x |
| React | 19.x |
| TypeScript | 5.x |
| TailwindCSS | 4.x |
| ESLint | 9.x |
| Node.js | 22.x LTS |

---

# Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir instalado:

- Node.js 22 LTS ou superior
- npm 10+
- Git
- VSCode (recomendado)

Verifique:

```bash
node -v

npm -v

git --version
```

---

# Clonando o Projeto

```bash
git clone https://url-do-repositorio.git

cd app-projeto-teste
```

---

# Instalação

Instale todas as dependências:

```bash
npm install
```

ou

```bash
npm ci
```

---

# Configuração

Caso o projeto utilize variáveis de ambiente, crie:

```
.env.local
```

Exemplo:

```properties
NEXT_PUBLIC_API=http://localhost:8080

NEXT_PUBLIC_ENV=LOCAL
```

Nunca realizar commit dos arquivos:

```
.env
.env.local
```

---

# Executando o Projeto

Modo Desenvolvimento

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

# Build

Gerar build de produção

```bash
npm run build
```

Executar build

```bash
npm run start
```

---

# Estrutura do Projeto

```
app-projeto-teste/

├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│
├── hooks/
│
├── services/
│
├── utils/
│
├── types/
│
├── public/
│
├── styles/
│
├── package.json
│
├── tsconfig.json
│
├── next.config.ts
│
└── README.md
```

---

# Organização Recomendada

```
components/
    Button/
        index.tsx
        style.ts

services/
    api.ts
    auth.ts

hooks/
    useAuth.ts

utils/
    formatter.ts

types/
    User.ts
```

---

# Scripts Disponíveis

## Desenvolvimento

```bash
npm run dev
```

Inicializa o servidor de desenvolvimento.

---

## Build

```bash
npm run build
```

Compila a aplicação para produção.

---

## Produção

```bash
npm run start
```

Executa a aplicação compilada.

---

## Lint

```bash
npm run lint
```

Executa análise estática utilizando ESLint.

---

# Fluxo de Desenvolvimento

```
Feature

↓

Commit

↓

Pull Request

↓

Code Review

↓

Pipeline

↓

Deploy Homologação

↓

Deploy Produção
```

---

# Convenções

## Componentes

Utilizar:

```
PascalCase
```

Exemplo

```
LoginPage.tsx

UserCard.tsx
```

---

## Hooks

```
useLogin.ts

useUser.ts
```

---

## Services

```
authService.ts

userService.ts
```

---

## Tipos

```
User.ts

LoginDTO.ts
```

---

# Boas Práticas

- Componentes pequenos
- Evitar lógica de negócio na View
- Utilizar Services para chamadas HTTP
- Componentes reutilizáveis
- Tipagem forte
- Evitar uso de any
- Código limpo
- Responsabilidade única (SRP)

---

# Qualidade de Código

Recomenda-se integrar:

- ESLint
- Prettier
- Husky
- CommitLint
- SonarQube
- Jest
- Cypress

---

# Troubleshooting

## Erro de dependências

```bash
rm -rf node_modules

rm package-lock.json

npm install
```

---

## Limpar cache

```bash
npm cache clean --force
```

---

## Build com erro

Executar:

```bash
npm run lint

npm run build
```

Corrigir erros apresentados.

---

# Roadmap

- Integração com API
- Autenticação
- Internacionalização
- Testes Unitários
- Testes E2E
- Docker
- CI/CD
- Observabilidade
- Monitoramento

---

# Segurança

Nunca realizar commit de:

```
.env

.env.local

node_modules

dist

.next
```

---

# Versionamento

Utilizar GitFlow:

```
main

develop

feature/*

hotfix/*

release/*
```

---

# Contribuição

Fluxo recomendado:

1. Criar Branch

```
feature/nome-feature
```

2. Desenvolver

3. Commit

```
git commit
```

4. Push

5. Pull Request

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

Senior Systems Developer

- Java
- TypeScript
- SQL
- Software Architecture
- Full Stack Development
- AI Solution Architecture

```
Desenvolvido seguindo padrões de Clean Code,
SOLID, Clean Architecture e boas práticas de Engenharia de Software.
```