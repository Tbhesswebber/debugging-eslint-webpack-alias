# Eslint-Webpack Aliasing Issue

With this repo, both the ESLint VSCode Plugin and the ESLint CLI report that they are `Unable to resolve path to module '@UI/Thing'` in "\<root\>/client/src/App.jsx". Webpack is perfectly content to run and serve the build.

## Getting Started

Note: I have left the dependency list alone just in case there is a possibility of some collision between eslint and anything else.

In your terminal:

```bash
  >$ npm i
  >$ npm run lint # fails
  >$ npm run build-dev -- --open # successfully runs webpack-dev-server in development mode and opens in browser
  >$ npm run lint # fails
```

## Included in Repo

- [.vscode/settings.json](./.vscode/settings.json) - contains settings for both ESLint and Prettier that I have played around with modifying
- [client/src/index.jsx](./client/src/index.jsx) - entry point for app
- [client/src/UI](./client/src/UI) - directory referred to by Webpack alias "@UI"
- [utils/build-utils/](./utils/build-utils/)- contain dynamic Webpack configurations (should be irrelevant)
- [webpack.config.js](./webpack.config.js) - Contains default webpack configurations and merges multiple dynamic Webpack configurations into itself with [webpack-merge](https://www.npmjs.com/package/webpack-merge)
- [package.json](./package.json) - Contains configs for _all_ tooling other than Webpack
