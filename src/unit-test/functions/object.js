/**
 * @param {Object} object root object that you want to add new properties
 * @param {Object} properties object that containing all propeties that you want to add
 **/
function addPropertiesToObject(object, properties) {
  if (typeof properties !== "object" || !properties) return object;
  if (typeof object !== "object" || !object) return null;
  object = { ...object, ...properties };
  return object;
}

module.exports = {
  addPropertiesToObject
};
