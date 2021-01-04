import React, { useState } from 'react';
import './Products.css';
import axios from 'axios';
import Box from '../components/Box';

function Products() {
    const [poke, setpoke] = useState([])
    const getpoke = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1000`)
            .then(res => {
                console.log(res);
                setpoke(res.data.results)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='products'>
            <Box />
            <div id='ball'>
                <div id='left'>
                    <button onClick={getpoke}> Click for Pokemon </button>
                </div>
                <div id='right'>

                    <table >
                        <tbody>
                            <tr>
                                <th>Number</th>
                                <th>pokemon</th>
                            </tr>
                            {poke.map((mon, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{mon.name}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Products;
