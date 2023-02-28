import React from 'react';
import './Crypto.css';
import fleche from './fleche.png';
import { CardList, LIST_CARD } from '../../CryptoCard/CardList';


const Crypto = () => {
    const clickUp = () => {
         window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
     }

    return (
        <div className='data'>
            
        <div className='flex flex-row flex-wrap justify-center'>
        {LIST_CARD.map((card, i)=> {
            return(
                <CardList {...card} key={i} />
            )
        })}
        </div>
            <div className="bouton" onClick={clickUp}>
                <img src={fleche} alt="UptoNavBar" className="icone" />
            </div>
        </div>
    )
}
export default Crypto;