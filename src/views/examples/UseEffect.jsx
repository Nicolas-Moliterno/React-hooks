import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react'
import { useEffect } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(number) {
    const n = parseInt(number)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {

    //01

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if(fatorial > 100000) {
            document.title = "Eita..."
        }
    }, [fatorial])

    //02
    const [status, setStatus] = useState("")

    useEffect(function() {
        setStatus(number % 2 === 0 ? 'Par' : "Impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <div className="center">
               <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{ fatorial === -1 ? 'Não existe' : fatorial}</span>
               </div>
                <input type="number" className="input" value={ number }
                onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exec 02" />
            <div className="center">
                <div>
                <span className="text">Status: </span>
                <span className="text red">{ status }</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
