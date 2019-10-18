/**
 * Query AWS for the target ARNs associated with the provided names
 * 
 * @param {Array} names - which target group names to match
 * @param {Function} repackageArrayParam - creates the parameter object to query using
 * @param {Function} elbDescribeTargetGroups - queries AWS to describe target groups
 * @param {Function} extractArns - pulls out the ARNs from the AWS response
 * @returns {Array} ARNs found
 */
exports.getTargetGroupArnsByName = async function(names, repackageArrayParam, elbDescribeTargetGroups, extractArns) {
  const params = repackageArrayParam('Names', names)
  const response = await elbDescribeTargetGroups(params)
  return extractArns(response)
}