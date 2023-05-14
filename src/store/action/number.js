export function numberAdd2(dispatch) {

    fetch('url')
        .then(resp => resp.json())
        .then(json => dispatch({ type: 'userList', payload: json}))


    dispatch({ type: 'number_add2' })
}