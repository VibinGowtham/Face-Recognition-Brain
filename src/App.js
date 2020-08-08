import React, { Component } from 'react';
import Logo from './Components/logo/logo';
import Imglinkform from './Components/imglinkform/imglinkform';
import Facedetection from './Components/facedetection/facedetection';
import Rank from './Components/Rank/rank';
import Signin from './Components/Forms/signin';
import Navigation from './Components/Navigation/navigation';
import Register from './Components/Forms/register';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '57c44285c6c54822b0aa2a0a29ef5428'
});


const ParticleOptions={
Particles:{
  number:{
    value:30,
    density:{
      enable:true,
      value_area:800
    }
  }
}
}

const initialstate={
      input:'',
      Imageurl:'',
      box:{},
      route:'Signin',
      isSignedin: false,
       user:{
        id:'',
        name: '',
        email: '',
        entries:0,
        Date:''
      }
    }

class App extends Component{
  constructor(){
    super();
    this.state=initialstate;
  }

loadUser=(data)=>{
this.setState({user:{
        id:data.id,
        name: data.name,
        email: data.email,
        entries:data.entries,
        Date:data.Date
}})
}

  userChange=(route)=>{
   if(route==='Signout'){
        this.setState(initialstate)
  }
    else  if(route==='home'){
    this.setState({isSignedin: true})
    }
    this.setState({route: route})
  }

calculateface=(data)=>{
const clarifaiface=data.outputs[0].data.regions[0].region_info.bounding_box;
const image=document.getElementById('image');
const height=Number(image.height);
const width=Number(image.width);
return{
  leftcol: clarifaiface.left_col*width,
  rigthcol: width-(clarifaiface.right_col*width),
  bottomrow: height-(clarifaiface.bottom_row*height),
  toprow: clarifaiface.top_row*height
}
}
 updatebox(box){
   this.setState({box:box});
 }
 Oninputchange=(event)=>{
  this.setState({input:event.target.value});
  }

  Onbuttonclick=()=>{
    this.setState({Imageurl:this.state.input});  
   app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
     this.state.input)
   .then(response=>{
   if(response)
    {  
      fetch('https://protected-shelf-62570.herokuapp.com/image', {
      method:'put',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
      id:this.state.user.id
  })
})
    .then(response => response.json())
    .then(count => {
        this.setState(Object.assign(this.state.user,{entries:count}));
      }) 
   }
    this.updatebox(this.calculateface(response))
   })
   .catch(err=>console.log(err));
 }
  render(){
      return (
      <div className='App'>
      <Particles className='Particles' params={ParticleOptions} />
      <Navigation isSignedin={this.state.isSignedin} userChange={this.userChange}/>
     { 
         (this.state.route==='home') ?
       <div>
      <Logo/>
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
      <Imglinkform Oninputchange={this.Oninputchange} Onbuttonclick={this.Onbuttonclick}/>
      <Facedetection box={this.state.box} Imageurl={this.state.Imageurl}/>
      </div>
      :(
         this.state.route==='Signin'?
          <Signin loadUser={this.loadUser} userChange={this.userChange}/> : 
          <Register loadUser={this.loadUser} userChange={this.userChange}/>  
        )
       
    }            
      </div>
             );  
 }

  }

export default App;
