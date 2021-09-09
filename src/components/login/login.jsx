import React, { Component } from 'react'
import './style.css'

class Login extends Component{
    constructor(props){
        super(props)
        this.email = ""
        this.pass = ""
    }

    methods = {
        setInfo(e){
            e.stopPropagation()
            e.preventDefault()
            
        },
        setEmail(e){
            e.stopPropagation()
            this.email = e.target.value
            console.log(this.props.email)
          },
        setPass(e){
            e.stopPropagation()
            this.pass = e.target.value
            console.log(this.props.email)
        }
    }

    render(){
        return(
            <div className="form-login">
                <form 
                    action="" 
                    className="form-login_form"
                    >
                        <input 
                            className="input input-email"
                            type="email" 
                            name="email" 
                            id="input-email"
                            placeholder="Enter your e-mail"
                            onChange={this.methods.setEmail.bind(this)}
                            />

                        <input 
                            className="input input-password"
                            type="password" 
                            name="password" 
                            id="input-password"
                            placeholder="Enter your password"
                            onChange={this.methods.setPass.bind(this)} />
                        <button onClick={this.methods.setInfo}>LOGIN</button>
                </form>
            </div>
        )
    }
}

export default Login