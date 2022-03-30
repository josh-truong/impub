/*
    env = {
        scope_name: {
            result: null,
            expr: null,
            scope: {
                var_1: null,
                ...
                var_n: null
            }
        }
    }
*/

var env = {}

function setScope(id, expr, scope) {
    if (scope.constructor !== Object) { throw 'Scope is not an Object type' }
    if (!env.hasOwnProperty(id)) { 
        const result = null
        env[id] = {
            result,
            expr,
            scope
        }
    }
}

function getScope(id) {
    if (!env.hasOwnProperty(id)) { throw 'Scope does not exists.' }
    return env[id].scope
}

function isVariable(scope_id, var_name) {
    return !(env.hasOwnProperty(scope_id) &&
        env[scope_id].scope.hasOwnProperty(var_name))
}

function setVariable(scope_id, var_name, value) {
    if (!env.hasOwnProperty(scope_id)) {
        env[scope_id] = { result: null }
        env[scope_id].scope = {}
    }
    (env[scope_id].scope)[var_name] = value
}

function setExpr(scope_id, expr) {
    if (!env.hasOwnProperty(scope_id)) { throw 'Must declare <Var>, then <Evaluate>' }
    env[scope_id]['expr'] = expr
}

function getExpr(id) {
    if (!env.hasOwnProperty(id)) { throw 'Scope does not exists.' }
    return env[id].expr
}

function setResult(id, value) {
    if (!env.hasOwnProperty(id)) { throw 'Scope does not exists.' }
    env[id].result = value
}

function getResult(id) {
    if (!env.hasOwnProperty(id)) { throw 'Scope does not exists.' }
    return env[id].result
}


export { env, setScope, getScope, isVariable, setVariable, setExpr, getExpr, setResult, getResult }