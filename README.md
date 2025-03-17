# Resgates - O Desafio

## Proposta

Este desafio consiste no desenvolvimento de uma aplicação web para visualizar páginas de resgates.

Uma **página de resgate** é um formulário onde os usuários podem preencher seus dados para envio e aprovação.

Após a aprovação do resgate, o usuário receberá os itens relacionados ao resgate de acordo com as informações preenchidas.

## Premissas

- Páginas de resgate podem ficar **inativas**.
- Produtos podem ser **opcionais**, mas pelo menos um deve ser selecionado.
- Produtos opcionais devem ser exibidos na tela como opções para resgate.
- Páginas de resgate podem (ou não) ter **variações de tamanhos** (de acordo com o produto selecionado).
- Páginas de resgate podem (ou não) ter **perguntas extras**.

## Solução

Com base nas premissas citadas, a aplicação foi desenvolvida utilizando **React** e **Material UI** para a criação das telas da página de resgate.

## Tecnologias Utilizadas

- **React** 19
- **Material UI** 6
- **React Hook Form** para manipulação de formulários
- **Yup** para validação de dados
- **React Router Dom** para navegação
- **TanStack Query (React Query)** para gerenciamento de estado assíncrono
- **Axios** para requisições HTTP
- **Day.js** para manipulação de datas

## Como Executar o Projeto

### 1. Instalar Dependências

```sh
npm install
```

### 2. Rodar o Projeto em Modo de Desenvolvimento

```sh
npm run dev
```

### 3. Construir para Produção

```sh
npm run build
```

### 4. Visualizar a Aplicação

- Para acessar um resgate **ativo**:

  - [http://localhost:5173/5c7e9bc8-e063-4d86-8e2c-eccce6f3ee1c](http://localhost:5173/5c7e9bc8-e063-4d86-8e2c-eccce6f3ee1c)

- Para acessar um resgate **inativo**:
  - [http://localhost:5173/dba7e38a-c03f-47f4-a1f9-5bf21c6624ad](http://localhost:5173/dba7e38a-c03f-47f4-a1f9-5bf21c6624ad)

## Autor

Michel S.
