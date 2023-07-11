import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoCoins.css';

function CryptoCoins() {

    const [coins, setCoins] = useState([]);

    // const url = 'https://api.coincap.io/v2';
    // const assets = 'assets';

    useEffect(()=> {
        axios.get('https://api.coincap.io/v2/assets')
        .then((res) => {
            setCoins(res.data.data)
            console.log(res.data.data)
        })
        .catch((err) => console.log(err))
    }, []);

  return (
    <div className='container'>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market cap</th>
                    <th>VWAP(24Hr)</th>
                    <th>Supply</th>
                    <th>Volume(24Hr)</th>
                    <th>Change(24Hr)</th>
                </tr>
            </thead>
            <tbody>
                {
                    coins.map((coin) => {
                        return (
                            <tr className='coin_row' key={coin.id}>
                                <td className='rank'>{coin.rank}</td>
                                <td>
                                    <div className='currency_name'>
                                        <p>{coin.name}</p>
                                        <p>{coin.symbol}</p>
                                    </div>
                                </td>
                                <td>${Number(coin.priceUsd).toFixed(2)}</td>
                                <td>${Number(coin.marketCapUsd).toFixed(2)}</td>
                                <td>${Number(coin.vwap24Hr).toFixed(2)}</td>
                                <td>{Number(coin.supply).toFixed(2)}</td>
                                <td>${Number(coin.volumeUsd24Hr).toFixed(2)}</td>
                                <td>{Number(coin.changePercent24Hr).toFixed(2)}%</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default CryptoCoins