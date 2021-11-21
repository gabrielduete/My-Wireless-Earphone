import React from 'react'
import './itens.css'
import Item from '../item/Item';
import Slider from "react-slick";

function Itens(props){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }   

    return(
        <section className = 'itens'>
            <h1>Veja alguns Fones de ouvido</h1>
            <Slider {...settings}>
                {props.fones.map(
                    fone => <Item
                                srcImg = {fone.srcImg}
                                marca = {fone.marca}
                                preco = {fone.preco}
                                modelo = {fone.modelo}
                                descricao = {fone.descricao}
                            />
                )}
            
            </Slider>
        </section>
    )
}

export default Itens