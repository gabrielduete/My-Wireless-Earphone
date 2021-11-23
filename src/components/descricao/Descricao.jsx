import React from 'react'
import './descricao.css'
import Earphone1 from '../../images/earhpone-desc.png'
import Typical from 'react-typical'

function Descricao(){
    return (
        <section className = 'sectionInfo'>
            <div>
                <Typical
                    steps={
                        ['',
                        100, 
                        'O que são Wireless Earphones?', 
                        3000]}
                    loop={1}
                    wrapper="h1"
                />
            </div>

            <div className = 'ladoEsquerdo ladoEsquerdo-2'>
                <Typical
                    steps={
                        ['',
                        2000, 
                        'Os Wireless Earphones(Fones de ouvido sem fio) são fones que utilizam o Bluetooth para se conectar aos dispositivos de áudio, ou seja, o som é passado de um lugar para o outro através de ondas de rádio, numa frequência que não recebe ou causa interferência.', 
                        3000]}
                    loop={1}
                    wrapper="p"
                />
                <Typical
                    steps={
                        ['',
                        17600, 
                        'Dependendo da sua necessidade, você pode optar pelos fones de ouvidos sem fio que ficam presos na orelha ou por headphones, aqueles maiores que se prendem na cabeça.', 
                        3000]}
                    loop={1}
                    wrapper="p"
                />
            </div>

            <div className = 'ladoDireito ladoDireito-2'>
                <img src= {Earphone1} alt="earphone-imagem" />
            </div>

        </section>
    )
}

export default Descricao