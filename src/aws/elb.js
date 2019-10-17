const ELBv2 = require('aws-sdk/clients/elbv2')

exports.elbDescribeTargetGroups = async function(params) {
  const elbv2 = new ELBv2({apiVersion: '2015-12-01'})
  return await elbv2.describeTargetGroups(params).promise()
}