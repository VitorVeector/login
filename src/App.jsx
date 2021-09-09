import React, { Component } from "react";
import './App.css';

/* Components */
import Register from './components/register'
import Login from './components/login'

/* Assets */
import reactImg from './assets/react1.png'

class App extends Component{
  constructor(props){
    super(props)
    this.email = ""
    this.pass = ""
  }

  methods = {
    setUser(email, pass){
      this.email = email
      this.pass = pass
      console.log(this.email, this.pass)
    },

    changeComponent(){

    }
  }
  render(){
    return(  
      <div className="App">
        <h1 className="title">Register to your account</h1>
        <img src={reactImg} alt="React Logo" className="reactImg"/>
        <div className='component'>
          <>
          <Register setUsr={this.methods.setUser.bind(this)}/>
          <Login email={this.email} pass={this.pass}/>
          </>
        </div>
      </div>
      
    )
  }
}

export default App;
