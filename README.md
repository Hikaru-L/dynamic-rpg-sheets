# Dynamic Character Sheets

Dynamic Character Sheets is a web application, integrated with a backend service, for creating, saving and editing RPG Character sheets, in order to provide a better playing experience for less popular systems that don't have good player support for online sessions.

## Stack
This repository contains both the frontend and backend projects.
The frontend is built on ReactJS and is written in Typecript with JSX elements, needing Node.js to run.
*reactn* is used for global state management. `styled-components` is used for stylization and `material-ui` when it is possible.
The backend is built on Node.js and Express, also being written on Typescript. Currently, it doesn't have a remote database so all data is saved in JSON files, in the `data` folder.


## Architecture
TODO explain architecture on README file

## Running frontend project

First, install dependencies: 

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running backend project

Then, run the development server:

```bash
npm run start
# or
yarn start
```

With the running project, access http://localhost:3001 as the base url to run backend locally.
