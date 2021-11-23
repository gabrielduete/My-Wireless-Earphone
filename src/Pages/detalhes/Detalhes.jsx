import React from 'react'
import './detalhes.css'

function Detalhes(props){
    return (
        <>
            <h1>{props.modelo}</h1>
            <h2>{props.marca}</h2>
            <img src = {props.fones.srcImg} alt = 'imagem-fone' />
            <p>{props.descricao}</p>
        </>
    )
}

export default Detalhes