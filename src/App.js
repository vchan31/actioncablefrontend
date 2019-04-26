import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from 'semantic-ui-react'


class App extends Component {

  state = {
    tweets: [],
    addTweet: "",
    newTweetToDisplay: false
  }

  handleInputOnChange = (e) => {
    this.setState({
      addTweet: e.target.value
    })
  }

  handleAddTweet = (e) => {
    e.preventDefault()
    console.log('submitted a tweet!')

  }

  render() {
    console.log(this.state)
    return (
      <div className='App'>
          <form onSubmit={(e)=>this.handleAddTweet(e)}>
          <div class="ui huge icon input"><input value={this.state.addTweet} type="text" placeholder="Search..." onChange={(e)=>this.handleInputOnChange(e)}/>
          <button class="ui button">Add Tweet</button></div>
          </form>


      </div>
    );
  }
}

export default App;
