import React from 'react'
import './header.css'
import EarphoneHeader from '../../images/earhpone-header.png'
import Typical from 'react-typical'

function Header(){
    return (
        <header>
            <div className = 'ladoEsquerdo'>
                <div className = 'textos'>
                    
                    <Typical
                        steps={['', 300, 'My Wireless Earphones', 3000]}
                        loop={1}
                        wrapper="h1"
                    />

                    <Typical
                        steps={['', 900, 'Tudo sobre Wireless Earphones', 3000]}
                        loop={1}
                        wrapper="p"
                    />

                </div>
            </div>
            <div className = 'ladoDireito'>
                <img className = 'img-titulo' src = {EarphoneHeader} alt="airpods-header" />
            </div>
        </header>
    )
}

export default Header