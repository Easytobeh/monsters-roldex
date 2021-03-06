import React from 'react';
import './card.css';

export const Card = (props) => (
    <div className='card-container'>
        {/* {console.log(props)} */}
        <img alt='monster' width='180' height='180'src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h1 className>{props.monster.name}</h1>
    </div>
)