import React from 'react'
import './item.css'

function Item(props){
    return (
        <div className = 'fone'>
            <img src = {props.srcImg} alt="imagem-fone" />
            <button>Saiba Mais</button>
        </div>
    )
}

export default Item