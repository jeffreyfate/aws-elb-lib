const {repackageArrayParam} = require('./lib/aws/request/repackage-array-param')
const {elbDescribeTargetGroups} = require('./aws/elb')
const {extractArns} = require('./lib/aws/target-group/arn/extract-from-response')
const {getTargetGroupArnsByName} = require('./mod/get-target-group-arns-by-name')

/**
 * Fetches the target group ARNs that are associated with the given target group names
 * 
 * @param {Array} names - the target group names to look for
 * @returns {Array} the found ARNs
 */
exports.getTargetGroupArnsByName = async function(names) {
  return getTargetGroupArnsByName(names, repackageArrayParam, elbDescribeTargetGroups, extractArns)
}