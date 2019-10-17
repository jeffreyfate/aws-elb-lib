const {repackageArrayParam} = require('./src/lib/aws/request/repackage-array-param')
const {elbDescribeTargetGroups} = require('./src/aws/elb')
const {extractArns} = require('./src/lib/aws/target-group/arn/extract-from-response')
const {getTargetGroupArns} = require('./src/mod/get-target-group-arns')

exports.getTargetGroupArns = async function(names) {
  return getTargetGroupArns(names, repackageArrayParam, elbDescribeTargetGroups, extractArns)
}