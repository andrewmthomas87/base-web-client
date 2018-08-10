# Base web client

Unless otherwise stated, all commands are to be run from the root directory.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Dev Requirements

- [git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

1. `rm -rf node_modules` - Remove previous dependencies if they exist.
2. `npm install` - this must be run after pulling each time dependencies are added or changed in `package.json`.
3. `npm install` from `server` directory - this must be run after pulling each time dependencies are added or changed in `server/package.json`.

## Building

- `npm run build:dev` - dev build, files outputted to `build` directory.
- `npm run build:prod` - production build, files outputted to `prod` directory.
- `npm run watch` - this will run a webpack dev build and watch for changes.

## Running

- `node server/server.js` - this will start a server at `http://localhost:8081` that routes requests correctly. The server uses the dev bundle by default, but uses the prod bundle if environment variable `NODE_ENV` is set to "production".
