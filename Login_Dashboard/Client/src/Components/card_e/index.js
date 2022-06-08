import React from 'react';
import '../estilização/card.css';


export default function Card_E(props) {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'


    fetch(url).then(res => res.json()
    ).then(conteudo => {

        var euro = conteudo.EURBRL.bid
        document.getElementById('euro').innerHTML = `R$ ${euro}`

    })

    return (
        <div className='Card'>

            <div className='Card-info'>
                <p>Euro atual</p>
                <img className='icon' src={props.icon}></img>
            </div>

            <div className='Card-content'>
                <h3 id='euro'></h3>
            </div>

        </div>
    );
} 