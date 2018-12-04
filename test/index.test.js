import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

const getPkgFields = pkg => {
  pkg = JSON.parse(pkg)
  delete pkg.description
  return pkg
}

const verifyPkg = async (t, answers) => {
  const stream = await sao.mockPrompt(template, answers)

  const pkg = stream.fileContents('package.json')
  t.snapshot(stream.fileList, 'Generated files')
  t.snapshot(getPkgFields(pkg), 'package.json')
}

test('defaults', async t => {
  await verifyPkg(t, {
    name: 'san',
  })
})

test('custom description', async t => {
  await verifyPkg(t, {
    name: 'san',
    description: 'description',
  })
})
