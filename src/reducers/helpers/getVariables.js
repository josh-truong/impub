// function getVariables(dict, variables = {}) { // tail recursion method
//     for (const [key, value] of Object.entries(dict)) {
//         if (key === 'args' && dict[key] instanceof Array) {
//             dict[key].forEach(elt => {
//                 if (elt.hasOwnProperty('name')) {
//                     variables[Object.values(elt)[0]] = null
//                 }
//                 else if (elt.hasOwnProperty('content')) {
//                     getVariables(elt.content, variables)
//                 } else {
//                     getVariables(elt, variables)
//                 }
//             })
//         }
//     }
//     return variables
// }

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