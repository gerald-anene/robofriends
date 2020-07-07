import React from 'react';
import Card from './Card';
const Cards=({robots})=>{

const robotArray=robots.map((users,i)=>{
	return <Card key={i} name={robots[i].name} email={robots[i].email} id={robots[i].id} />
});

	return(

          <div>
          {robotArray}
          </div>      
		  )
}

export default Cards;