import React from 'react';

const Card=({name,email,id})=>{

	return (
            <div className='tc dib ma2 br3 bg-light-green shadow-5 grow'>
            <img src={`https://robohash.org/${id}?200x200`} alt='searchRobots' />
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
            </div>
		   )
}

export default Card;