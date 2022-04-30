/**
 * 
 * Retrieves variables from MathJs node tree
 * 
*/
function getVariables(node) {
    const filtered = node.filter(function (node) {
        return (node.isSymbolNode && node.name)
    })
    const distinct = Array.from(new Set(filtered.map((elt) => elt.name)))
    var var_dict = {}
    distinct.map((elt) =>  var_dict[elt] = null)
    return var_dict
}

export default getVariables