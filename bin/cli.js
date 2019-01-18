#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const cli = require('cac')()

require('./checkUpdate')()

cli
  .command('<target-folder>', 'Generate a new project to target folder')
  .option(
    '--npm-client <client>',
    'Choose an npm client for installing packages (\'tnpm\' | \'yarn\')'
  )
  .option(
    '--registry <registry>',
    'Use a custom registry for package manager'
  )
  .action(async (targetFolder, { npmClient, registry }) => {
    const app = sao({
      generator: path.join(__dirname, '..'),
      outDir: targetFolder,
      npmClient,
      registry,
    })

    await app.run().catch(sao.handleError)
  })

cli.help()
cli.version(require('../package').version)

cli.parse()
