import React, {Component} from 'react';
import '../App.css';
// import {} from "react-bootstrap"
import Home from "./Home"
import SigninForm from "./SigninForm"

class App extends Component {
  
  
  state ={
    username: ""
  }


  signin =(username)=>{
    this.setState({
      username
    })
  }

  signout =()=>{
    this.setState({
      username: ""
    })
  }
  
  render(){
    return (
      <div className="App">
      {
        this.state.username
          ? <Home username={this.state.username} signout={this.signout}/>
          : <SigninForm signin={this.signin}/>
      }
        
      </div>
    );
  }
 
}

export default App;
