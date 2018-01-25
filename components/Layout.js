import React from 'react';
import LoginForm from './LoginForm';
import io from 'socket.io-client';

const socketUrl = "https://localhost:3000";
export default class Layout extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      socket:null
    };
  }

  componentWillMount=()=>{

  }

  initSocket = ()=>{
    const socket = io(socketUrl)
    socket.on('connect', ()=>{
      console.log("Connected")
    })
    this.setState({socket})
  }

  render(){
    const { title } = this.props;
    return(
      <div>
        <LoginForm />
      </div>
    )
  }
}
