import React from 'react';
import './imglinkform.css';

const Imglinkform=({Oninputchange, Onbuttonclick})=>{
return(
	<div>
	<p className='f3'>
		{'This Magic Brain Will detect faces in Your Image.Give it a Try'}
	</p>
	<div className='center'>
	<div className='pa4 br3 shadow-5 center form'>
		<input onChange={Oninputchange} className='f4 pa2 w-70 center' type='text'/>
		<button onClick={Onbuttonclick} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
	</div>
	</div>
	</div>
	);
}

export default Imglinkform;