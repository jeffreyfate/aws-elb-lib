require('module-alias/register')
const {repackageArrayParam} = require('@lib/aws/request/repackage-array-param')
const {elbDescribeTargetGroups} = require('@aws/elb')
const {extractArns} = require('@lib/aws/target-group/arn/extract-from-response')
const {getTargetGroupArns} = require('@mod/get-target-group-arns')

exports.getTargetGroupArns = async function(names) {
  return getTargetGroupArns(names, repackageArrayParam, elbDescribeTargetGroups, extractArns)
}