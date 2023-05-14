import allReducers from './reducers/conf_reducers'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

export {
    initialState,
    allReducers,
}