/**
 * Repackage an array into an object
 * 
 * @param {String} keyName - key used in the request parameter
 * @param {Array} array - value of the request parameter
 * @returns {Object} - new newly repackaged parameter object
 */
exports.repackageArrayParam = function (keyName, array) {
  return {[keyName]: array}
}