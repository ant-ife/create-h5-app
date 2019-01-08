#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const cli = require('cac')()

cli
  .command('<target-folder>', 'Generate a new project to target folder')
  .option(
    '--npm-client <client>',
    'Choose an npm client for installing packages (\'tnpm\' | \'yarn\')'
  )
  .action(async (targetFolder, { npmClient }) => {
    const app = sao({
      generator: path.join(__dirname, '..'),
      outDir: targetFolder,
      npmClient,
    })

    await app.run().catch(sao.handleError)
  })

cli.help()
cli.version(require('../package').version)

cli.parse()
