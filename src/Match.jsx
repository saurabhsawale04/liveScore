import React from 'react';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Score from './Score';


const Match = (props) => {
    const link = 'http://www.pngmart.com/files/11/Versus-Battle-Transparent-PNG.png';
    let [data, setData] = useState([]);

    useEffect(() => {

        const ma = async () => {
            const res = await fetch('https://cricapi.com/api/matches?apikey=60VQyaOODae7huhwBR5Jm3OD9533');
            // const res = await fetch('https://cricapi.com/api/cricketScore?apikey=60VQyaOODae7huhwBR5Jm3OD9533&unique_id=1239534');
            const actual = await res.json();
            setData(actual.matches);

            // console.log(data);
            console.log(actual.matches);
        }
        ma();

    }, []);


    return (<div className='cards'>{
        data.map((val) => {

            if (val.type === props.name) {
                return (
                    <>
                        <div className='card'>
                            <h2 className='head'>{val['team-1']} vs {val['team-2']}</h2>
                            <div className='smd'>
                                <h4 className='time'>{new Date(val.dateTimeGMT).toLocaleDateString()} {new Date(val.dateTimeGMT).toLocaleTimeString()}</h4>
                                {val.matchStarted === true ? <h4 className='smh' style={{color:'green'}}>Match Started</h4> : <h4 style={{color:'red'}}className='smh'>Match Not yet Started</h4>}
                            </div>
                            <div className='team'>{val['team-1']}</div>
                            <div className='team'>
                                <img src={link} alt="vs" className='image' />
                            </div>
                            <div className='team'>{val['team-2']}</div>
                            <div></div>
                            <Popup trigger={<Button size='small' variant="contained" color="primary" className='but'>Get Score</Button>} position="center top">
                                <Score id={val['unique_id']} />
                            </Popup>
                            <div></div>
                        </div>
                    </>
                );
            }

            else
                return null;

        }
        )}
    </div>
    )



}

export default Match;
