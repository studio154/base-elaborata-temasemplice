# Semplice
This repo is the starter used at [Unwrapped](https://unwrapped.design) to create new Tailwind based HTML templates.

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── README.md
├── astro.config.mjs
├── package.json
├── public
│   ├── assets
│   │   ├── Logos
│   │   │   └── All logos
│   │   ├── Screenshots
│   │   │   └── All screenshots ( Feel free to delete them )
│   │   └── Images
├── src
│   ├── components
│   │   ├── Component folder
│   │   │   └── Component
│   ├── layouts
│   │   └── All Layouts
│   ├── pages
│   │   ├── All pages
│  
└── astro.config.mjs 
└── README.md
└── tailwind.config
└── tsconfig.json  
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |


If you have any doubt about how to use this code, you can reach use in twitter at [@Mike_Andreuzza](https://twitter.com/Mike_Andreuzza) or michael@andreuzza.com