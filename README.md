[![Docker Image](https://badgen.net/badge/docker/pedroduuarte%2Fapi-jogos-gc2/blue?icon=docker)](https://hub.docker.com/repository/docker/pedroduuarte/api-jogos-gc2/general)
[![Docker Hub](https://badgen.net/badge/registry/DockerHub/g?icon=docker)](https://hub.docker.com/repository/docker/pedroduuarte/api-jogos-gc2/general)


# API de Jogos

> API simples desenvolvida com Node.js e Express
---

## Como executar o projeto

### Usando Docker

Se você tiver o Docker instalado, pode executar o projeto com os seguintes comandos:

```bash

docker run -d -p 3000:3000 pedroduuarte/api-jogos-gc2:latest
```

### Usando Vagrant e Ansible

O projeto inclui um `Vagrantfile` configurado para subir duas máquinas virtuais e automatizar a instalação do ambiente utilizando o **Ansible**.

- **vm1 (Nó de Controle)**: Ubuntu 22.04 (`192.168.33.10`). Responsável por rodar o Ansible. Durante o *provisioning*, ela instala o Ansible e gera uma chave SSH própria de forma automatizada.
- **vm2 (App)**: Ubuntu 22.04 (`192.168.33.11`). Servidor de destino da aplicação. Durante a criação, ela aceita a chave SSH gerada pela VM1.

**Passo a passo para execução:**

1. Suba a infraestrutura (isso criará as VMs e fará a configuração das chaves SSH):
```bash
vagrant up
```

2. Acesse o nó de controle (VM1):
```bash
vagrant ssh vm1
```

3. Dentro da VM1, navegue até a pasta onde os arquivos do Ansible foram copiados e execute o playbook:
```bash
cd ~/ansible
ansible-playbook configura-node.yaml
```

O Ansible conectará na VM2, instalará as dependências de SO, o Node.js, fará o deploy do repositório a partir da pasta sincronizada e iniciará o servidor em *background* utilizando o **PM2**.

Ao final, a aplicação estará acessível no seu navegador local em:
```
http://192.168.33.11:3000
```

### Localmente 

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

## Endpoints disponíveis

### GET /api/v1/jogos

Retorna a lista de jogos cadastrados.

Exemplo:
http://localhost:3000/api/v1/jogos

---

### POST /api/v1/jogos

Adiciona um novo jogo na lista.

Body para inserção: 
```json
{ 
  "nome": "Resident Evil 9",
  "plataforma": ["Xbox Series X", "PC", "PlayStation 5"],
  "genero": "Ação-aventura, Terror",
  "ano": 2026
}
```

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
