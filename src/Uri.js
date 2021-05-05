import './App.css';
import React, { Component } from 'react'

const sampleJS = "javascript:alert(0)";

class Uri extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sanitized: true,
      badlink: "javascript:alert(0)",
      goodLink: "https://www.google.com/"
    };
  }

  setSanatizedFlag = () => {
    this.setState({sanitized: !this.state.sanitized});
  }

  santizeURL = () => {
     const sanitized = new URL(this.state.goodLink);

     if(sanitized.protocol !== 'https' || sanitized.protocol !== 'http'){
       return this.state.goodLink;
     }
     return sanitized.href
  }

  render() {
    console.log(this.santizeURL() )
  return (
    <div className="App">
    <header className="App-header">

      <h1>URI Schemes - be careful with dynamic urls</h1>
      <button onClick={this.setSanatizedFlag}>
        {this.state.sanitized ? "Show Dangerous Way" : "Show Sanitized Way"}
      </button>
      <a href={this.state.sanitized ? this.santizeURL() : this.state.badlink}>{this.state.sanitized ? "Sanitized anchor tag" : "Unsanitized anchor tag"}</a>
    </header>
    </div>
  );
}
}

export default Uri;
