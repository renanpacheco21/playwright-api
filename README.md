# Projeto de Automação de Testes API com Playwright e Cucumber

Este projeto é um exemplo de automação de testes para APIs usando Playwright junto com Cucumber/Gherkin para definição dos cenários.

---

## Estrutura do Projeto

- `features/` — Arquivos de features e steps do Cucumber  
  - `features/usuario.feature` — Cenários escritos em Gherkin  
  - `features/steps/usuario.steps.ts` — Implementação dos steps em TypeScript
- `tests/` — Outras pastas relacionadas a testes (se houver)
- `playwright.config.ts` — Configuração do Playwright
- `tsconfig.json` — Configuração do TypeScript
- `package.json` — Dependências e scripts npm
- `test-results/` — Resultados da execução dos testes
- `node_modules/` — Dependências instaladas

---

## Pré-requisitos

- Node.js (versão 16 ou superior recomendada)
- npm (gerenciador de pacotes do Node)

---

## Instalação

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
