# vue-webpack-starter-kit

[中文版](./README.zh.md)

---

> Build vue application quickly based on webpack4.0

## Introduction

A simplified template for vue single-page applications.

## Usage

### Create project

```bash
$ npm i create-apfe-app -g
$ create-apfe-app [path/to/project]
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
    src="https://ws1.sinaimg.cn/large/796b664dly1fw96unjqgfj218o0jydoc.jpg"
    width="800"
  />
</p>

### Webpack Build Report

All modules.

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://ws1.sinaimg.cn/large/796b664dly1fw97hq3u3hj220i16awqe.jpg"
    width="800"
  />
</p>

Except vue-package and vendors.

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://ws1.sinaimg.cn/large/796b664dly1fw97iici6uj220k162gxi.jpg"
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

