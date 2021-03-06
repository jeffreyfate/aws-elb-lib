const test = require('tape')
const {repackageArrayParam} = require('../../../../src/lib/aws/request/repackage-array-param')

/**
 * repackageArrayParam
 */
test('repackageArrayParam repackages array', t => {
  const params = ['param']

  const result = repackageArrayParam('Params', params)
  const expected = { Params: [ 'param' ]}

  t.deepEqual(result, expected, 'correctly')

  t.end()
})