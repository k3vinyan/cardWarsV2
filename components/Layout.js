import React, {Component} from 'react';
import LoginForm from './LoginForm';
import io from 'socket.io-client';
import { USER_CONNECTED } from '../src/Event';


const socketUrl = "http://localhost:3000/?";
const socket = io(socketUrl);
socket.on('connect', function(){
  console.log("connected")
})

export default class Layout extends Component {

  constructor(props){
    super(props);

    this.state = {
      socket:null,
      user: null
    };
  }

  componentWillMount=()=>{
    this.initSocket();
  }

  initSocket = ()=>{
    const socket = io(socketUrl)
    socket.on('connect', ()=>{
      console.log("Connected")
    })
    this.setState({socket})
  }

  setUser = (user)=>{
    const {socket } = this.state;
    socket.emit("USER_CONNECTED");
    this.setState({user})
  }

  logout = ()=>{
    const {socket} = this.state;
    socket.emit(LOGOUT);
    this.setState({user: null});
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
