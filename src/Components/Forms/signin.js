import React from 'react';

class Signin extends React.Component{
  constructor(props){
  super(props);
  this.state={
  SignInEmail:'',
  SignInPassword:''
  }
  }

onEmailChange=(event)=>{
this.setState({SignInEmail:event.target.value});
}

onPasswordChange=(event)=>{
this.setState({SignInPassword:event.target.value});
}

onButtonSubmit=()=>{
fetch('https://protected-shelf-62570.herokuapp.com/signin', {
  method:'POST',
  headers:{'content-type':'application/json'},
  body:JSON.stringify({
    email:this.state.SignInEmail,
    password:this.state.SignInPassword
  })
})
.then(response=> response.json())
.then(user => {
  if(user.id){
      this.props.loadUser(user);
      this.props.userChange('home');
  }else{
    console.log("Error Looging in");
  }
})

}

  render(){
    const{userChange}=this.props;
    return(
  <div className="br2 shadow-3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  <div className='pa4 black-80'>
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
        onChange={this.onEmailChange}
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" 
        name="email-address"  
        id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
         onChange={this.onPasswordChange}
        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="password" 
        name="password"  
        id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input 
       onClick={this.onButtonSubmit}
       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
       type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db" onClick={()=>userChange('Register')} >Register</a>
    </div>
  </div>
    </div>
    </div>
  );
}
  }


export default Signin;
