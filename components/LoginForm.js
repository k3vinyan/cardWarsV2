import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return (
      <div className="login-container">
        <div>
          <p>Welcome!</p>
          <form onSubmit={this.handleSubmit} >
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" className="margin-10"/>
          </form>
        </div>
      </div>
    )
  }

}
