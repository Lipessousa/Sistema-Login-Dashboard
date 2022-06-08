import React from 'react';
import './estilohome.css';
import Card_E from '../card_e/index';
import euro from '../homepage/euro.png';
import Card_D from '../card_d/index';
import dolar from '../homepage/dolar.png';
import Card_Bt from '../cards_bt/index';
import bitcoin from '../homepage/bitcoin.png';
import Card_Bv from '../cards_bv/index';
import grafico from '../homepage/grafico-crescente.png';


export default function HomeDashboard(){
    return(
    <div className='main'>
        <div className='container'>
            <div className='grid-container'>
                <div className='grid-item'>
                    <Card_E
                    icon={euro}/>
                </div>
           
                <div className='grid-item'>
                    <Card_D
                    icon={dolar}/>
                </div>
      
                <div className='grid-item'>
                    <Card_Bt
                    icon={bitcoin}/>
                </div>

                <div className='grid-item'>
                    <Card_Bv
                    icon={grafico}/>
                </div>
            </div>
        </div>
    </div>
    );
}