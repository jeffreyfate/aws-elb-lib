const {repackageArrayParam} = require('./lib/aws/request/repackage-array-param')
const {elbDescribeTargetGroups} = require('./aws/elb')
const {extractArns} = require('./lib/aws/target-group/arn/extract-from-response')
const {getTargetGroupArnsByName} = require('./mod/get-target-group-arns-by-name')

exports.getTargetGroupArnsByName = async function(names) {
  return getTargetGroupArnsByName(names, repackageArrayParam, elbDescribeTargetGroups, extractArns)
}