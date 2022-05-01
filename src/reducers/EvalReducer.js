import { ADD_SCOPE, EVAL_EXPR, UPDATE_VARIABLE } from "../constants"
import getVariables from "./helpers/getVariables";
import checkProps from "./helpers/checkProps";
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
const EvalReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_SCOPE: {
            const mathJsExpr = action.expr; // math js expression to evaluate
            const latexExpr = math.parse(mathJsExpr).toTex() // Convert math js expression to tex

            const parser = math.parse(mathJsExpr) // Retrieve Abstract Syntax Tree (AST)
            const variables = getVariables(parser) // Retrieve variables

            let result = null
            try {
                result = Algebrite.run(`printlatex(${mathJsExpr})`)
            }
            catch(error) {
                console.error('Cannot Evaluate Expression!')
            }


            return {
                ...state,
                [action.scope]: {
                    'result': result,
                    'mathJsExpr': mathJsExpr,
                    'latexExpr': latexExpr,
                    'var': variables
                }
            };
        }
        case UPDATE_VARIABLE: {
            const requires = ['scope', 'var', 'val']
            const requiredProps = checkProps(requires, action)
            if (!requiredProps) { console.error(`[EvalReducer] UPDATE_VARIABLE - Requires ${requires}`) }

            // Validate if the declared variable is within scope
            let status = false;
            try { status = !checkProps([action.var], state[action.scope].var) }
            catch (error) { console.error(`[EvalReducer] UPDATE_VARIABLE - Undeclared Scope (${action.scope})!`) }
            if (status) { console.error(`[EvalReducer] UPDATE_VARIABLE - Undeclared Variable (${action.var}) within scope(${action.scope})!`) }

            return EvalReducer({
                ...state,
                [action.scope]: {
                    ...state[action.scope],
                    var: {
                        ...state[action.scope].var,
                        [action.var]: action.val
                    }
                }
            }, { type: EVAL_EXPR, scope: action.scope })
        }
        case EVAL_EXPR: {
            const scope = state[action.scope].var;
            const mathJsExpr = state[action.scope].mathJsExpr;
            const latexExpr = state[action.scope].latexExpr;
            let result = '';
            
            try { // If all variables are not null value
                const code = math.parse(mathJsExpr).compile();
                result = code.evaluate(scope);
            } catch (error) { // Some or none of variables have null value
                let partial_eval = mathJsExpr;
                for (const variable in scope) { // Substitute variables with it's assigned value
                    partial_eval = (scope[variable] === null) ? partial_eval : Algebrite.run(`printlatex(subst(${scope[variable]}, ${variable}, ${partial_eval}))`);
                }
                result = (partial_eval === mathJsExpr) ? latexExpr : partial_eval;
            }
            
            return {
                ...state,
                [action.scope]: {
                    ...state[action.scope],
                    result: result
                }
            }
        }
        default:
            return state
    }
}

export default EvalReducer
