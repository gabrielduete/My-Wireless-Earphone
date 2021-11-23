import React, { useState } from 'react'
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
    
    const [style, setStyle] = useState({
        display: 'none'
    })

    const [styleCarrossel, setStyleCarrossel] = useState({
        display: 'block'
    })

    const [foneDigitado, setFoneDigitado] = useState()

    // const handleMostraItem = (nomeFone) => {
    //     setFoneDigitado(nomeFone)
        
    //     props.fones.forEach(fone => {
    //         if (foneDigitado === fone.modelo){
    //             setStyle({
    //                 display: 'block'
    //             })
                
    //             setStyleCarrossel({
    //                 display: 'none'
    //             })

    //             console.log("É IGUAL PORRA!")
    //         }else{
    //             setStyle({
    //                 display: 'none'
    //             })

    //             setStyleCarrossel({
    //                 display: 'block'
    //             })
    //         }
    //     })
    // }

    return(
        <section className = 'containerItens'>

            <h1>Veja alguns Fones de ouvido</h1>

            <input 
                type="text" 
                name="search" 
                id="search" 
                placeholder = 'Buscar fone' 
                onChange = {
                    (e) => setFoneDigitado(e.target.value)
                }
            />

            <div className = 'showItem' style = {style}>
                {props.fones.forEach(
                    fone => {
                        if(foneDigitado === fone){
                            <Item
                                srcImg = {fone.srcImg}
                                marca = {fone.marca}
                                preco = {fone.preco}
                                modelo = {fone.modelo}
                                descricao = {fone.descricao}
                                id = {fone.id}
                            />
                        }
                    }
                )}
            </div>
            
            <div class = 'itens' style = {styleCarrossel}>
                <Slider {...settings}>
                    {props.fones.map(
                        fone => <Item
                                    srcImg = {fone.srcImg}
                                    marca = {fone.marca}
                                    preco = {fone.preco}
                                    modelo = {fone.modelo}
                                    descricao = {fone.descricao}
                                    id = {fone.id}
                                />
                    )}
                </Slider>
            </div>

        </section>
    )
}

export default Itens
