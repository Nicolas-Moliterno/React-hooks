import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, allReducers } from '../../store/config'
import { numberAdd2 } from '../../store/action/number'
import { login } from '../../store/action/user'


const UseReducer = (props) => {
    const [state, dispach] = useReducer(allReducers, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className="text">{ state.user.name }</span>
                    : <span className="text">Sem usuario</span>
                }

                <button className="btn"
                    onClick={() => login(dispach, 'Joao')}>Login</button>

                <span className="text">{ state.number }</span>
            </div>
            <div>
                <button className="btn"
                    onClick={() => numberAdd2(dispach)}>+2</button>
                <button className="btn"
                    onClick={() => dispach({type: 'number_mult7'})}>*7</button>
                <button className="btn"
                    onClick={() => dispach({type: 'number_div25'})}>/25</button>
                <button className="btn"
                    onClick={() => dispach({type: 'number_int'})}>Int</button>
                <button className="btn"
                    onClick={() => dispach({type: 'number_addn', payload: -9})}>-9</button>
                <button className="btn"
                    onClick={() => dispach({type: 'number_addn', payload: +11})}>+11</button>
            </div>
        </div>
    )
}

export default UseReducer
