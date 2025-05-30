# 🚀 Projeto DevOps SWAPI – Star Wars API Wrapper

Este projeto foi desenvolvido como parte de uma aula prática de DevOps para o curso de Sistemas de Informação – UNIDAVI.

Ele consiste em uma API que consome dados da [Star Wars API (SWAPI)](https://swapi.dev) e entrega um endpoint formatado para ser usado em pipelines CI/CD, com Docker e deploy em nuvem.

---

## 🧠 Objetivos do Projeto

- Criar uma API REST em Node.js com Express
- Consumir a SWAPI e formatar os dados
- Automatizar testes com GitHub Actions
- Empacotar a aplicação com Docker
- Realizar o deploy em ambiente de nuvem

---

## 📦 Requisitos

- Node.js v18+
- Git
- Conta no [GitHub](https://github.com)
- Conta no [Docker Hub](https://hub.docker.com)
- Conta no [Render](https://render.com) ou [Railway](https://railway.app)

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/swapi-devops.git
cd swapi-devops

# Instale as dependências
npm install

# Rode a aplicação
npm start

# Acesse em: http://localhost:3000/personagem/1