
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BaserowSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BaserowSDK.test()
    equal(testsdk instanceof BaserowSDK, true,
      'BaserowSDK.test() must return a client synchronously')
  })

})
