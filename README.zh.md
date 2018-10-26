# create apfe app

[English Edition](./README.md)

---

> 基于 Webpack 快速构建 Vue 应用

## 介绍

简化版 Vue 单页面应用模版。

## 使用

### 快速构建

```bash
$ npm i
$ npm run dev
$ npm run build
```

### 运行测试

```bash
$ npm run dev:test
$ npm run test
```

## 特点

- 🚪 可以构建单入口或多入口 Vue 应用。

- 👏 动态地加载模块。

- 🍔 优化代码分割。

- 🌼 使用 @babel/preset-env 基于 .browserslistrc 保证兼容性。

- 📹 使用 SVG 精灵。

- 🌐 使用 Vue I18n 完成多语言国际化。

- 🎲 简单且易理解.

- 🚀 保证对 webpack、bable、postcss 等工具的升级。

- 🐵 开源自动化测试解决方案([Macaca](https://github.com/alibaba/macaca)).

- 📦 [DataHub](https://github.com/macacajs/macaca-datahub) - 全周期的数据环境解决方案。

## 构建详细信息

### 构建结果

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://ws1.sinaimg.cn/large/796b664dly1fw96unjqgfj218o0jydoc.jpg"
    width="800"
  />
</p>

### 构建图

包含所有模块。

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://ws1.sinaimg.cn/large/796b664dly1fw97hq3u3hj220i16awqe.jpg"
    width="800"
  />
</p>

除 vue-package 和 vendors。

<p align="center">
  <img
    alt="vue-webpack-starter-kit"
    src="https://ws1.sinaimg.cn/large/796b664dly1fw97iici6uj220k162gxi.jpg"
    width="800"
  />
</p>

* **代码分割和异步加载模块**: 优化每个页面加载资源大小。
* **vue-package**: 提取 Vue 相关模块, 其相对更新较少。
* **vendor**: node_modules 中除了 Vue 相关模块。
* **typhoon and tornado**: 提取多入口各自的共用代码。
* **common**: 提取多入口所共用代码。
* **router-typhoon-home and router-tornado-home**: 各入口各 home.vue 组件。
* **lang modules**: 国际化模块, 按照多入口多语言来切割。

## FAQ

### 是否会及时更新相关工具?

当然会及时更新, 我们的团队会一直维护该项目。

### Datahub 和 Macaca 是什么?

该模版集成的一套自动化测试及数据 Mock 解决方案。https://macacajs.github.io

## License

[MIT](http://opensource.org/licenses/MIT)
