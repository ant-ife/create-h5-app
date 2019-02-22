# create h5 app

[中文版](./README.zh.md)

---

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Coverage status][codecov-image]][codecov-url]
[![Dependency status][daviddm-image]][daviddm-url]

> Yet Another Vue App Starter Kit.

## Introduction

A simplified template for vue single-page applications.

## Usage

### Create project

- use [apfe-cli](https://github.com/ant-ife/apfe-cli)

```bash
$ npm i apfe-cli -g
$ apfe create h5-app path/to/project
$ apfe create h5-app path/to/project -c mynpm # use specified npm client
```

- use standalone cli

```bash
$ npm i create-h5-app -g
$ create-h5-app path/to/project
```

For more options, please read usage:

```bash
$ create-h5-app --help
```

### Build project

```bash
$ npm i
$ npm run dev
$ npm run build
```

### Test project

```bash
$ npm run dev:test
$ npm run test
```

## Features

- 🚪 Build single entry and multiple entry applications.

- 👏 Dynamically load modules.

- 🍔 Optimization of spliting the chunk.

- 🌼 @babel/preset-env using a .browserslistrc file to specify targets.

- 📹 Creating SVG sprites.

- 🌐 Vue I18n for internationalization.

- 🎲 Keep it simple and easy to understand.

- 🚀 Keep updating with webpack, babel, postcss, etc.

- 🐵 An open-source automation test solution([Macaca](https://github.com/alibaba/macaca)).

- 📦 [DataHub](https://github.com/macacajs/macaca-datahub) for data provider / mock.

## Webpack Build Detail

### Compile Result

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://user-images.githubusercontent.com/2139038/52779036-54513280-3082-11e9-8b4e-0744b1d12e17.png"
    width="800"
  />
</p>

### Webpack Build Report

All modules.

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://user-images.githubusercontent.com/2139038/52778840-db51db00-3081-11e9-9cf8-f0d3c25905ab.png"
    width="800"
  />
</p>

Except vue-package.

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://user-images.githubusercontent.com/2139038/52778916-0f2d0080-3082-11e9-9b95-5c0adeddedb2.png"
    width="800"
  />
</p>

* **Spliting and asynchronous load modules**: Making each page load the least amount of data.
* **vue-package**: Including vue related modules, which are less updated.
* **vendor**: node_modules except vue modules.
* **typhoon and tornado**: Typhoon and tornado respective entrance common parts.
* **common**: Common part of the entrance of typhoon and tornado.
* **router-typhoon-home and router-tornado-home**: Their own home.vue.
* **lang modules**: I18n modules.

## FAQ

### Will it be updated in time?

Of course, our team will always follow up.

### What is Datahub and Macaca?

This is our integrated set of test and mock solutions. https://macacajs.github.io

## License

[MIT](http://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/create-h5-app.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/create-h5-app
[travis-image]: https://img.shields.io/travis/ant-ife/create-h5-app.svg?style=flat-square&logo=travis
[travis-url]: https://travis-ci.org/ant-ife/create-h5-app
[codecov-image]: https://img.shields.io/codecov/c/github/ant-ife/create-h5-app.svg?style=flat-square&logo=javascript
[codecov-url]: https://codecov.io/gh/ant-ife/create-h5-app
[daviddm-image]: https://david-dm.org/ant-ife/create-h5-app.svg?style=flat-square
[daviddm-url]: https://david-dm.org/ant-ife/create-h5-app

