# Project Structure
```
/
├── node_modules/        ← Installed dependencies
├── public/              ← Static assets (images, icons, SVGs, audio file)
│   ├── *.svg
│   └── favicon.ico
├── src/
│   └── app/             ← App directory (Next 13+ routing system)
│       ├── layout.js    ← Root layout (shared across all pages)
│       ├── page.js      ← Homepage (`/`)
│       └── globals.css  ← Global styles
├── .gitignore           ← Files/folders Git will ignore
├── README.md            ← Project overview/documentation
├── jsconfig.json        ← JS path aliases and intellisense config
├── next.config.mjs      ← Next.js custom configuration
├── package.json         ← Project metadata and scripts
├── package-lock.json    ← Dependency lock file
└── postcss.config.mjs   ← PostCSS config (for Tailwind or plugins)
```

next-env.d.ts >> TS declaration for NEXTjs

postcss.config.mjs
- CSS processor
- Add vendor prefixes automatically (autoprefixer)
- Use CSS variables, nesting, mixins, etc.
- Optimize/minify CSS
- Extend CSS with plugins


----------------------------------------------------------------------
# Update Structure

### My Setup of css
1. Add Folder CSS
2. Move globacl.css to CSS folders
- Optional: Clear CSS except: `@import "tailwindcss";`
3. Update Layout import CSS: `import "./CSS/globals.css";`