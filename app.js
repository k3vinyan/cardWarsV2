import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';

class Layout extends React.Component {
  render(){
    return(
      <LoginForm />
    )
  }
}

ReactDOM.render(<Layout />, document.getElementById('app'))
