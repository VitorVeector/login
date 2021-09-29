import React, { Component } from 'react'
import './style.css'

class Login extends Component{
    constructor(props){
        super(props)
        this.email = ''
        this.pass = ''
    }

    methods = {
        setInfo(e){
            e.stopPropagation()
            e.preventDefault()
            
            e.target.className = this.props.status === true ? "form-login_form success" : "form-login_form failed"
            this.props.setLogin(this.email, this.pass)
        },
        setEmail(e){
            e.stopPropagation()
            this.email = e.target.value
          },
        setPass(e){
            e.stopPropagation()
            this.pass = e.target.value
        }
        
    }

    render(){
        return(
            <div className="form-login">
                <form 
                    action="" 
                    className="form-login_form"
                    onSubmit={this.methods.setInfo.bind(this)}
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
                        <button className="input-register_input">LOGIN</button>
                </form>
            </div>
        )
    }
}

export default Login