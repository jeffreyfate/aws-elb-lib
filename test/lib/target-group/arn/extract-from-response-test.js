require('module-alias/register')
const test = require('tape')
const {extractArns} = require('@lib/aws/target-group/arn/extract-from-response')

test('extractArns extracts ARNs from TargetGroups array', t => {
  const response = { TargetGroups: [{ TargetGroupArn: 'targetGroupArn'}]}

  const result = extractArns(response)
  const expected = ['targetGroupArn']

  t.deepEqual(result, expected, 'correctly')

  t.end()
})

test('extractArns extracts ARNs with no TargetGroupArn key', t => {
  const response = { TargetGroups: { blah: 'blah'}}

  const result = extractArns(response)
  const expected = []

  t.deepEqual(result, expected, 'correctly')

  t.end()
})

test('extractArns extracts ARNs with no TargetGroups array', t => {
  const response = { TargetGroups: { TargetGroupArn: 'targetGroupArn'}}

  const result = extractArns(response)
  const expected = []

  t.deepEqual(result, expected, 'correctly')

  t.end()
})

test('extractArns extracts ARNs with no TargetGroups key', t => {
  const response = { blah: 'blah' }

  const result = extractArns(response)
  const expected = []

  t.deepEqual(result, expected, 'correctly')

  t.end()
})

test('extractArns extracts ARNs with null response', t => {
  const response = null

  const result = extractArns(response)
  const expected = []

  t.deepEqual(result, expected, 'correctly')

  t.end()
})

test('extractArns extracts ARNs with undefined response', t => {
  const response = undefined

  const result = extractArns(response)
  const expected = []

  t.deepEqual(result, expected, 'correctly')

  t.end()
})