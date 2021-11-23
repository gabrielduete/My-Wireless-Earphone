import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

function Item(props){
    
    return (
        <div className = 'fone'>
            <p>{props.modelo}</p>
            <img src = {props.srcImg} alt="imagem-fone" />
            <Link to = '/fone' className = 'buttonLink'>Saiba Mais</Link>
        </div>
    )
}

export default Item