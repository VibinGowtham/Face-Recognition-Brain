import React from 'react';
import './facedetection.css';

const Facedetection=({Imageurl,box})=>{
return(
	<div className='center ma3'>
	<div className='absolute'>
    <img id='image' style={{width:'500px',height:'auto'}} alt=''src={Imageurl}/>
    <div className='bounding-box' style={{top: box.toprow, bottom: box.bottomrow, right: box.rigthcol,left: box.leftcol}}> 
    </div>
    </div>
	</div>
	);
}

export default Facedetection;