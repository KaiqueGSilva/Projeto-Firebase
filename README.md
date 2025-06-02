# DevProfile Lite

Um sistema simples de autenticação e visualização de perfil desenvolvido com React e Firebase.

Este projeto foi desenvolvido como parte do desafio proposto pela disciplina de Introdução ao React / Desenvolvimento Frontend do Senac.

---

## 🚀 Funcionalidades

- Cadastro de usuários com email e senha (Firebase Authentication)
- Login e logout
- Proteção de rotas com React Router DOM
- Leitura de dados de perfil do Firestore
- Exibição de nome, bio e link de portfólio
- Interface responsiva e simples para desktop e dispositivos móveis

---

## 🛠 Tecnologias utilizadas

- React
- Firebase Authentication
- Firebase Firestore
- React Router DOM
- CSS Puro

---

## 📁 Estrutura de dados no Firestore

**Coleção:** `userProfiles`  
**Documento:** `{uid_do_usuario}`  
**Campos:**

```json
{
  "nomeCompleto": "Seu Nome Aqui",
  "bioCurta": "Uma breve descrição sobre você.",
  "linkPortfolio": "http://seulink.com"
}
