import { ADD_SCOPE, EVAL_EXPR, UPDATE_VARIABLE } from "../constants"
import getVariables from "./helpers/getVariables";
var math = require('mathjs');
var Algebrite = require('algebrite');

/**
 * 
 * EvalReducer part of redux store for Calculator module. Curently 
 * has 3 switch cases: ADD_SCOPE, UPDATE_VARIABLE, and EVAL_EXPR. These 
 * cases belongs to the following components, respectively: Scope, Var, and 
 * Result. 
 * 
*/
const EvalReducer = (state={}, action) => {
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

            return EvalReducer({
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
                let partial_eval = '';
                const scope_var = state[action.scope].var
                for (const variable in scope_var) {
                    if (scope_var[variable] !== null) {
                        partial_eval += `${variable}=${scope_var[variable]}\n`
                    }
                }

                var evaluated;
                if (partial_eval !== '') {
                    partial_eval += `${state[action.scope].mathJsExpr}`;
                    
                    evaluated = Algebrite.run(partial_eval);
                } else {
                    evaluated = state[action.scope].mathJsExpr
                }
                
                return {
                    ...state,
                    [action.scope]: {
                        ...state[action.scope],
                        // result: Algebrite.run(`printlatex(${evaluated})`)
                        result: evaluated
                    }
                }
            }
        default:
            return state
    }
}

export default EvalReducer
