import React from 'react';

const Navigation=({userChange,isSignedin})=>{
	if(isSignedin){
    return(
    <nav style={{display:'flex' , justifyContent:'flex-end'}}>
    	<p className='f3 link dim black underline pa3 pointer' onClick={()=>userChange('Signout')} >Sign Out</p>
    </nav>
	);
}else{
		return(
    <nav style={{display:'flex' , justifyContent:'flex-end'}}>
    	<p onClick={()=>userChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
    	<p onClick={()=>userChange('Signin')} className= 'f3 link dim black underline pa3 pointer'>Sign In</p>
    </nav>);
	}
}

export default Navigation;