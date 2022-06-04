import React, { useEffect, useState } from 'react';
import PlayerShow from '../PlayerShow/PlayerShow';
import './Players.css'

const Players = () => {
    const [players , setPlayers] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setPlayers(data.categories))
    },[])

    return (
        <div>
        <div className='card-page'>
            {
                
                    players.map(player => <PlayerShow player={player}></PlayerShow>)
                
            }
        </div>
        </div>
    );
};

export default Players;