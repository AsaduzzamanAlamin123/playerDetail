import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PlayerDetailesShow from '../PlayerDetailesShow/PlayerDetailesShow';

const PlayersDetails = () => {
    const {fooddet} = useParams()
    const [detailes , setDetailes] = useState([]);
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${fooddet}`)
        .then(res=>res.json())
        .then(data=>setDetailes(data.meals))
    },[])
    return (
        <div>
            <h2>showdesc</h2>
            <div>
                {
                    detailes?.map(detail => <PlayerDetailesShow detail={detail}></PlayerDetailesShow>)
                }
            </div>
            
        </div>
    );
};

export default PlayersDetails;