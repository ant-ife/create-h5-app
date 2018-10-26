'use strict'

const {
  webpackHelper,
} = require('macaca-wd')

const {
  driver,
  BASE_URL,
} = webpackHelper

describe('test/typhoon/home.test.js', () => {
  describe('home page', () => {
    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2,
        })
    })
    beforeEach(() => {
      return driver
    })
    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this)
    })
    after(() => {
      return driver
        .openReporter(false)
        .quit()
    })

    it('home page should be ok', () => {
      return driver
        .getUrl(`${BASE_URL}/typhoon.html`)
        .elementByCss('.title')
        .hasText('Welcome to typhoon!')
    })
  })
})
