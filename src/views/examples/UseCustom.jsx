import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/userCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {
    
    const [count, inc, dec] = useCounter(10)

    const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'
    const response = useFetch(url)

    function showInfo(states) {
        return states.map((state) => <li key={state.Name}>{ state.Name } - { state.Description }</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <PageTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{ count }</span>
                <div>
                    <button className="btn"
                    onClick={() => dec()}>-1</button>
                    <button className="btn"
                    onClick={() => inc()}>+1</button>
                </div>
            </div>
            <PageTitle title="Exercicio #02" />
            <div className="center">
                <ul>
                    { response.data ? showInfo(response.data) : false }
                </ul>
            </div>
        </div>
    )
}

export default UseRef
