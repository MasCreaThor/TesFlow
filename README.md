# testflow

An Electron application with React

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

#### Estructura incial

```bash

Testflow/
├── resources/
├── src/
│   ├── main/
│   │    └── index.js
│   ├── preload/
│   │    └── index.js
│   └── render/
│       ├─── src/
│       │     ├── assets/
│       │     ├── components/
│       │     ├── App.jsx
│       │     └── main.jsx
│       └── index.html
│
├── .editorconfig
├── .gitignore
├── .prettierrc.yml
├── electron-builder.yml
├── electron.vite.config.mjs
├── slint.config.mjs
├── package-lock.json
├── package.json
└── README.md

```
