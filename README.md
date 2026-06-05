# React Sass Curriculo

[![NPM License](https://img.shields.io/npm/l/license)](https://github.com/anthony-steffen/react-sass-curriculo/blob/main/LICENSE)

Portfólio e currículo online desenvolvido com React, Vite e Sass. A página
apresenta perfil profissional, contatos, tecnologias e projetos em uma interface
responsiva.

## Tecnologias

- React
- Vite
- Sass
- React Icons
- GitHub Pages

## Como Rodar Localmente

Certifique-se de ter o Node.js instalado.

```bash
git clone https://github.com/anthony-steffen/react-sass-curriculo.git
cd react-sass-curriculo
npm install
npm run dev
```

Depois, acesse:

```txt
http://localhost:5173/react-sass-curriculo/
```

## Como Adicionar Projetos

Os projetos ficam centralizados em:

```txt
src/data/projects.js
```

O app usa o nome do repositório para buscar dados públicos no GitHub e monta o
card automaticamente. Para adicionar um novo projeto, inclua um objeto no array:

```js
{
  repository: 'nome-do-repositorio',
  title: 'Nome do Projeto',
  status: 'Finalizado',
  description: 'Resumo curto do que o projeto faz e quais problemas resolve.',
  technologies: ['React', 'Node.js', 'Sass'],
  liveUrl: 'https://link-da-demo.com',
}
```

Campos como `title`, `description`, `technologies`, `status` e `liveUrl` são
opcionais, mas funcionam como fallback quando a API do GitHub não retorna alguma
informação.

O usuário do GitHub usado na consulta fica na variável `githubOwner`, dentro do
mesmo arquivo.

## Onde Editar os Dados

- Perfil principal: `src/data/profile.js`
- Redes sociais: `src/data/socialLinks.js`
- Tecnologias: `src/data/technologies.js`
- Projetos: `src/data/projects.js`

## Scripts Disponíveis

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run deploy
```

## Deploy

O projeto está preparado para publicação no GitHub Pages com:

```bash
npm run deploy
```

O endereço configurado é:

```txt
https://anthony-steffen.github.io/react-sass-curriculo
```

## Autor

José Anthony Steffen de Oliveira

- [LinkedIn](https://www.linkedin.com/in/anthony-steffen-dev/)
- [GitHub](https://github.com/anthony-steffen)
