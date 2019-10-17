const test = require('tape')
const {getTargetGroupArns} = require('../../../src/mod/get-target-group-arns')

/**
 * getTargetGroupArns
 */
test('getTargetGroupArns responds from request with valid target group ARNs', async t => {
  const params = []
  const repackageArrayParam = names => {Names:[]}
  const elbDescribeTargetGroups = async params => {}
  const extractArns = response => ['arn']

  const request = {}
  const result = await getTargetGroupArns(params, repackageArrayParam, elbDescribeTargetGroups, extractArns)
  const expected = ['arn']

  t.deepEqual(result, expected, 'correctly')

  t.end()
})