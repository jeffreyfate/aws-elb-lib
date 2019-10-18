/**
 * Extract the ARN values from the describeTargetGroups response
 * 
 * @param {Object} response - from describeTargetGroups with all target groups that matched
 * @returns {Array} target group ARNs, empty if none found
 */
exports.extractArns = function (response) {
  if (response && response.TargetGroups && Array.isArray(response.TargetGroups)) {
    return response.TargetGroups
        .filter(tg => "TargetGroupArn" in tg)
        .map(tg => tg.TargetGroupArn)
  } else {
    return []
  }
}