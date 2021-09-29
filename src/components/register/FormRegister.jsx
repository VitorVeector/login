import React, { Component } from "react";
import "./style.css";

class FormRegister extends Component {
  constructor(props){
    super(props)
    this.email = ''
    this.pass =  ''
    this.passVrf = ''
  };

  methods = {
    getValue(e){
      e.stopPropagation()
      e.preventDefault()
      this.passEqual = this.passVrf === this.pass ? true : false
      e.target.className = this.passEqual === false ? "form-register_form invalid" : "form-register_form confirm"
      if(this.passEqual === false){
      } else {
        this.props.setUsr(this.email, this.pass, this.passEsqual)
      }
    },
    getEmail(e){
      e.stopPropagation()
      this.email = e.target.value
    },
    getPass(e){
      e.stopPropagation()
      this.pass= e.target.value
    },
    getPassVrf(e){
      e.stopPropagation()
      this.passVrf = e.target.value
    }
  }

  render() {
    return (
      <div className="form-register">
        <form action="" className="form-register_form" onSubmit={this.methods.getValue.bind(this)}>
          <input
            className="input input-email"
            type="email"
            name="email"
            id="input_email"
            placeholder="Enter your e-mail"
            onChange={this.methods.getEmail.bind(this)}
          />

          <input
            className="input input-pass"
            type="password"
            name=""
            id="input_pass"
            placeholder="Enter your password"
            onChange={this.methods.getPass.bind(this)}
          />

          <input
            className='input input-pass_verify'
            type="password"
            name=""
            id="input_pass_verify"
            placeholder="Repeat your password"
            onChange={this.methods.getPassVrf.bind(this)}
          />

            <button className="input-register_input input-register_submit">Register</button>   
        </form>
      </div>
    );
  }
}

export default FormRegister;
