import { ADD_SCOPE, EVAL_EXPR, UPDATE_VARIABLE } from "../constants"
var math = require('mathjs')

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

const calcReducer = (state={}, action) => {
    switch (action.type) {
        case ADD_SCOPE:
            const mathJsExpr = action.expr; // math js expression to evaluate
            const latexExpr = math.parse(mathJsExpr).toTex() // Convert math js expression to tex
        
            const parser = math.parse(mathJsExpr) // Retrieve Abstract Syntax Tree (AST)
            const variables = getVariables(parser) // Retrieve variables

            return {
                ...state,
                [action.scope]: {
                    'result': null,
                    'mathJsExpr': mathJsExpr,
                    'latexExpr': latexExpr,
                    'var': variables
                }
            };
        case UPDATE_VARIABLE:
            // Check if all required props has been declared
            let requiredProps = action.hasOwnProperty('scope') &&
                                action.hasOwnProperty('var') &&
                                action.hasOwnProperty('val');
            if (!requiredProps) { throw 'Props requires scope, var, and val.' }

            // Validate if the declared variable is within scope
            let status = false;
            try {
                status = !(state[action.scope].var.hasOwnProperty(action.var))
            } catch (error) { throw `Scope ${action.scope} has not been declared!` }
            if (status) { throw `Variable ${action.var} does not exists within scope ${action.scope}!` }

            return calcReducer({
                ...state,
                [action.scope]: {
                    ...state[action.scope],
                    var: {
                        ...state[action.scope].var,
                        [action.var]: action.val
                    }
                }
            }, { type: EVAL_EXPR, scope: action.scope})

        case EVAL_EXPR:
            try {
                const code = math.parse(state[action.scope].mathJsExpr).compile();
                const scope = state[action.scope].var;
                return {
                    ...state,
                    [action.scope]: {
                        ...state[action.scope],
                        result: code.evaluate(scope)
                    }
                }
            }
            catch(error) {
                // Return latex format as a result
                    // if there are unintialized variables
                return state
            }
        default:
            return state
    }
}

export default calcReducer
