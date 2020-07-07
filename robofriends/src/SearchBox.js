import React from 'react';

const SearchBox=({searchRobots})=>{

	return (
            <div>
            <input 
            type='search'
             placeholder='search robots'
             onChange={searchRobots}
              />
            </div>
		   )
}

export default SearchBox;