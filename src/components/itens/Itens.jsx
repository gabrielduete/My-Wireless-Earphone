import React from 'react'
import './itens.css'
import Item from '../item/Item';
import Slider from "react-slick";

function Itens(props){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

    return(
        <section className = 'containerItens'>
            <h1>Veja alguns Fones de ouvido</h1>
            <div class = 'itens'>
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

                {props.fones.map(
                    fone => console.log(fone))}
            </div>
        </section>
    )
}

export default Itens