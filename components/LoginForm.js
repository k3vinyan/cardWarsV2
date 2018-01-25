import React, { Component } from 'react';
import { VERIFY_USER } from '../src/Event';

export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUser = ({user, isUser}) =>{
    console.log(user, isUser);
    if(isUser){
      this.setError("Username already in used")
    } else {
      this.props.setUser(user)
    }
  }

  handleChange = (e)=>{
    this.setState({name: e.target.value});
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const { socket } = this.props;
    const { name } = this.state;
    console.log(socket)
    socket.emit(VERIFY_USER, name, this.setUser);
  }

  setError = (error)=>{
    this.setState({error})
  }

  render(){
    const { name, error } = this.state;
    return (
      <div className="login-container">
        <div>
          <p>Welcome!</p>
          <form onSubmit={this.handleSubmit} className="login-form">
            <label>
              Name:
              <input
                type="text"
                ref={(input) => {this.textInput = input}}
                id="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
            <br></br>
            <input type="submit" value="Submit" className="margin-10"/>
          </form>
            <div className="error">{error ? error: null}</div>
        </div>
      </div>
    )
  }

}
