const appRoot = require('app-root-path');
const {repackageArrayParam} = require(appRoot + '/src/lib/aws/request/repackage-array-param')
const {elbDescribeTargetGroups} = require(appRoot + '/src/aws/elb')
const {extractArns} = require(appRoot + '/src/lib/aws/target-group/arn/extract-from-response')
const {getTargetGroupArns} = require(appRoot + '/src/mod/get-target-group-arns')

exports.getTargetGroupArns = async function(names) {
  return getTargetGroupArns(names, repackageArrayParam, elbDescribeTargetGroups, extractArns)
}