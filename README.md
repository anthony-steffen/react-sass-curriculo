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

Para adicionar um novo projeto, inclua um novo objeto no array:

```js
{
  id: 'nome-do-projeto',
  title: 'Nome do Projeto',
  status: 'Finalizado',
  description: 'Resumo curto do que o projeto faz e quais problemas resolve.',
  technologies: ['React', 'Node.js', 'Sass'],
  repositoryUrl: 'https://github.com/seu-usuario/nome-do-projeto',
  liveUrl: 'https://link-da-demo.com',
}
```

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
