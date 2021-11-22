import React from 'react'
import './itens.css'
import Item from '../item/Item';
import Slider from "react-slick";

function Itens(props){

    const settings = {
        dots: true,
        infinite: false,
        rows: 1,
        arrows: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        speed: 1000,
        dotsClass: "button__bar",
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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