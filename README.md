[![Deployment Pipeline](https://github.com/sdelpinoc/courses-midudev-bootcamp-github-actions/actions/workflows/pipeline.yml/badge.svg)](https://github.com/sdelpinoc/courses-midudev-bootcamp-github-actions/actions/workflows/pipeline.yml)

# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Errors

- For the error: `error:0308010C:digital envelope routines::unsupported`
- Add to scripts: "NODE_OPTIONS=--openssl-legacy-provider"
~~~
  "scripts": {
    "start": "NODE_OPTIONS=--openssl-legacy-provider webpack-dev-server --open --mode development",
    "start-prod": "NODE_OPTIONS=--openssl-legacy-provider node app.js",
    "build": "NODE_OPTIONS=--openssl-legacy-provider webpack --mode production",
  },
~~~