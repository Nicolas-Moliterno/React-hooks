export function login(dispach, name) {
    dispach({type: 'login', payload: name})
}