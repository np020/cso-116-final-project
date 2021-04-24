import './App.css';
import React, { Component } from 'react'

const sampleText = "<img src='' onerror='alert(0)' />";

class Xss extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sanitized: true
    };
  }

  getUnsanitzedWayXSS = () => {
    return <div dangerouslySetInnerHTML={{ __html: sampleText }} />;
  }

  getSanitzedWayXSS = () => {
    return <div> {sampleText} </div>;
  }

  setSanatizedFlag = () => {
    this.setState({sanitized: !this.state.sanitized});
  }


  render() {
  return (
    <div className="App">
    <header className="App-header">

      <h1>XSS Attacks - React has your back</h1>
      <p>Sample user input = {sampleText}</p>
      <button onClick={this.setSanatizedFlag}>
        {this.state.sanitized ? "Dangerous Way" : "Sanitized Way"}
      </button>
      {this.state.sanitized ? this.getSanitzedWayXSS(): this.getUnsanitzedWayXSS()}
    </header>
    </div>
  );
}
}

export default Xss;
