# API de Jogos

> API simples desenvolvida com Node.js e Express
---

## Como executar o projeto

1. Clone o repositório

```bash
    git clone https://github.com/pedroduuarte/api-jogos-gc2.git
    cd api-jogos-gc2
```

2. Instale as dependências
```bash
    npm install
```

3. Execute a aplicação
```
    npm run dev
```

O servidor estará rodando em:
```
http://localhost:3000
```

--- 

## Endpoint disponível

### GET /api/v1/jogos

Retorna a lista de jogos cadastrados.

Exemplo:
http://localhost:3000/api/v1/jogos

---
## Uso do GitFlow

Este projeto utiliza o modelo de versionamento GitFlow para organizar o desenvolvimento.

### Por que usar GitFlow?

O GitFlow ajuda a manter o projeto organizado e escalável, separando diferentes tipos de trabalho em branches específicas:

- main → versão estável em produção
- develop → integração de funcionalidades
- feature/ → desenvolvimento de novas funcionalidades
- release/ → preparação de versões
- hotfix/ → correções urgentes em produção

### Benefícios

- Melhor organização do código
- Facilita trabalho em equipe
- Permite desenvolvimento paralelo sem conflitos
- Mantém a branch principal sempre estável
---

## Tecnologias Utilizadas
- Node.js
- Express
---