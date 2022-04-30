/**
 * Check for all required props
 * @param {object} keyLst - List of strings
 * @param {object} action - 
 * @returns {boolean} - true if all keys in list is in action
*/
function checkProps(keyLst, action) {
    const init_value = 1;
    const res = keyLst.reduce(
        (res, key) => res * action.hasOwnProperty(key), 
        init_value)
    return res
}

export default checkProps