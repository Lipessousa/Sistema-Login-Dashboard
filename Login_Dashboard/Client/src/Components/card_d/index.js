import React from 'react';



export default function Card_D(props) {
    const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'


    fetch(url).then(res => res.json()
    ).then(conteudo => {

        var dolar = conteudo.USDBRL.bid
        document.getElementById('dolar').innerHTML = `R$ ${dolar}`
        
    })


    return (
        <div className='Card'>

            <div className='Card-info'>
                <p>Dólar atual</p>
                <img className='icon' src={props.icon}></img>
            </div>

            <div className='Card-content'>
                <h3 id='dolar'></h3>
            </div>

        </div>
    );
} 