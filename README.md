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
- Run the command:
  - `export NODE_OPTIONS=--openssl-legacy-provider`

- This is a problem when you need to push the code, so you need to run:
  - `export NODE_OPTIONS=""` or `unset NODE_OPTIONS`, before the push