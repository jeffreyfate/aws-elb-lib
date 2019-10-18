const test = require('tape')
const {getTargetGroupArnsByName} = require('../../src/mod/get-target-group-arns-by-name')

/**
 * getTargetGroupArns
 */
test('getTargetGroupArnsByName responds from array of target group names with array of target group ARNs', async t => {
  const params = []
  const repackageArrayParam = (keyName, array) => ({[keyName]: array})
  const elbDescribeTargetGroups = async params => t.deepEqual(params, {'Names':[]})
  const extractArns = response => ['arn']

  const result = await getTargetGroupArnsByName(params, repackageArrayParam, elbDescribeTargetGroups, extractArns)
  const expected = ['arn']

  t.deepEqual(result, expected, 'correctly')

  t.end()
})