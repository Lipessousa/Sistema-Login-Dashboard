import React from 'react';
import '../estilização/card.css';


export default function Card_Bt(props) {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'


    fetch(url).then(res => res.json()
    ).then(conteudo => {

        var bitcoin = conteudo.BTCBRL.bid
        document.getElementById('bitcoin').innerHTML = `R$ ${bitcoin}K`

    })

    return (
        <div className='Card'>

            <div className='Card-info'>
                <p>Bitcoin atual</p>
                <img className='icon' src={props.icon}></img>
            </div>

            <div className='Card-content'>
                <h3 id='bitcoin'></h3>
            </div>

        </div>
    );
} 