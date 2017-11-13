# React-Redux-Enterprise

[![stars](https://img.shields.io/github/stars/Amin52J/React-Redux-Enterprise.svg?style=for-the-badge)](https://github.com/Amin52J/React-Redux-Enterprise/stargazers)
[![license](https://img.shields.io/github/license/Amin52J/React-Redux-Enterprise.svg?style=for-the-badge)](https://github.com/Amin52J/React-Redux-Enterprise/blob/master/LICENSE)

A React-Redux boilerplate for enterprise web applications.

### Materials

This repo is the minimal and extendable setup to start a new enterprise large-scaled project based on React & Redux & RxJS.

* **babel:** to transpile our ES6 code ES5
* **enzyme:** as our test util
* **eslint:** to have linting utility over our code
* **jest:** as our test framework
* **postcss:** to have autoprefixer
* **react:** as our framework
* **react-redux:** to handle data flow
* **react-router:** to handle routing
* **react-router-redux:** to handle routing
* **redux:** to handle data flow
* **redux-observable:** to handle async actions
* **redux-persist:** to have persistent store
* **rxjs:** to handle observable actions
* **sass:** as our style language
* **webpack:** as our module bundler

### How to start?

* Clone the project
* `yarn install`
* `yarn start`
* visit [localhost:8080](http://127.0.0.1:8080)

### NOTE:

* To run the server you need to install `http-server-spa` as a global module, or you can implement your own server and point it to the public directory.
* All modules used are the latest versions and are implemented according to their respective latest version docs. (as of Nov 2017) 

### Scripts

* `yarn start` to start the server
* `yarn watch` to start watching for file changes
* `yarn build` to make a single build
* `yarn prod` to make the production build (minified and uglified)
* `yarn test` to run the tests

### License

This project is licensed under the [MIT License](https://github.com/Amin52J/React-Redux-Enterprise/blob/master/LICENSE).
