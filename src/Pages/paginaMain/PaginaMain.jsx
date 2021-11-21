import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import Descricao from '../../components/descricao/Descricao'
import Itens from '../../components/itens/Itens'
import './pagMain.css'

function PagMain(props){
    return (
        <main className = 'container'>
            <Header />
            <Descricao />
            <Cards />
            <Itens
                fones = {props.fones}
            />
            <Footer />
        </main>
    )
}

export default PagMain