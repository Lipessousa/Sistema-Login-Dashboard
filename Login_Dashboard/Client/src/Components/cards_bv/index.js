import React from 'react';
import './estilocard_bv.css';


export default function Card_Bv(props) {
    const url2 = 'https://sheetdb.io/api/v1/2r3uckvx61zd5';
    fetch(url2)
        .then((response) => response.json())
        .then(json => {

            let sVariacao = ((json[1].Valores))


            document.getElementById('indice').innerHTML = (json[0].Valores)
            document.getElementById('variação').innerHTML = (`${sVariacao}`)

            let sFloat = parseFloat(sVariacao)

            if (sFloat > 1) {
                document.getElementById("variação").style.color = "blue";
            }
            else if (sFloat < 1) {
                document.getElementById("variação").style.color = "red";
            } else {
                document.getElementById("variação").style.color = "black";
            }
        });


    return (
        <div className='Card-bv'>

            <div className='Card-info-bv'>
                <p>Índice IBOV</p>
                <img className='icon' src={props.icon}></img>
            </div>

            <div className='Card-content'>
                <h3 id='indice'></h3>
                <h4 id='variação'></h4>
            </div>

        </div>
    );
} 