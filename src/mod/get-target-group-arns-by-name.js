exports.getTargetGroupArnsByName = async function(names, repackageArrayParam, elbDescribeTargetGroups, extractArns) {
  const params = repackageArrayParam('Names', names)
  const response = await elbDescribeTargetGroups(params)
  return extractArns(response)
}