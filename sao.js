const superb = require('superb');

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the project',
      default: () => process.argv[2] || ':folderName:',
      validate: val => {
        if (process.env.NODE_ENV === 'test' && val === 'apfe') return true;
        return /^\w[\w-]*$/.test(val);
      },
    },
    description: {
      message: 'How would you describe the project',
      default: `my ${superb.random()} project`,
    },
  },
  move: {
    // We keep `.gitignore` as `gitignore` in the project
    // Because when it's published to npm
    // `.gitignore` file will be ignored!
    _npmrc: '.npmrc',
    _babelrc: '.babelrc',
    _gitignore: '.gitignore',
    _eslintignore: '.eslintignore',
    _browserslistrc: '.browserslistrc',
    '_README.md': 'README.md',
    '_package.json': 'package.json',
    '_eslintrc.js': '.eslintrc.js',
    '_postcssrc.js': '.postcssrc.js',
    '_stylelintrc.js': '.stylelintrc.js',
  },
  post: async ctx => {
    ctx.gitInit();
    ctx.showTip();
  },
};
