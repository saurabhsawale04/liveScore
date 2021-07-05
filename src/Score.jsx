import React from 'react';
import { useState } from 'react';

const Score = (props) => {
    const [det, setDet] = useState({});
    const ma = async () => {
        
        const res = await fetch(`https://cricapi.com/api/cricketScore?apikey=60VQyaOODae7huhwBR5Jm3OD9533&unique_id=${props.id}`);
        const actual = await res.json();
        setDet(actual);

        // console.log(data);
        console.log(actual);
    }
    ma();
    return (
        <>
            {/* <div>{det.score}</div> */}
            {det.matchStarted === true ? <h4 style={{color:'green'}}>{det.score}</h4> : <h4 style={{color:'red'}}>Match Not yet Started</h4>}
        </>
    )
}

export default Score;