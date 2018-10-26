#!/usr/bin/env node

const sao = require('sao');
const path = require('path');

const argv = process.argv.slice(2);
const targetPath = path.resolve(argv[0] || '.');

console.log(`> Generating project in ${targetPath}`);

sao({
  template: __dirname,
  targetPath,
}).catch(err => {
  console.error(err.name === 'SAOError' ? err.message : err.stack);
  process.exit(1);
});

