import React from 'react'
import './cards.css'

function Cards(){
    return (
        <section className = 'containerCards'>

            <div className = 'card'>
                <h2>Vantagens</h2>
                <ul>
                    <li>Sem fios embolando</li>
                    <li>Ideal para exercícios</li>
                    <li>Não existe mau contato</li>
                    <li>Use longe do aparelho</li>
                </ul> 
            </div>

            <div className = 'card'>
                <h2>Desvantagens</h2>
                <ul>
                    <li className = 'desvantagem'>Necessita de bateria</li>
                    <li className = 'desvantagem'>Menor tempo de vida</li>
                    <li className = 'desvantagem'>Consome mais bateria</li>
                    <li className = 'desvantagem'>Geralmente mais caros</li>
                </ul> 
            </div>

        </section>
    )
}

export default Cards