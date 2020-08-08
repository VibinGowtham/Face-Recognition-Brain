import React from 'react';

const Rank=({name,entries})=>{
return(
	<div className='white'>
	<div className='f3'>
	    <p>{`Hey ${name},You are ranked at...`}</p>
    </div>
    <div className='f1'>
	    <p>{entries}</p>
    </div>
    </div>
		);
}

export default Rank;