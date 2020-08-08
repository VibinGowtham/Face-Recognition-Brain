import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo=()=>{
return(
	<div className='ma3 mt0'>
	<Tilt className="Tilt br2 shadow-3" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
    <div className="Tilt-inner"> <img className='pa3 ml2 mt1' alt='brain' src={brain}/> </div>
   </Tilt>
	</div>
	);
}

export default Logo;