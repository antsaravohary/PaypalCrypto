import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataApp from './DataApp';

function RealTimeData() {
    const [datas, setDatas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins')
            .then(res => {
                setDatas(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredDatas = datas.filter(datas =>
        datas.name.toLowerCase().includes(search.toLowerCase()) || datas.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text font-bold mt-10'>Donnée complète en temps réel</h1>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            {filteredDatas.map(datas => {
                return (
                    <DataApp
                        key={datas.id}
                        name={datas.name}
                        price={datas.market_data.current_price.eur}
                        symbol={datas.symbol}
                        marketcap={datas.market_data.total_volume.eur}
                        volume={datas.market_data.market_cap.eur}
                        image={datas.image.small}
                        priceChange={datas.market_data.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    );
}

export default RealTimeData;
