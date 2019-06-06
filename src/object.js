/**
 * Gets the value from the object based on Path provided.
 * @param {Object} obj Object to be transversed
 * @param {string} path Path to the value you want in the object
 * @param {*} defaultValue default value if path not found
 */
export const getDescendantProp = ( obj, path, defaultValue = '') => {
    const result = path.split('.').reduce((acc, part) => acc && acc[part], obj)
    return result || defaultValue
}
